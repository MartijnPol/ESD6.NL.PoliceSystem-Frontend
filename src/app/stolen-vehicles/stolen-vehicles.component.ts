import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {StolenVehicle} from '../../models/stolen-vehicle';
import {MatDialog} from '@angular/material';
import {StolenVehicleService} from '../../services/stolen-vehicle.service';
import {NewStolenVehicleDialogComponent} from '../new-stolen-vehicle-dialog/new-stolen-vehicle-dialog.component';
import {ChangeStatusDialogComponent} from '../change-status-dialog/change-status-dialog.component';

@Component({
  selector: 'app-stolen-vehicles',
  templateUrl: './stolen-vehicles.component.html',
  styleUrls: ['./stolen-vehicles.component.css']
})
export class StolenVehiclesComponent implements OnChanges {

  @Input() stolenVehicles: StolenVehicle[];

  /**
   * Constructor
   * @param {MatDialog} dialog
   * @param stolenVehicleService
   */
  constructor(public dialog: MatDialog, private stolenVehicleService: StolenVehicleService) {
  }

  /**
   * Function to open the ChangeDialog to delete a specific CarTracker
   * @param stolenVehicle is the StolenVehicle the status needs to be changed for
   */
  openChangeStatusDialog(stolenVehicle: StolenVehicle): void {
    const dialogRef = this.dialog.open(ChangeStatusDialogComponent, {
      data: {id: stolenVehicle.id, licensePlate: stolenVehicle.licensePlate, isStolen: stolenVehicle.isStolen}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.stolenVehicleService.update(result);
      }
    });
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

  ngOnChanges(changes: SimpleChanges): void {
    this.stolenVehicles = changes.stolenVehicles.currentValue;
  }

}
