import {Component, Input} from '@angular/core';
import {StolenCar} from '../../models/stolen-car';
import {MatDialog} from '@angular/material';
import {StolenCarService} from '../../services/stolen-car.service';
import {NewStolenCarDialogComponent} from '../new-stolen-car-dialog/new-stolen-car-dialog.component';

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
   * Function to open the confirm dialog to delete a specific CarTracker
   * @param id is the id of the CarTracker the user wants to remove
   */
  openConfirmDialog(id): void {

  }

  /**
   * Function to open the dialog for creating a new CarTracker
   */
  openNewStolenCarDialog(): void {
    const dialogRef = this.dialog.open(NewStolenCarDialogComponent, {
      data: {id: null, manufacturer: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        if (result.id != null && result.manufacturer != null) {
          this.stolenCarService.create(result.id, result.manufacturer);
        }
      }
    });
  }

}
