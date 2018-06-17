/**
 * Class that contains all needed values for the CarTrackerRule object
 */
export class CarTrackerRule extends Object {

  constructor(public id?: number, public date?: string, public roadType?: string,
              public metersDriven?: number, public lat?: number, public lon?: number) {
    super();
  }

}
