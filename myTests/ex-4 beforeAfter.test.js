let expect = require("chai").expect;

describe("Example-4 - beforeAfter", () => {
  before("setup code", () => {
    console.log("Runs before all tests");
  });
  after("teardown code", () => {
    console.log("Runs after all tests");
  });
  it("Test2 - Test 1", () => {
    expect(true).to.equal(true);
  });
  describe("Nested Suite Example", () => {
    it("Test2 - nested Test 2", () => {
      expect(true).to.equal(true);
    });

    it("Test2 - nested Test 3", () => {
      expect(true).to.equal(true);
    });
  });
});
