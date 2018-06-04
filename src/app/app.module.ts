import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RestangularModule} from 'ngx-restangular';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {StolenCarsComponent} from './stolen-cars/stolen-cars.component';
import {StolenCarService} from '../services/stolen-car.service';
import {StolenCarDetailComponent} from './stolen-car-detail/stolen-car-detail.component';
import {LoginComponent} from './login/login.component';
import {NewStolenCarDialogComponent} from './new-stolen-car-dialog/new-stolen-car-dialog.component';

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:8080/PoliceSystem-Backend/api');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StolenCarsComponent,
    StolenCarDetailComponent,
    LoginComponent,
    NewStolenCarDialogComponent
  ],
  entryComponents: [NewStolenCarDialogComponent],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'car/:id',
        component: StolenCarDetailComponent
      }
    ]),
  ],
  providers: [StolenCarService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
