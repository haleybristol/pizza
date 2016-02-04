describe('Pizza', function() {
  it("will allow a user to choose a pizza size", function() {
    var testPizza = new Pizza ("small");
    expect(testPizza.pizzaSize).to.equal("small");
  });

});
