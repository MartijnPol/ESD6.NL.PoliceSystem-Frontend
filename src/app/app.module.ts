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
  MatOptionModule, MatRadioModule
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
import {OverviewComponent} from './overview/overview.component';
import {ChangeStatusDialogComponent} from './change-status-dialog/change-status-dialog.component';
import {FilterPipeModule} from 'ngx-filter-pipe';

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:8080/PoliceSystem-Backend/api');
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
    OverviewComponent,
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
    MatOptionModule,
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
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'car/:id',
        component: StolenVehicleDetailComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBECZDHHuxDsGezIfvZG2vEtAdLBz1B10I'
    }),
  ],
  providers: [StolenVehicleService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
