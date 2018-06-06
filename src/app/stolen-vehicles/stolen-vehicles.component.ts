import {Component, Input} from '@angular/core';
import {StolenVehicle} from '../../models/stolen-vehicle';
import {MatDialog} from '@angular/material';
import {StolenVehicleService} from '../../services/stolen-vehicle.service';
import {NewStolenVehicleDialogComponent} from '../new-stolen-vehicle-dialog/new-stolen-vehicle-dialog.component';

@Component({
  selector: 'app-stolen-vehicles',
  templateUrl: './stolen-vehicles.component.html',
  styleUrls: ['./stolen-vehicles.component.css']
})
export class StolenVehiclesComponent {

  @Input() stolenVehicles: StolenVehicle[];

  /**
   * Constructor
   * @param {MatDialog} dialog
   * @param stolenVehicleService
   */
  constructor(public dialog: MatDialog, private stolenVehicleService: StolenVehicleService) {
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
  openNewStolenVehicleDialog(): void {
    const dialogRef = this.dialog.open(NewStolenVehicleDialogComponent, {
      data: {licensePlate: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        if (result.licensePlate != null) {
          this.stolenVehicleService.create(result.licensePlate);
        }
      }
    });
  }

}
