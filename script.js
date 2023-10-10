$( document ).ready(function() {
    console.log("test"); 
    $("th").css({"font-size": "20px", "font-style": "italic"});
    $("td:nth-child(odd)").css("backgroundColor","lightblue");
    

    checkCost();
    // nth-child cannot equal zero, var = i has to be more than 0
    function checkCost(){
        for(var i = 1; i <= $("tr").length; i++){
            var item = $("tr:nth-child(" + i +") td:nth-child(2)");
            console.log("this is item", item);
            var cost = parseFloat(item.text());

            if(cost > 10){
                item.css("background-color", "tomato");
            }
        }
    }

});