let expect = require("chai").expect;
let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
let request = require("request");
chai.should();
chai.use(sinonChai);

let getUsers = require("../ex-9 sinonChaiExample.js");

describe("Example-9 - GetUsers Tests", () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy();
    sinon.stub(request, "get").callsFake((url, callback) => {
      callback({}, { body: '{"users":["user1", "user2"]}' });
    });
  });
  afterEach(() => {
    sinon.restore();
  });
  it("ex9 -1 - Can call getUser", () => {
    //This was an initial function that is no longer applicable
    // getUsers();
  });
  it("ex9 -2 - Verify callback is called once", () => {
    getUsers(spy);
    spy.should.have.been.calledOnce;
  });
  it("ex9 -3 - Verify correct URL is called", () => {
    getUsers(spy);
    request.get.should.have.been.calledWith("https://www.mysite.com/api/users");
  });
  it("ex9 -4 - Verify callback returns correct data", () => {
    getUsers(spy);
    spy.should.have.been.calledWith({ users: ["user1", "user2"] });
  });
});
