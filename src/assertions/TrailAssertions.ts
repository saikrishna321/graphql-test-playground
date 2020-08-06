const { expect } = require('chai');

export default class TrailAssertions {
  response: any;
  constructor(response: { data: { Trail: any; }; }) {
    this.response = response.data.Trail;
  }

  isTrees(status: boolean) {
    expect(this.response.trees).to.be.equal(status);
  }
}
