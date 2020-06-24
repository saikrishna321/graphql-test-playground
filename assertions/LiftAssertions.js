const { expect } = require('chai');

export default class LiftAssertions {
  constructor(response) {
    this.response = response.data.Lift;
  }

  shouldHaveLiftCapacity(number) {
    expect(this.response.capacity).to.equal(number);
  }

  shouldHaveStatus(status) {
    expect(this.response.status).to.equal(status);
  }

  shouldHaveName(name) {
    expect(this.response.name).to.equal(name);
  }
}
