$(document).ready(
    function () {
        //event handlers
        $("button").click(costSplit);

        //functions
            function costSplit() {

                //input how many plain cheese pizza's?
                var pizzaQuantity = parseFloat($("#plainPizza").val());

                //input how many extra toppings
                var toppingsQuantity = parseFloat($("#toppings").val());

                //how many people splitting the cost
                var totalPeople = parseFloat($("#people").val());

                var calculation = ((pizzaQuantity * 15) + (toppingsQuantity * 1.25)) / totalPeople;

                //put results in spans
                $("#result").text(calculation.toFixed(2));

                $("p.output").show();

            }
    });