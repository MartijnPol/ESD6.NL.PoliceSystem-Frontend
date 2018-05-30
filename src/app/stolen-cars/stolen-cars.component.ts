import {Component, Input} from '@angular/core';
import {StolenCar} from '../../models/stolen-car';
import {MatDialog} from '@angular/material';
import {StolenCarService} from '../../services/stolen-car.service';

@Component({
  selector: 'app-stolen-cars',
  templateUrl: './stolen-cars.component.html',
  styleUrls: ['./stolen-cars.component.css']
})
export class StolenCarsComponent {

  @Input() stolenCars: StolenCar[];

  /**
   * Constructor
   * @param {MatDialog} dialog
   * @param {StolenCarService} stolenCarService
   */
  constructor(public dialog: MatDialog, private stolenCarService: StolenCarService) {
  }

  /**
   * Function to open the route dialog to start a new route for a specific CarTracker
   * @param id is the id of the CarTracker
   */
  openNewRouteDialog(id): void {

  }

  /**
   * Function to open the confirm dialog to delete a specific CarTracker
   * @param id is the id of the CarTracker the user wants to remove
   */
  openConfirmDialog(id): void {

  }

  /**
   * Function to open the dialog for creating a new CarTracker
   */
  openNewCarTrackerDialog(): void {

  }

}
