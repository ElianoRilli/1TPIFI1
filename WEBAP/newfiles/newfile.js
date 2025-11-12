$(start);
function start() {

    $("#Test").html("Please replace the abc text")
    $("button").on("click", btnClicked);
}

function btnClicked(){

    let insideBox = $("input").val();
    alert(insideBox);
    $("input").val("abc");
}