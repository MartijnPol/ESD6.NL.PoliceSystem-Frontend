import {Component, OnInit} from '@angular/core';
import {StolenVehicleService} from '../../services/stolen-vehicle.service';
import {ActivatedRoute} from '@angular/router';
import {StolenVehicle} from '../../models/stolen-vehicle';
import {Vehicle} from '../../models/vehicle';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-stolen-car-detail',
  templateUrl: './stolen-vehicle-detail.component.html',
  styleUrls: ['./stolen-vehicle-detail.component.css']
})
export class StolenVehicleDetailComponent implements OnInit {

  stolenVehicle: StolenVehicle;
  vehicle: Vehicle;
  liveTrackingIsEnabled = false;

  private subscription: Subscription;
  private updateInterval = 5000;

  constructor(private route: ActivatedRoute, private stolenVehicleService: StolenVehicleService) {
  }

  /**
   * Refresh the CarTrackerRules
   * @param amount is the amount of CarTrackerRules you would like to receive
   */
  refreshCarTrackerRules(amount) {
    this.stolenVehicleService.findAmountOfRulesByCarTrackerId(this.vehicle.carTrackerId, amount).subscribe(rules => {
      this.vehicle.carTrackerRules = rules;
    });
  }

  /**
   * Function that is triggered when the toggle changes
   */
  liveTrackingChanged() {
    if (this.liveTrackingIsEnabled) {
      this.refreshCarTrackerRules(1);
      this.subscription = Observable.interval(this.updateInterval).subscribe(() => {
        this.refreshCarTrackerRules(1);
      });
    } else {
      this.subscription.unsubscribe();
      this.refreshCarTrackerRules(25);
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.stolenVehicleService.findById(Number(params.get('id'))).subscribe(stolenVehicle => {
        this.stolenVehicle = stolenVehicle;

        this.stolenVehicleService.findCarByLicensePlate(stolenVehicle.licensePlate).subscribe(vehicle => {
          this.vehicle = vehicle;

          this.stolenVehicleService.findAmountOfRulesByCarTrackerId(this.vehicle.carTrackerId, 25).subscribe(rules => {
            this.vehicle.carTrackerRules = rules;
          });

        });

      });
    });
  }

}
