function Pizza(pizzaTopping, pizzaSize) {
  this.setPizzaTopping(parseInt(pizzaTopping));
  this.pizzaSize = pizzaSize;
  //this.setPizzaSize(pizzaSize);
  // this.pizzaTopping = this.toppings(parseInt(pizzaTopping));
  // this.pizzaSize = this.sizes(pizzaSize);
  //console.log(this.pizzaSize);
  //console.log(this.pizzaTopping);
}

Pizza.prototype.setPizzaTopping = function(topping) {
  //console.log(topping);
  switch (topping) {
    case 0:
      this.pizzaTopping = 8;
      break;
    case 1:
      this.pizzaTopping = 9;
      break;
    case 2:
      this.pizzaTopping = 10;
      break;
    case 3:
      this.pizzaTopping = 11;
      break;
    case 4:
      this.pizzaTopping = 12;
      break;
    default:
      this.pizzaTopping = 13;
      break;
  }
}

Pizza.prototype.getPizzaSize = function () {
  //console.log(size)
  switch (this.pizzaSize) {
    case "small":
      return 3;
      break;
    case "medium":
      return 5;
      break;
    case "large":
      return 8;
      break;
  }
}

Pizza.prototype.pizzaPrice = function () {
  return this.pizzaTopping + this.getPizzaSize();
}


$(document).ready(function() {
  $("form#pizzaForm").submit(function(event){
    var size = $("select#size").val();
    var topping = $("select#topping").val();
    console.log(size)
    console.log(topping)
    var testPizza = new Pizza(topping, size);
    var finalPrice = testPizza.pizzaPrice();
    //console.log(testPizza.pizzaSize);
    //console.log(testPizza.pizzaTopping);
    $(".display").html(finalPrice);

    $("#cat").show().append();

    event.preventDefault()
  });
});
