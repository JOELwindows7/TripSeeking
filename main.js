//Download Jquery now! https://jquery.com
const MenuEnums = {
    Home : "homepage.html",
    Registration : "register.html",
    Login : "login.html",
    Testimony : "Testimony.html",
    About : "about.html",
    Contact : "ContactForm.html",
    Cart: "viewCart.html",
    OrderPage: "OrderNow.html",
    Test : "CenterKeyTest.html"
}
var MenuIsOnRightNow = MenuEnums.Home;
var ScreenIsSmall = false;
function UpdateScreenSmallBool(){
    let windowWidth = $(window).width();
    if (windowWidth < 500) {
        ScreenIsSmall = true;
    } else {
        ScreenIsSmall = false;
    }
    setInterval(function(){
        let windowWidth = $(window).width();
        if (windowWidth < 500) {
            ScreenIsSmall = true;
        } else {
            ScreenIsSmall = false;
        }

        if(ScreenIsSmall){
            
        } else {
            TurnOnNavMenu();
        }
    }, 1000)
}
// Home, Catalogue, Login, Register, Cart, Wishlist, History
let HaveLoggedIn = false;

let TestimonyData = [
    {
        name: 'Land',
        Tanggap: 'Wow! Finally there is an easy and trusted way to order flight!'
    },
    {
        name: 'Bauhurst',
        Tanggap: 'It was a hard time whenever me and my family to travel. We have to went into somehow shady group of tiket company that mostly scams. But thanks to Trips seek, I can now be relieved for their legitimaxy of tickets! thanks you trip seek!!'
    }
]
let TestimonyBody = document.getElementById('TestimonyFieldMini');
let TestimonyIndex = 0;
function fillTestimony(){
    document.getElementById('TestimonySaying').innerHTML =  "<p>" + TestimonyData[TestimonyIndex].Tanggap + "</p>"
    document.getElementById('TestimonyUserName').innerHTML = TestimonyData[TestimonyIndex].name

    //document.getElementsByClassName('TestimonyComment').innerHTML = "<p>" + TestimonyData[TestimonyIndex].Tanggap + "</p>"
    //document.getElementsByClassName('TestimonyName').innerHTML = TestimonyData[TestimonyIndex].name
}

function insideFillTestimony(){
    let targetIframe = document.getElementById("EmbeddedPage");
    targetIframe.fillTestimony();
}
function setTestimonyIndex(numberOf){
    TestimonyIndex = numberOf;
    fillTestimony();
}

$(document).on(function(){
    // https://ryanve.com/lab/dimensions/
    
    //console.log("Noise")

    // setInterval(function(){
    //     let windowWidth = $(window).width();
    //     if (windowWidth < 500) {
    //         ScreenIsSmall = true;
    //     } else {
    //         ScreenIsSmall = false;
    //     }
    // }, 5000);
});
// (function(){
//     //https://www.w3schools.com/js/js_function_definition.asp
//     let windowWidth = $(window).width();
//     if (windowWidth < 500) {
//         ScreenIsSmall = true;
//     } else {
//         ScreenIsSmall = false;
//     }
// })();
// https://stackoverflow.com/questions/16447996/run-a-function-constantly
// $(document).setInterval(function(){
//     let windowWidth = $(window).width();
//     if (windowWidth < 500) {
//         ScreenIsSmall = true;
//     } else {
//         ScreenIsSmall = false;
//     }
// }, 5000)

function SetPageIframe(WhichMenu){
    MenuIsOnRightNow = WhichMenu;
    document.getElementById("EmbeddedPage").src = MenuIsOnRightNow;
}

$("#nHome").click(function(){
    SetPageIframe(MenuEnums.Home);
})
$("#nContact").click(function(){
    SetPageIframe(MenuEnums.Contact);
})
$("#nAccountButton").click(function(){
    SetPageIframe(MenuEnums.Registration);
    // if(!HaveLoggedIn){
    //     SetPageIframe(MenuEnums.Registration);
    // } else {
    //     SetPageIframe(MenuEnums.Login);
    // }
})

// $("#nTravels").hover(function(event) {
//     $("#SubNaviTravels").fadeIn();

// }, function(event) {
//     $("#SubNaviTravels").fadeOut();
// })

// https://stackoverflow.com/questions/16447996/run-a-function-constantly

let nTravelToggle = false;
$("#nTravels").click(function(){
    if(nTravelToggle){
        $("#SubNaviTravels").fadeOut();
        nTravelToggle = false;
    } else {
        $("#SubNaviTravels").fadeIn();
        nTravelToggle = true;
    }
})

function SlideThoseImage(){
    var i=1;
    var length = $('.slide').length;
    function slidinger(){ 
        $('.slides').animate({'margin-left':'-=100vh'},300, function(){
            i++;
            if(i==length){
                $('.slides').css('margin-left',0)
                i=1;
            }
            //i %= length
        })
        // -= decrement
        // {} css styler. space sensitive!!!
    }
    setInterval(slidinger,5000) //give () after that slidinger triggers it immediately
}

let ImageNo = 1;
let MaxImageNo = document.getElementsByClassName("slides").length;
function SlideIntervaly(){
    document.getElementById("containering-images").style.transform = `translateX(-${MaxImageNo * 500}px)`
    ImageNo += 1;
    ImageNo %= MaxImageNo;
}

// setInterval(() => {
//     //console.log("2Lapse")
// ;}, 2000);

$(document).ready(function() { //Run Immediately
    //alert("welcome");
    SlideThoseImage();
    //setInterval(SlideIntervaly(), 1000)
    UpdateScreenSmallBool();
})

$("#EmbeddedPage").ready(function(){
    //setInterval(SlideIntervaly(),1000);
    // setInterval(() => {
    //     document.getElementById("containering-images").style.transform = `translateX(-${MaxImageNo * 500}px)`
    //     ImageNo += 1;
    //     ImageNo %= MaxImageNo;
    //     //console.log("lapse");
    // }, 1000);
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
    // $('.Navitation').css('font-weight', 'bold')

})
let InToggled = false;
function ToggleNavMenu(){
    if(InToggled){
        //$("nav").css('display', 'none');
        $("nav").fadeOut();
        InToggled = false;
    } else {
        //$("nav").css('display', 'inline-block');
        $("nav").fadeIn();
        InToggled = true;
    }
    //$("nav").css('display', 'block')
    console.log("Click Menu")
}
function TurnOnNavMenu(){
    $("nav").css('display', 'inline-block');
    //$("nav").fadeIn();
    InToggled = true;
}
$(".MenuButton").click(ToggleNavMenu)

//https://api.jquery.com/hover/