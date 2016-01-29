describe('Pizza', function() {
  it("will allow the user to choose toppings and pizza size for the pizza they would like to order", function() {
    var testPizza = new Pizza ("pepperoni", "medium");
    expect(testPizza.pizzaTopping).to.equal("pepperoni");
    expect(testPizza.pizzaSize).to.equal("medium");
  });

  it("will return the price of a plain pizza with no toppings", function() {
    var testPizza = new Pizza (0);
    expect(testPizza.toppings("no topping")).to.equal(8);
  });

  it("will return the price of a pizza with one topping", function() {
    var testPizza = new Pizza (1);
    expect(testPizza.toppings("one topping")).to.equal(9);
  });

  it("will return the price of a pizza with two toppings", function() {
    var testPizza = new Pizza (2);
    expect(testPizza.toppings("two toppings")).to.equal(10);
  });

  it("will return the price of a pizza with three toppings", function() {
    var testPizza = new Pizza (3);
    expect(testPizza.toppings("three toppings")).to.equal(11);
  });

  it("will return the price of a pizza with four toppings", function() {
    var testPizza = new Pizza (4);
    expect(testPizza.toppings("four toppings")).to.equal(12);
  });

  it("will return the price of a pizza with five toppings", function()    {
    var testPizza = new Pizza (5);
    expect(testPizza.toppings("five toppings")).to.equal(13);
  });
});
