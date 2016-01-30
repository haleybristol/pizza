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
    toppingnumber = (1);
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
    $(".display").append(finalPrice);

    // $("#cat").show();

    event.preventDefault()
  });
});


// function Ticket(movieName, movieTime, movieAge){
//   this.movieName = movieName;
//   this.movieTime = movieTime;
//   this.movieAge = movieAge;
// }
//
// Ticket.prototype.price = function(){
//   if (this.movieAge >= 60) {
//     return (8);
//   } else if (this.movieAge <= 59 && this.movieAge > 12){
//   return (10);
//   } else {
//     return (7);
//   }
// }
//
// Ticket.prototype.matinee = function(){
//   if (this.movieTime <= "4:00pm") {
//     return (1);
//   } else {
//     return (2);
//   }
// }
//
// Ticket.prototype.newRelease = function(){
//   if (this.movieName === "The Forest" || this.movieName === "Pride and Prejudice and Zombies") {
//     return (2);
//   } else {
//     return (1);
//   }
// }
//
// Ticket.prototype.finalPrice = function(){
//   var result = this.price() + this.matinee() + this.newRelease();
//   return result;
// }
//


//     if(movie === "forest") {
//       $("#forest").show();
//     }
