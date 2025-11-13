$(start);

function start() {
    $("#clickMe").on("click", doThis);
    $("#createlist").on("click", createSelectList); // matches HTML
}

function createSelectList() {
    let carMs = ["Volvo", "BMW", "Audi", "Dacia"];

    // Remove existing select to avoid duplicates
    $("#CarIds").remove();

    let myCarsSelect = $("<select>");
    myCarsSelect.attr("name", "Cars");
    myCarsSelect.attr("id", "CarIds");

    for (let i = 0; i < carMs.length; i++) {
        let newOption = $("<option>");
        newOption.attr("value", i);
        newOption.text(carMs[i]);
        myCarsSelect.append(newOption);
    }

    $("body").append(myCarsSelect);
}

function doThis() {
    let newDiv = $("<div>");
    newDiv.html("This is my new div inner text");
    $("body").prepend(newDiv);
}
