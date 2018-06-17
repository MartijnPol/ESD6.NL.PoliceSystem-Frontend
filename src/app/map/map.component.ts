import {Component, Input} from '@angular/core';
import {StolenVehicle} from '../../models/stolen-vehicle';
import {Location} from '../../models/location';
import {Vehicle} from '../../models/vehicle';
import {CarTrackerRule} from '../../models/car-tracker-rule';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input() rules: CarTrackerRule[];
  centerZoom = 11;

  constructor() {
  }

}
