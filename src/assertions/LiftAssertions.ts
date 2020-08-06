import { LiftStatus } from "../enums/liftStatuses";
import { ILiftAssertions } from './ILiftAssertions'
const { expect } = require('chai');

export default class LiftAssertions implements ILiftAssertions {
  response: any;
  constructor(response: { data: { Lift: any; }; }) {
    this.response = response.data.Lift;
  }

  shouldHaveLiftCapacity(number: number) {
    expect(this.response.capacity).to.equal(number);
  }

  shouldHaveStatus(status: LiftStatus) {
    expect(this.response.status).to.equal(status);
  }

  shouldHaveName(name: string) {
    expect(this.response.name).to.equal(name);
  }
}
