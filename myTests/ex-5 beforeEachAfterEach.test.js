let expect = require("chai").expect;

describe("Example-5 - beforeEach afterEach", () => {
  beforeEach("setup code", () => {
    console.log("Runs before each test");
  });
  afterEach("teardown code", () => {
    console.log("Runs after each test");
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
