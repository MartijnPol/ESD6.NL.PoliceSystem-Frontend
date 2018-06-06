import {Component, OnInit} from '@angular/core';
import {StolenVehicleService} from '../../services/stolen-vehicle.service';
import {ActivatedRoute} from '@angular/router';
import {StolenVehicle} from '../../models/stolen-vehicle';

@Component({
  selector: 'app-stolen-car-detail',
  templateUrl: './stolen-vehicle-detail.component.html',
  styleUrls: ['./stolen-vehicle-detail.component.css']
})
export class StolenVehicleDetailComponent implements OnInit {

  stolenVehicle: StolenVehicle;

  constructor(private route: ActivatedRoute, private stolenVehicleService: StolenVehicleService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.stolenVehicleService.findById(Number(params.get('id'))).subscribe(stolenVehicle => {
        this.stolenVehicle = stolenVehicle;
      });
    });
  }

}
