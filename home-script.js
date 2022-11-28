buttonLeft = document.querySelector("#buttonLeft");
buttonRight = document.querySelector("#buttonRight");

// Get via id cycleImg, change src
const contentImg      = ["Item 1",    "Item 2"];
// Get via id cycleLink, change onClick
const contentLink     = ["Item 1",    "Item 2"];

// Get via id cycleX, change .innerHTML
const contentP        = ["Item 1",    "Item 2"];
const contentSub      = ["Item 1",    "Item 2"];
const contentHeading  = ["Item 1",    "Item 2"];

const cycleMaster = {
    cycleImg    :   contentImg,
    cycleLink   :   contentLink,
    cycleP      :   contentP,
    cycleSub    :   contentSub,
    cycleHeading:   contentHeading,
}

let cycleState = 0;

function cycle(ord) {
    // Go through each key of the object by taking an array

    console.log(Object.keys(cycleMaster));

    Object.keys(cycleMaster).forEach((cycleID) => {
        
        console.log(typeof document.getElementById("cycleImg"))
        switch(cycleID) {
            case "cycleImg":
                // Select the element, change it's needed attribute to the next in object array
                document.getElementById("cycleImg").setAttribute("src", cycleMaster[cycleID][cycleState+ord])

        }
        
    });
}


// window.onload = cycle(0)


Object.keys(cycleMaster).forEach((cycleID) => {
        
    console.log(document.getElementById("cycleImg"))
    switch(cycleID) {
        case "cycleImg":
            // Select the element, change it's needed attribute to the next in object array
            document.getElementById("cycleImg").setAttribute("src", cycleMaster[cycleID][cycleState+ord])

    }
    
});