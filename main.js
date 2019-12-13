//Download Jquery now! https://jquery.com

$(document).ready(function() { //Run Immediately
    //alert("welcome");
})

window.onload = function() { //Run after image load complete
    //alert("Welcomed")
}

$("a").click(function(event) { //Click link event
    //event.preventDefault()
    //$(this).hide("slow");
})

$("a").hover(function(event) {
    //alert("Hovered")
    $('.Navitation').CSS('font-weight', 'bold')

})

//https://api.jquery.com/hover/

$("#nTravels").hover(function(event) {
    $("#SubNaviTravels").fadeIn();

}, function(event) {
    $("#SubNaviTravels").fadeOut();
})