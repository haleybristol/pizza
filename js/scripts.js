function Pizza(pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}
  var toppingnumber = 0
Pizza.prototype.toppings = function() {

  if (this.pizzaTopping === 0) {
    toppingnumber = (8);
  } else if (this.pizzaTopping === 1) {
    toppingnumber = (9);
  } else if (this.pizzaTopping === 2) {
    toppingnumber = (10);
  } else if (this.pizzaTopping === 3) {
    toppingnumber = (11);
  } else if (this.PizzaTopping === 4) {
    toppingnumber = (12);
  } else {
    toppingnumber = (13);
  }
  return toppingnumber;
}
  var num = 0;
Pizza.prototype.sizes = function() {
  console.log(this.pizzaSize);
  if (this.pizzaSize === "small") {
    var num = 3;
  } else if (this.pizzaSize === "medium") {
    var num = 5;
  } else if (this.pizzaSize === "large") {
    var num = 8;
  };

  return num;
};

Pizza.prototype.pizzaPrice = function (toppings, sizes) {
  return toppings + sizes
}


$(document).ready(function() {
  $("form#pizzaForm").submit(function(event){
    var size = $("select#size").val();
    var topping = $("select#topping").val();
    var testPizza = new Pizza(size, topping);
    var finalPrice = testPizza.pizzaPrice(topping, size);
    $(".display").prepend(finalPrice);

    $("#cat").show().append();

    event.preventDefault()
  });
});
