const choices = ["rock", "paper", "scissors"];
const playDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const cresultDisplay = document.getElementById("resultDisplay");


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    
    if (playerChoice === computerChoice){
        result = "IT'S A TIE!!";
    }

    else {
        switch(playerChoice){
            case "rock": 
            result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE!";
            break;

            case "paper": 
            result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE!";
            break;        
            
            case "scissors": 
            result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE!";
            break;         
        }
    }


    playDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WIN": resultDisplay.classList.add("greenText");
        break;
        case "YOU LOSE!": resultDisplay.classList.add("redText");
        break;
    }

}