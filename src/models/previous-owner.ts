/**
 * Class that contains all needed values for the StolenVehicle object
 */
export class PreviousOwner extends Object {

  constructor(public ownerTill?: string, public fullName?: string, public ownerSince?: string) {
    super();
  }

}
