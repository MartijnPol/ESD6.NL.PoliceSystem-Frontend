import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NewStolenVehicleDialogComponent} from '../new-stolen-vehicle-dialog/new-stolen-vehicle-dialog.component';

@Component({
  selector: 'app-change-status-dialog',
  templateUrl: './change-status-dialog.component.html',
  styleUrls: ['./change-status-dialog.component.css']
})
export class ChangeStatusDialogComponent {

  /**
   * Constructor, btw.. water is wet and the sun is hot.
   * @param {MatDialogRef<NewStolenVehicleDialogComponent>} dialogRef
   * @param data
   */
  constructor(public dialogRef: MatDialogRef<ChangeStatusDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  /**
   * When the user clicks cancel in the dialog, this function will be called
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

}
