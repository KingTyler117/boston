// prompt('Hi');

function bestTown() {
    var bestTown = prompt("what is the best town in America?");
    if (bestTown == "boston") 
    {
        alert("You are correct."); 
    } 
    else 
    {
        alert("Wrong");
    }
}

function date() {
    var today = new Date();
    document.write(today);
}

bestTown();
date();