
console.log("Hello World");

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "Rock";
    } else if (randomNumber < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function getHumanChoice() {
    return prompt("Escolhe: Rock, Paper ou Scissors: ");
}

let humanChoice = getHumanChoice();
alert("You chose:", humanChoice);

let computerChoice = getComputerChoice();
alert("Computer chose:", computerChoice);


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("YOU WIN THIS ROUND!! :)");
        humanScore++;
    } else {
        alert("YOU LOSE THIS ROUND:(");
        computerScore++;
    }

    alert("Score: Human " + humanScore + " - Computer " + computerScore);
}

playRound(humanChoice, computerChoice);

function playGame() {
    for (let i = 1; i <= 5; i++) {
        alert(" Round " + i);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    alert(" Game Over!");
    if (humanScore > computerScore) {
        alert("Congrats! You're the winner! ");
    } else if (computerScore > humanScore) {
        alert("Computer wins the game! ");
    } else {
        alert("It's a tie! ");
    }
}

playGame();