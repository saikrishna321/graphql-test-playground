const { expect } = require('chai');

export default class TrailAssertions {
  constructor(response) {
    this.response = response.data.Trail;
  }

  isTrees(status) {
    expect(this.response.trees).to.be.equal(status);
  }

  async validate(schema) {
    await schema.validateAsync(this.response);
  }
}
