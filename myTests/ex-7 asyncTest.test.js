let expect = require("chai").expect;

function myAsyncFunction(callback) {
  console.log("init myAsyncFunction");
  setTimeout(() => {
    callback("blah");
  }, 50);
}

function myPromiseFunction() {
  console.log("init myPromiseFunction");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("blah");
    }, 50);
  });
}
describe("Example-7 asyncTest", () => {
  it("ex7 - asyncTest", function (done) {
    myAsyncFunction(function (str) {
      console.log(str);
      expect(str).to.equal("blah");
      done();
    });
  });
  it("ex7 - promiseTest", () => {
    return myPromiseFunction().then(function (res) {
      console.log("Promise Test");
      expect(res).to.equal("blah");
    });
  });
  it("ex7 - awaitTest", async () => {
    console.log("Await Test");
    let result = await myPromiseFunction();
    expect(result).to.equal("blah");
  });
});
