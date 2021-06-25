const max = 3;
const min = 1;
const trials = 5;

let rock = 0;
let paper = 0;
let scissors = 0;

function computerSelection() {
    //Function will randomly return rock, paper, or scissors
    //create a variable that assigns a random number between 1, 2, and 3
    //Use case to output rock, paper, or scissors

    let choice = makeRand();

    switch (choice) {
        case 1:
            //console.log("rock");
            rock++;
            return "rock";
        case 2:
            //console.log("paper");
            paper++;
            return "paper";
        case 3:
            //console.log("scissors");
            scissors++;
            return "scissors";
    }
}

function playerSelection() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    return playerChoice;

}

function makeRand() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function round(playerSelection, computerSelection) {
    //call computer selection to generate the computer's choice
    //call player selection to generate the player's choice
    //Use switch to generate wins and losses

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")
            || ((playerSelection === "paper") && (computerSelection === "rock"))
            || ((playerSelection === "scissors") && (computerSelection === "paper")))
            {
                console.log(`Congratulations! ${playerSelection} beats ${computerSelection}!`);
            }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }

    }

function game() {

    for (i = 0; i < trials; i++) {
        round(playerSelection(), computerSelection());
    }
}

