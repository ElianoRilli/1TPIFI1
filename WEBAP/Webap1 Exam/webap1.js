$(start);

function start() {

    $("body").html("<input type='number' id='rows' placeholder='Rows'>");
    $("body").append("<input type='number' id='cols' placeholder='Cols'> <br>");
    $("body").append("<input type='number' id='X' placeholder='Target-X'>");
    $("body").append("<input type='number' id='Y' placeholder='Target-Y'> <br>");

    $("body").append("<button id='create'>Create grid</button>");
    $("#create").on("click", creategrid);
}

function creategrid() {

    let rows = Number($("#rows").val());
    let cols = Number($("#cols").val());
    let X = Number($("#X").val());
    let Y = Number($("#Y").val());

    $("body").html("");

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            let newcell = $("<span class='cell'>click </span>");
            $("body").append(newcell);

            newcell.click(
                function () {

                if (r  == X - 1 && c  == Y -1) {
                    alert("yes");
                } else {
                    alert("nope");
                }
                }
            );

        }
        $("body").append("<br>");
    }

    $("body").append("<br><button id='restart'>Restart</button>");
    $("#restart").on("click", start);
}


/*$(".cell").on("click", function () {
    alert("nope");

    if () {
        alert("yes");
    }
});*/