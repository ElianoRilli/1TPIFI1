$(start);

function start() {
    $("#create").on("click", createList);
}

function createList() {
    let fruits = ["Apple", "Banana", "Grape", "Orange"];

    let fruitSelect = $("<select>");
    
    for (var i = 0; i < fruits.length; i++) {

        var option = $("<option>");
        option.text(fruits[i]);
        fruitSelect.append(option);
    }

    $("body").append(fruitSelect);
}
