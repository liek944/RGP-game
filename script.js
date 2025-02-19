// Define the choices for the game
const choices = ["Rock", "Paper", "Scissors"];

// Initialize score variables
let humanScore = 0;
let computerScore = 0;

// DOM elements
const resultText = document.getElementById("result-text");
const scoresText = document.getElementById("scores");
const winnerText = document.getElementById("winner-text");

// Function to generate a random integer between 0 and max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Function to get a random choice from the choices array
function getRandomChoice() {
  const randomIndex = getRandomInt(choices.length);
  return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice) {
  let computerChoice = getRandomChoice(); 

  // Convert choices to lowercase for case-insensitive comparison
  const humanChoiceLower = humanChoice.toLowerCase(); // Store in new variable
  computerChoice = computerChoice.toLowerCase(); 

  // Determine the winner and update the result text
  if (humanChoiceLower === computerChoice) {
    resultText.textContent = "It's a tie!";
  } else if (
    (humanChoiceLower === "rock" && computerChoice === "scissors") ||
    (humanChoiceLower === "paper" && computerChoice === "rock") ||
    (humanChoiceLower === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; // Increment player's score
    resultText.textContent = `You win! ${humanChoiceLower} beats ${computerChoice}.`;
  } else {
    computerScore++; // Increment computer's score
    resultText.textContent = `You lose! ${computerChoice} beats ${humanChoiceLower}.`;
  }

  // Update the scores display
  scoresText.textContent = `Your score: ${humanScore} | Computer's score: ${computerScore}`;

  // Check if either player has reached 5 points
  if (humanScore === 5) {
    winnerText.textContent = "Congratulations! You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerText.textContent = "Sorry, you lose the game. Better luck next time!";
    disableButtons();
  }
}

// Function to disable buttons after the game ends
function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));