const Checkout = require("../ex-8 superMarket.js");
let expect = require("chai").expect;

describe("Example-8 - sooperMarketTest", () => {
  it("ex8 - 1- Can instantiate checkout", () => {
    //This test is deprecated but not dead.
    let checkout = new Checkout();
  });
  let checkout;
  beforeEach("instantiate checkout", () => {
    console.log("newCheckout");
    checkout = new Checkout();
    checkout.addItemPrice("apple", 3);
    checkout.addItemPrice("pear", 5);
  });
  it("ex8 - 2- Can add an item price", () => {
    // var checkout = new Checkout();
    checkout.addItemPrice("a", 1);
  });
  it("ex8 - 3- Can add an item", () => {
    // var checkout = new Checkout();
    checkout.addItemPrice("a", 1);
    checkout.addItem("a");
  });
  it("ex8 - 4- Can calculate the current total", () => {
    checkout.addItem("apple");
    checkout.addItem("pear");
    checkout.calculateTotal();
  });
  it("ex8 - 5- Can add multiple items and get correct total", () => {
    checkout.addItem("apple");
    checkout.addItem("pear");
    expect(checkout.calculateTotal()).to.equal(8);
  });
  it("ex8 - 6- Can add discount rules to the total", () => {
    checkout.addDiscount("a", 3, 2);
  });
  it("ex8 - 7- Can apply discount rules to the total", () => {
    checkout.addDiscount("apple", 3, 2);
    checkout.addItem("apple");
    checkout.addItem("apple");
    checkout.addItem("apple");
    console.log(checkout.items);
    expect(checkout.calculateTotal()).to.equal(2);
  });
  it("ex8 - 8- Throw Exception for item added without price", () => {
    expect(function () {
      checkout.addItem("orange");
    }).to.throw();
  });
});
