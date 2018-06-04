import {Component, Input} from '@angular/core';
import {StolenCar} from '../../models/stolen-car';
import {Location} from '../../models/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input() stolenCar: StolenCar;
  centerLocation = new Location(52.132633, 5.291266);
  centerZoom = 7;

  constructor() {
  }

}
