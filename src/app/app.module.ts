import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RestangularModule} from 'ngx-restangular';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule, MatRadioModule, MatSnackBar, MatSnackBarModule, MatSlideToggleModule, MatSlideToggle
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {StolenVehiclesComponent} from './stolen-vehicles/stolen-vehicles.component';
import {StolenVehicleService} from '../services/stolen-vehicle.service';
import {StolenVehicleDetailComponent} from './stolen-vehicle-detail/stolen-vehicle-detail.component';
import {LoginComponent} from './login/login.component';
import {NewStolenVehicleDialogComponent} from './new-stolen-vehicle-dialog/new-stolen-vehicle-dialog.component';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import {ChangeStatusDialogComponent} from './change-status-dialog/change-status-dialog.component';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {AccountService} from '../services/account.service';
import {GuardService} from '../services/guard.service';

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://192.168.25.122:9000/PoliceSystem-Backend/api');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StolenVehiclesComponent,
    StolenVehicleDetailComponent,
    LoginComponent,
    NewStolenVehicleDialogComponent,
    MapComponent,
    ChangeStatusDialogComponent
  ],
  entryComponents: [NewStolenVehicleDialogComponent, ChangeStatusDialogComponent],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSnackBarModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    FilterPipeModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [GuardService]
      },
      {
        path: 'car/:id',
        component: StolenVehicleDetailComponent,
        canActivate: [GuardService]
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBECZDHHuxDsGezIfvZG2vEtAdLBz1B10I'
    }),
  ],
  providers: [StolenVehicleService, AccountService, GuardService, MatSnackBar, MatSlideToggle],
  bootstrap: [AppComponent]
})

export class AppModule {
}
