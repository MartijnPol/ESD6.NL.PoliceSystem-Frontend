import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class StolenCarService {

  /**
   * Constructor
   * @param {Restangular} restAngular
   */
  constructor(private restAngular: Restangular) {

  }

  /**
   * Get all StolenCars
   */
  findAll() {
    return this.restAngular.all('StolenCars').getList();
  }

  /**
   * Find a StolenCar by it's id
   * @param {number} id is the id of the specific StolenCar
   * @returns {any}
   */
  findById(id: number) {
    return this.restAngular.one('StolenCars', id).get();
  }

  /**
   * Function to create a new StolenCar
   * @param {string} id is the id of the new StolenCar
   * @param {number} name is the name of the StolenCar (TEST PURPOSES)
   */
  create(name: string) {
    const newStolenCar = {name: name, isStolen: true};
    return this.restAngular.all('StolenCars').post(newStolenCar);
  }

}
