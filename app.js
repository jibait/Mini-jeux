const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibilities = document.querySelectorAll("button")

let userChoice
let computerChoice
possibilities.forEach(possibility => possibility.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    result();
}))

function generateComputerChoice(){ //a faire en switch pour la performance
    const randomNumber = Math.floor(Math.random() * possibilities.length);
    
    if(randomNumber === 0){
        computerChoice = "pierre";
    }
    else if(randomNumber === 1){
        computerChoice = "feuille";
    }
    else{
        computerChoice = "ciseaux";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


function result(){
    if(userChoice === computerChoice){
        resultDisplay.innerHTML = "égalité";
    }

    if(userChoice === "pierre" && computerChoice === "feuille"){
        resultDisplay.innerHTML = "tu as perdu !";
    }

    if(userChoice === "pierre" && computerChoice === "ciseaux"){
        resultDisplay.innerHTML = "tu as gagné !";
    }

    if(userChoice === "ciseaux" && computerChoice === "feuille"){
        resultDisplay.innerHTML = "tu as gagné !";
    }

    if(userChoice === "ciseaux" && computerChoice === "pierre"){
        resultDisplay.innerHTML = "tu as perdu !";
    }

    if(userChoice === "feuille" && computerChoice === "ciseaux"){
        resultDisplay.innerHTML = "tu as perdu !";
    }

    if(userChoice === "feuille" && computerChoice === "pierre"){
        resultDisplay.innerHTML = "tu as gagné !";
    }
}