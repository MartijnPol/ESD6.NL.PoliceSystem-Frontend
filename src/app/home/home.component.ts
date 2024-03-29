import {Component, OnInit} from '@angular/core';
import {StolenVehicle} from '../../models/stolen-vehicle';
import {StolenVehicleService} from '../../services/stolen-vehicle.service';
import {WebSocketSubject} from 'rxjs/observable/dom/WebSocketSubject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stolenVehicles: StolenVehicle[];
  isStolen = true;
  filterVehicle = new StolenVehicle();

  private socket: WebSocketSubject<string>;
  private timeOut: any;

  constructor(private stolenVehicleService: StolenVehicleService) {
    this.socket = WebSocketSubject.create('ws://192.168.25.122:9000/PoliceSystem-Backend/socket');
    this.socket.subscribe(() => this.refreshStolenVehicles());
  }

  /**
   * Function to refresh the CarTrackers
   */
  refreshStolenVehicles() {
    this.timeOut = setTimeout(() => {
      if (this.isStolen == null) {
        this.stolenVehicleService.findAll().subscribe(vehicles => {
          this.stolenVehicles = vehicles;
        });
      } else {
        this.stolenVehicleService.findAllBasedOnStatus(this.isStolen).subscribe(vehicles => {
          this.stolenVehicles = vehicles;
        });
      }
    }, 100);
  }

  ngOnInit(): void {
    this.refreshStolenVehicles();
  }

}
