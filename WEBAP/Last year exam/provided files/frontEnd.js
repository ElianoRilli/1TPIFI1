$(start);

function start() {
    $.getJSON("getFruits.php", function (fruits) {
        var select = $("#Fruits");
        select.empty();
        for (var i = 0; i < fruits.length; i++) select.append('<option value="' + fruits[i].fruitId + '">' + fruits[i].fruitName + '</option>');

        select.change(function () {
            var fruitId = $(this).val();
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].fruitId == fruitId) {
                    if (fruits[i].availability == 0) {
                        $("#FruitData").text("Out of stock");
                        $("#FruitOrder").html("");
                    } else {
                        $("#FruitData").text(fruits[i].availability + " in stock");
                        $("#FruitOrder").html("<input type='number' placeholder='quantity'> <button id='btnOrder'>Order</button>");

                    
                        $("#btnOrder").click(function () {
                            var quantity = $("#FruitOrder input").val();
                            if (quantity < 0) {
                                alert("Please enter a valid order");
                            }
                        });
                    }
                    break;
                }
            }
        });
    });
}

