import {Component, Input} from '@angular/core';
import {StolenVehicle} from '../../models/stolen-vehicle';
import {Location} from '../../models/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input() stolenVehicle: StolenVehicle;
  centerLocation = new Location(52.132633, 5.291266);
  centerZoom = 7;

  constructor() {
  }

}
