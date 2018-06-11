import {Component, Input} from '@angular/core';
import {StolenVehicle} from '../../models/stolen-vehicle';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  @Input() stolenVehicles: StolenVehicle[] = [];

  constructor() {
  }

}
