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

function cityGuessingGame (){

    var correctAnswer = 43;

    for(var i = 0; i < 8; i = i + 1){
        var numberGuess = prompt('Please Guess a Number between 1 and 100');
        if(numberGuess == correctAnswer){
            alert('You are a true Boston citzen');
            break;
        } else {
            alert('Sorry, please try again!');
        }
        if (i == '7') {
            alert('Get out of here you Yankee!');
        }
    }
}

function date() {
    var today = new Date();
    document.write(today);
}

bestTown();
date();
cityGuessingGame();