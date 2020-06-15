//FUNCTION DEFINITIONS
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playSingleRound(userChoice, computerChoice) {
    //Converting both to uppercase for input to be case insensitive
    userChoice = userChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    gameOver.textContent = ``;

    //When user input is Rock
    if(userChoice === "ROCK" && computerChoice ==="ROCK") {
        result.textContent = `Tie!`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
    }

    if(userChoice === "ROCK" && computerChoice ==="PAPER") {
        computerScore++;
        result.textContent = `You Lose, Paper beats Rock`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
        results();
    }

    if(userChoice === "ROCK" && computerChoice ==="SCISSORS") {
        userScore++;
        result.textContent = `You Win, Rock beats Scissors`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
        results();
    }
      
    //when user input is paper
    if(userChoice === "PAPER" && computerChoice ==="ROCK") {
        userScore++;
        result.textContent = `You Win, Paper beats Rock`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
        results();
    }

    if(userChoice === "PAPER" && computerChoice ==="PAPER") {
        result.textContent = `Tie!`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
    }

    if(userChoice === "PAPER" && computerChoice ==="SCISSORS") {
        computerScore++;
        result.textContent = `You Lose, Scissors beats Paper`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
        results();
    }

    //When user input is scissors
    if(userChoice === "SCISSORS" && computerChoice ==="ROCK") {
        computerScore++;
        result.textContent = `You Lose, Rock beats Scissors`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
        results();
    }

    if(userChoice === "SCISSORS" && computerChoice ==="PAPER") {
        userScore++;
        result.textContent = `You Win, Scissors beats Paper`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
        results();
    }

    if(userChoice === "SCISSORS" && computerChoice ==="SCISSORS") {
        result.textContent = `Tie!`;
        score.textContent = `User:${userScore}, Computer:${computerScore}`;
    }
}

function results() {
    if(userScore === 5) {
        gameOver.textContent = `You win overall! To play again, click any of the buttons above`;
        reGame();
    }
    else if(computerScore === 5) {
        gameOver.textContent = `Computer wins overall! To play again, click any of the buttons above`;
        reGame();
    }
}

function reGame() {
    userScore = 0;
    computerScore = 0;
}

//MAIN CODE
let userScore = 0;
let computerScore = 0;

const interface = document.querySelector('#interface');
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const gameOver = document.querySelector("#gameOver");

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

btn1.addEventListener('click', () => {
    playSingleRound(rock, computerPlay());
});

btn2.addEventListener('click', () => {
    playSingleRound(paper, computerPlay());
});

btn3.addEventListener('click', () => {
    playSingleRound(scissors, computerPlay());
});
