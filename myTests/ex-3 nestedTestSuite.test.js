let expect = require("chai").expect;

describe("Example-3 - Nested Test Suites", () => {
  it("Ex3 - unNested Test 1", () => {
    expect(true).to.equal(true);
  });
  describe("Nested Suite Example", () => {
    it("Ex3 - nested Test 1", () => {
      expect(true).to.equal(true);
    });

    it("Ex3 - nested Test 2", () => {
      expect(true).to.equal(true);
    });
  });
});
