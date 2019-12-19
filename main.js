//Download Jquery now! https://jquery.com
//Download text-fill plugin https://plugins.jquery.com/textfill/
// https://stackoverflow.com/questions/687998/auto-size-dynamic-text-to-fill-fixed-size-container
const MenuEnums = {
    Home : "homepage.html",
    Registration : "register.html",
    Login : "login.html",
    Testimony : "Testimony.html",
    About : "about.html",
    Contact : "ContactForm.html",
    Cart: "viewCart.html",
    OrderPage: "OrderNow.html",
    Test : "CenterKeyTest.html",
    Flight: "flight.html",
    Hotel: "hotel.html"
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
// https://www.w3schools.com/howto/howto_js_remove_class.asp
let ArrayOfNavigates = document.getElementsByClassName("Navitation")
function ClearAddableBackGroundButton(){
    // ArrayOfNavigates.forEach(element => {
    //     element.classList.remove("AddableBlueButtonBackColoring")
    // });
    for (let Arrayam = 0; Arrayam < ArrayOfNavigates.length; Arrayam++) {
        const element = ArrayOfNavigates[Arrayam];
        element.classList.remove("AddableBlueButtonBackColoring")
    }    
    
}
function AddAddableBackGroundButtonOn(whichNumberIndex){
    ArrayOfNavigates[whichNumberIndex].classList.add("AddableBlueButtonBackColoring")
}
// Home, Catalogue, Login, Register, Cart, Wishlist, History
let HaveLoggedIn = false;
let LoggedInAs;
let LoginData =[
    {
        email: "me@mail.com",
        pass: "12jpg" //irl, Password should be hash-salted! but eh, this is just dummy login system
    }
]

let TestimonyData = [
    {
        name: 'Land',
        Tanggap: 'Wow! Finally there is an easy and trusted way to order flight!'
    },
    {
        name: 'Bauhurst',
        Tanggap: 'It was a hard time whenever me and my family to travel. We have to went into somehow shady group of tiket company that mostly scams. But thanks to Trips seek, I can now be relieved for their legitimaxy of tickets! thanks you trip seek!!'
    },
    {
        name: 'LoremIpsumGuy123',
        Tanggap: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, nihil, ipsam optio rerum, quia nulla perferendis fugit corrupti fuga cum eveniet magnam odio facere labore! Rerum ut quaerat est corporis.'
    }
]
let TestimonyNumbers = TestimonyData.length;
// let TestimonyNumberSelect = 0;
let TestimonyBody = document.getElementById('TestimonyFieldMini');

function CycleUpTetimonyIndex(){
    if(TestimonyIndex > TestimonyNumbers-2){
        TestimonyIndex = 0
    } else {
        TestimonyIndex += 1
    }
}

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
function SearchFlight(){

}
var usernamer;
var passwordr;
function ValidateLogin(){
    usernamer = document.getElementById("Emailo").value
    passwordr = document.getElementById("Passwordo").value
    var addAt = 0;
    var addDot = 0;
    //check whether there is @
    for(let i=0; i<usernamer.length; i++){
        if(usernamer[i] == "@"){
            addAt++;
            break;
        }
    }
    if(addAt==0){
        alert("Invalid Email! '@' missing ")
        return;
    }

    for(let i=0; i<usernamer.length; i++){
        if(usernamer[i] == "."){
            addDot++;
            break;
        }
    }
    if(addAt==0){
        alert("Invalid Email! '.' missing ")
        return;
    }

    if(passwordr.length == 0){
        alert("Password Required!");
        return;
    }

    // var num = 0;
    // var alp = 0;

    // for (let i=0; i<password.length; i++){
    //     if(password[i] >= '0' && password[i] <= '9'){
    //         num++;
    //     }
    //     if((password[i] >= 'a' && password[i] <= 'z') || (password[i]>='A' && password[i]<='Z')){
    //         alp++;
    //     }
    //     if(alp>0&&num>0){
    //         break;
    //     }
    // }
    // if(alp == '0' || num == 0){ //=== checks if data type same. === value and datatype
    //     alert("PASSWORD MUST BE ALPHANUMERIC")
    //     return;
    // }
    var matchEmail = false;
    var matchPass = false;
    for (let index = 0; index < LoginData.length; index++) {
        const element = LoginData[index];
        if (usernamer == element.email) {
            matchEmail = true;
        }
        if(passwordr == element.pass){
            matchPass = true;
        }
        if(matchPass && matchEmail){
            break;
        } else {
            matchEmail = false;
            matchPass = false;
        }
    }

    if(matchEmail && matchPass){
        // alert("OK")
        
        HaveLoggedIn = true;
        LoggedInAs = usernamer;
        //document.getElementById("UseringName").innerHTML = LoggedInAs
        // document.getElementById("nViewProfile").fadeIn()
        $('#nViewProfile').css('display','flex')
        console.log("Logged in: " + LoggedInAs)
    } else {
        alert("Invalid Email / Password")
    }
}
function ValidateRegister(){
    
}

$("#nHome").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Home);
    AddAddableBackGroundButtonOn(0)
})
$("#SubNFlight").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Flight)
    AddAddableBackGroundButtonOn(1)
})
$("#SubNHotel").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Hotel)
    AddAddableBackGroundButtonOn(1)
})
$("#nTestimony").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Testimony);
    AddAddableBackGroundButtonOn(2)
})
$("#nContact").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Contact);
    AddAddableBackGroundButtonOn(3)
})
$("#nAccountButton").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Registration);
    // if(!HaveLoggedIn){
    //     SetPageIframe(MenuEnums.Registration);
    // } else {
    //     SetPageIframe(MenuEnums.Login);
    // }
    AddAddableBackGroundButtonOn(4)
})
$("#nSignInButton").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Login);
    AddAddableBackGroundButtonOn(6)
})

$("#DefTravelFlight").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Flight)
    AddAddableBackGroundButtonOn(1)
})
$("#DefTravelHotel").click(function(){
    ClearAddableBackGroundButton();
    SetPageIframe(MenuEnums.Flight)
    AddAddableBackGroundButtonOn(1)
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