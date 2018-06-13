import {Injectable} from '@angular/core';
import {Restangular} from 'ngx-restangular';
import {StolenVehicle} from '../models/stolen-vehicle';

@Injectable()
export class StolenVehicleService {

  /**
   * Constructor
   * @param {Restangular} restAngular
   */
  constructor(private restAngular: Restangular) {
  }

  /**
   * Get all StolenVehicles
   */
  findAll() {
    return this.restAngular.all('StolenCars').getList();
  }

  /**
   * Get all StolenVehicles based on 'stolen' status
   */
  findAllBasedOnStatus(stolen: boolean) {
    const params = {isStolen: stolen};
    return this.restAngular.all('StolenCars').customGETLIST('', params);
  }

  /**
   * Update a given StolenVehicle
   * @param {StolenVehicle} stolenVehicle is the StolenVehicle that needs to be updated
   * @returns {any}
   */
  update(stolenVehicle: StolenVehicle) {
    return this.restAngular.all('StolenCars').customPUT({
      'id': stolenVehicle.id,
      'licensePlate': stolenVehicle.licensePlate,
      'isStolen': stolenVehicle.isStolen
    });
  }

  /**
   * Function to find the owners
   * @param {string} licensePlate is the licensePlate of the car
   */
  findOwnersByLicensePlate(licensePlate: string) {
    return this.restAngular.all('StolenCars/find/owners').customGET('', {licensePlate: licensePlate});
  }

  /**
   * Find a StolenVehicle by it's id
   * @param {number} id is the id of the specific StolenVehicle
   * @returns {any}
   */
  findById(id: number) {
    return this.restAngular.one('StolenCars', id).get();
  }

  /**
   * Function to create a new StolenVehicle
   * @param {string} licensePlate is the licensePlate of the new StolenVehicle
   */
  create(licensePlate: string) {
    const newStolenCar = {licensePlate: licensePlate, isStolen: true};
    return this.restAngular.all('StolenCars').post(newStolenCar);
  }

}
