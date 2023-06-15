let expect = require("chai").expect;

before("setup code", () => {
  console.log("Root - Runs before all tests");
});
after("teardown code", () => {
  console.log("Root - Runs after all tests");
});
beforeEach("setup code", () => {
  console.log("Root - Runs before each test");
});
afterEach("teardown code", () => {
  console.log("Root - Runs after each test");
});
describe("Example-6 - beforeAfterEachRoot", () => {
  it("Ex6 - Test 1", () => {
    expect(true).to.equal(true);
  });
  it("Ex6 - Test 2", () => {
    expect(true).to.equal(true);
  });
  it("Ex6 - Test 3", () => {
    expect(true).to.equal(true);
  });
});
