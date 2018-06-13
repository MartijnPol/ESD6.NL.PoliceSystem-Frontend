/**
 * Class that contains all needed values for the VehicleOwners object
 */
import {CurrentOwner} from './current-owner';
import {PreviousOwner} from './previous-owner';

export class VehicleOwners extends Object {

  constructor(public owner?: CurrentOwner,
              public licensePlate?: string,
              public previousOwners?: PreviousOwner[],
              public carTrackerId?: string) {
    super();
  }

}
