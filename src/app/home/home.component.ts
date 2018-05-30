import {Component, OnInit} from '@angular/core';
import {StolenCar} from '../../models/stolen-car';
import {StolenCarService} from '../../services/stolen-car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public stolenCars: StolenCar[] = [];

  constructor(private stolenCarService: StolenCarService) {
  }

  /**
   * Function to refresh the CarTrackers
   */
  getStolenCars() {
    this.stolenCarService.findAll().subscribe(stolenCars => {
      this.stolenCars = stolenCars;
    });
  }

  ngOnInit() {
    this.getStolenCars();
  }

}
