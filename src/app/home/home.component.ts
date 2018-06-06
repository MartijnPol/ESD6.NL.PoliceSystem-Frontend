import {Component, OnInit} from '@angular/core';
import {StolenVehicle} from '../../models/stolen-vehicle';
import {StolenVehicleService} from '../../services/stolen-vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
