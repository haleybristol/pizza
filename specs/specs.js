describe('Pizza', function() {
  it("will allow the user to choose toppings and pizza size for the pizza they would like to order", function() {
    var testPizza = new Pizza (1, "medium");
    expect(testPizza.pizzaTopping).to.equal(9);
    expect(testPizza.pizzaSize).to.equal("medium");
  });

  it("will add $1 to every topping added up to three toppings", function() {
    var testPizza = new Pizza (5, "medium");
    expect(testPizza.pizzaTopping).to.equal(13);
  });

   it ("will return the price of a small pizza", function() {
    var testPizza = new Pizza (0, "small");
    expect(testPizza.getPizzaSize()).to.equal(3);
  });

  it ("will return the price of a medium pizza", function() {
   var testPizza = new Pizza (0, "medium");
   expect(testPizza.getPizzaSize()).to.equal(5);
 });
   it ("will return the price of a large pizza", function() {
    var testPizza = new Pizza (0, "large");
    expect(testPizza.getPizzaSize()).to.equal(8);
  });

  it("will return the price of a single pizza chosen by the user", function () {
    var testPizza = new Pizza ()
  })
});
