describe('Pizza', function() {
  it("will allow the user to choose toppings and pizza size for the pizza they would like to order", function() {
    var testPizza = new Pizza ("pepperoni", "medium");
    expect(testPizza.pizzaTopping).to.equal("pepperoni");
    expect(testPizza.pizzaSize).to.equal("medium");
  });

  it("will add $1 to every topping added up to five toppings", function() {
    var testPizza = new Pizza ("no topping", "medium");
    expect(testPizza.toppings()).to.equal(13);
  });

   it ("will return the price of a small pizza", function() {
    var testPizza = new Pizza ("no topping", "small");
    expect(testPizza.sizes()).to.equal(3);
  });

  it ("will return the price of a small pizza", function() {
   var testPizza = new Pizza ("no topping", "medium");
   expect(testPizza.sizes()).to.equal(5);
 });
   it ("will return the price of a small pizza", function() {
    var testPizza = new Pizza ("no topping", "large");
    expect(testPizza.sizes()).to.equal(8);
  });

  it("will return the price of a single pizza chosen by the user", function () {
    var testPizza = new Pizza ()
  })
});
