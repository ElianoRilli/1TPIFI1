$(start);

let Options = ["Carrots", "Potatoes", "Rice", "Milk"];

function start() {

    let inputbox = $("<input>");
    inputbox.attr("placeholder", "Recipe Name");
    $("body").append(inputbox);

    let btncreate = $("<button>create</button><br><br>");
    $("body").append(btncreate);

    let list = $("<select>");
    for (i = 0; i < Options.length; i++) {

        let newoption = $("<option>");
        newoption.attr("value", i);
        newoption.html(Options[i]);
        list.append(newoption);
    }
    $("body").append(list);

    let quantity =$("<input>");
    quantity.attr("placeholder", "Quantity");
    $("body").append(quantity);

    let btnadd = $("<button>Add</button>");
    $("body").append(btnadd);

    btncreate.on("click", function(){
        
    })
}