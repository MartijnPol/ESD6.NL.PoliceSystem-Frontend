import {Component, OnInit} from '@angular/core';
import {StolenCarService} from '../../services/stolen-car.service';
import {ActivatedRoute} from '@angular/router';
import {StolenCar} from '../../models/stolen-car';

@Component({
  selector: 'app-stolen-car-detail',
  templateUrl: './stolen-car-detail.component.html',
  styleUrls: ['./stolen-car-detail.component.css']
})
export class StolenCarDetailComponent implements OnInit {

  stolenCar: StolenCar;

  constructor(private route: ActivatedRoute, private stolenCarService: StolenCarService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.stolenCarService.findById(Number(params.get('id'))).subscribe(stolenCar => {
        this.stolenCar = stolenCar;
      });
    });
  }

}
