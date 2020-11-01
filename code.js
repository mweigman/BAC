$(document).ready(
    function () {
        //event handlers
        $("button").click(costSplit);

        //functions
            function costSplit() {

                //input how many beers consumed?
                //one beer has 0.54 oz of alcohol
                var beerQuantity = parseFloat($("#beerCosumed").val());

                //input how much wine consumed
                //one glass of wine has 0.60 oz of alcohol
                var wineQuantity = parseFloat($("#wineConsumed").val());

                //input how many shots consumed
                //one shot of liquor has 0.60 oz of alcohol
                var shotsQuantity = parseFloat($("#shotsConsumed").val());

                //input how much do you weigh
                var totalWeight = parseFloat($("#weight").val());

                //how many hours since your first drink
                var totalHours = parseFloat($("#hours").val());

                var calculation = ((beerQuantity * 0.54) + (wineQuantity * 0.60) + (shotsQuantity * 0.60)) * 7.5;
                var bac = (calculation / totalWeight) - (totalHours * 0.015);

                //put results in spans
                $("#result").text(bac.toFixed(3));

                $("p.output").show();

            }
    });