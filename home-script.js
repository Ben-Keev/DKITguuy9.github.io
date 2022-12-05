buttonLeft = document.querySelector("#buttonLeft");
buttonRight = document.querySelector("#buttonRight");

// Get via id cycleImg, change src
const contentImg      = ["/assets/black-crt-tv-square-ratio.jpg",    "Item 2"];
// Get via id cycleLink, change onClick
const contentLink     = ["articles/censorship.html",    
                        "login.html"];

// Get via id cycleX, change .innerHTML
const contentP        = ["Ever wonder where PEGI and the ESRB come from? Or why you have to be 18 years old to play Grand Theft Auto?",    
                        "We finally got with the times and introduced accounts. Save your favourite articles or come back to read them again."];

const contentSub      = ["Origins of Age Ratings",
                        "Sign up now!"];

const contentHeading  = ["Featured Article",    
                        "Account System"];

const cycleMaster = {
    cycleImg    :   contentImg,
    cycleLink   :   contentLink,
    cycleP      :   contentP,
    cycleSub    :   contentSub,
    cycleHeading:   contentHeading,
};

//Scope must be greater than block scope, use var
var cycleState = 0;

function cycle(ord) {
    
    //The cycle state changes by either 1 or -1
    cycleState += ord

    //Ensures cycleState has a valid index
    if (cycleState < 0) {
        //If the index goes into negative, set it back to the last index
        cycleState = contentImg.length - 1
    } else if (cycleState >= contentImg.length) {
        //If the index goes beyond the max, set it back to the start
        cycleState = 0;
    }

    // Iterate through each key in the Object
    // Returns an array of strings matching the keys, denoted as 'cycleID'
    Object.keys(cycleMaster).forEach((cycleID) => {

        // Different attributes need to be swapped depending on the type of tag.
        switch(cycleID) {
            case "cycleImg":
                // Select the element, change it's needed attribute to the next in object array
                document.getElementById(cycleID).setAttribute("src", cycleMaster[cycleID][cycleState]);
                break;

            case "cycleLink":
                // Need to send the command as a string
                document.getElementById(cycleID).setAttribute("onClick", "location.href='"+cycleMaster[cycleID][cycleState]+"'");
                break;

            // The text falls into this category.
            default:
                // Select the element, change it's needed attribute to the next in object array
                document.getElementById(cycleID).innerHTML = cycleMaster[cycleID][cycleState];
                break;
        }  
    });
}