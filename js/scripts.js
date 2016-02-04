function Pizza(pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.price = function () {
  var base = 5;

  if(this.pizzaSize === "small") {
    base = base + (this.pizzaTopping.length * 2);
  } else if (this.pizzaSize === "medium") {
    base += 5 + (this.pizzaTopping.length * 2);
  } else if (this.pizzaSize === "large") {
    base += 7 + (this.pizzaTopping.length * 2);
  };
  console.log(base);
  return base;
};

// Pizza.prototype.getPizzaSize = function () {
//   //console.log(size)
//   switch (this.pizzaSize) {
//     case "small":
//       return 3;
//       break;
//     case "medium":
//       return 5;
//       break;
//     case "large":
//       return 8;
//       break;
//   }
// }


$(document).ready(function() {
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("select#size").val();
    var pizzaTopping = []
    $("input:checked").each(function(){
      pizzaTopping.push($(this).val());
    });
    var testPizza = new Pizza(pizzaTopping, pizzaSize);
    var finalPrice = testPizza.price();


    $(".display").html("$" + finalPrice + ".00");

    $("#cat").show().append();


  });
});
