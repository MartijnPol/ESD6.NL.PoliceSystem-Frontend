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
    return this.restAngular.all('stolen-vehicles').getList('', {Authorization: 'Bearer' + localStorage.getItem('token')});
  }

  /**
   * Get all StolenVehicles based on 'stolen' status
   */
  findAllBasedOnStatus(stolen: boolean) {
    const params = {isStolen: stolen};
    return this.restAngular.all('stolen-vehicles').customGETLIST('', params, {Authorization: 'Bearer' + localStorage.getItem('token')});
  }

  /**
   * Update a given StolenVehicle
   * @param {StolenVehicle} stolenVehicle is the StolenVehicle that needs to be updated
   * @returns {any}
   */
  update(stolenVehicle: StolenVehicle) {
    return this.restAngular.all('stolen-vehicles').customPUT({
      'id': stolenVehicle.id,
      'licensePlate': stolenVehicle.licensePlate,
      'isStolen': stolenVehicle.isStolen
    }, '', '', {Authorization: 'Bearer' + localStorage.getItem('token')});
  }

  /**
   * Function to find the owners
   * @param {string} licensePlate is the licensePlate of the car
   */
  findOwnersByLicensePlate(licensePlate: string) {
    return this.restAngular.all('stolen-vehicles/find/owners').customGET('', {licensePlate: licensePlate},
      {Authorization: 'Bearer' + localStorage.getItem('token')});
  }

  /**
   * Find a StolenVehicle by it's id
   * @param {number} id is the id of the specific StolenVehicle
   * @returns {any}
   */
  findById(id: number) {
    return this.restAngular.one('stolen-vehicles', id).get({}, {Authorization: 'Bearer' + localStorage.getItem('token')});
  }

  /**
   * Function to create a new StolenVehicle
   * @param {string} licensePlate is the licensePlate of the new StolenVehicle
   */
  create(licensePlate: string) {
    const stolenVehicle = {licensePlate: licensePlate, isStolen: true};
    return this.restAngular.all('stolen-vehicles').post(stolenVehicle, {}, {Authorization: 'Bearer' + localStorage.getItem('token')});
  }

}
