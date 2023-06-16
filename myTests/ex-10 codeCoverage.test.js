const printNumber = require("../ex-10 codeCoverage.js");

describe("Example-10 - Check code coverage", () => {
  it("ex10 - tests printing 1", () => {
    printNumber(1);
  });
  it("ex10 - tests printing not one", () => {
    printNumber(2);
  });
});
