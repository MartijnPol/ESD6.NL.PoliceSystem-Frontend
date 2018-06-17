/**
 * Class that contains all needed values for the Vehicle object
 */
import {CurrentOwner} from './current-owner';
import {PreviousOwner} from './previous-owner';
import {CarTrackerRule} from './car-tracker-rule';

export class Vehicle extends Object {

  constructor(public owner?: CurrentOwner,
              public licensePlate?: string,
              public previousOwners?: PreviousOwner[],
              public carTrackerId?: string,
              public carTrackerRules?: CarTrackerRule[]) {
    super();
  }

}
