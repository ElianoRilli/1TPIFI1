$(document).ready(function () {
    function loadFruits(selectedId) {
        $.getJSON("getFruits.php", function (fruits) {

            var select = $("#Fruits");
            select.empty();

            for (var i = 0; i < fruits.length; i++) {
                select.append('<option value="' + fruits[i].fruitId + '">' + fruits[i].fruitName + '</option>');
            }

            if (selectedId) {
                select.val(selectedId);
            } else {
                selectedId = select.val();
            }

            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].fruitId == selectedId) {
                    showFruit(fruits[i]);
                    break;
                }
            }
        });
    }

    function showFruit(fruit) {
        if (fruit.availability == 0) {
            $("#FruitData").text("Out of stock");
            $("#FruitOrder").html("");
        } else {
            $("#FruitData").text(fruit.availability + " in stock");
            $("#FruitOrder").html('<input type="number" placeholder="quantity"> <button id="btnOrder">Order</button>');
        }
    }

    $("#Fruits").change(function () {
        var fruitId = $(this).val();
        $.getJSON("getFruits.php", function (fruits) {
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].fruitId == fruitId) {
                    showFruit(fruits[i]);
                    break;
                }
            }
        });
    });

    $(document).on("click", "#btnOrder", function () {
        var quantity = $("#FruitOrder input").val();
        var fruitId = $("#Fruits").val();

        $.post("getFruits.php", { fruitId: fruitId, quantity: quantity }, function (result) {
            $("#OrderResult").text(result);
            loadFruits(fruitId); 
        });
    });

    loadFruits();
});
