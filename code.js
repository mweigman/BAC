function costSplit(){

    //input how many plain cheese pizza's?
    var pizzaQuantity = prompt("How many plain cheese pizza's ordered?");

    //convert from text to number
    pizzaQuantity = parseFloat(pizzaQuantity);

    //input how many extra toppings
    var toppingsQuantity = prompt("How many extra toppings added?");

    //convert from text to number
    toppingsQuantity = parseFloat(toppingsQuantity);

    //how many people splitting the cost
    var totalPeople = prompt("How many people are splitting the cost?");

    totalPeople = parseFloat(totalPeople);

    var calculation = ((pizzaQuantity * 15) + (toppingsQuantity * 1.25)) / totalPeople;

    alert ( ` Your total per person is: $${calculation.toFixed(2)}` );
}