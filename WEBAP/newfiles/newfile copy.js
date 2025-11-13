$(start);
 
function start(){
    $("#Add").on("click", btnClicked);
}

function btnClicked() {
    let number1 =parseInt($("#A").val());
    let number2 =parseInt($("#B").val());
    let final = number1 + number2;   
    $("#Result").html(final);    
}
