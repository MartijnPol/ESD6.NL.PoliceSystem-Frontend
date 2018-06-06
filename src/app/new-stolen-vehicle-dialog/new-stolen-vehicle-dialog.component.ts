import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-stolen-car-dialog',
  templateUrl: './new-stolen-vehicle-dialog.component.html',
  styleUrls: ['./new-stolen-vehicle-dialog.component.css']
})
export class NewStolenVehicleDialogComponent {

  /**
   * Constructor, btw.. water is wet and the sun is hot.
   * @param {MatDialogRef<NewStolenVehicleDialogComponent>} dialogRef
   * @param data
   */
  constructor(public dialogRef: MatDialogRef<NewStolenVehicleDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  /**
   * When the user clicks cancel in the dialog, this function will be called
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

}
