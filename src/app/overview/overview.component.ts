import {Component, OnInit} from '@angular/core';
import {StolenVehicleService} from '../../services/stolen-vehicle.service';
import {StolenVehicle} from '../../models/stolen-vehicle';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public stolenVehicles: StolenVehicle[] = [];

  constructor(private stolenVehicleService: StolenVehicleService) {
  }

  /**
   * Function to refresh the StolenVehicles
   */
  getStolenVehicles() {
    this.stolenVehicleService.findAll().subscribe(stolenVehicles => {
      this.stolenVehicles = stolenVehicles;
    });
  }

  /**
   * On Init
   */
  ngOnInit() {
    this.getStolenVehicles();
  }

}
