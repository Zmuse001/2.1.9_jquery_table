$( document ).ready(function() {
    console.log("test"); 
    $("th").css({"font-size": "20px", "font-style": "italic"});
    $("td:nth-child(odd)").css("backgroundColor","lightblue");
    $("td:nth-child(even)").css("backgroundColor","tomato");

});