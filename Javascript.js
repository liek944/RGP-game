// the choices for the game
const choices = ["Rock", "Paper", "Scissors"];

// Initialize score variables
let humanScore = 0; // human player's score
let computerScore = 0; // the computer's score

// Function to generate a random integer between 0 and max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Function to get a random choice from the choices array
function getRandomChoice() {
  const randomIndex = getRandomInt(choices.length); // Randomly returns 0, 1, or 2
  return choices[randomIndex]; // Returns "Rock", "Paper", or "Scissors"
}

// Function to get the human player's choice
function getHumanChoice() {
  let userInput;


  while (true) {
    userInput = prompt("Enter your choice: Rock, Paper, or Scissors").trim();


    userInput = userInput.toLowerCase();

  
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      break; 
    } else {
      alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
    }
  }


  return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}

// Function to determine the winner and update scores
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++; 
    return "You win!";
  } else {
    computerScore++; 
    return "You lose!";
  }
}


const humanChoice = getHumanChoice();
const computerChoice = getRandomChoice();

console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(determineWinner(humanChoice, computerChoice));

// Display the scores
console.log(`Your score: ${humanScore}`);
console.log(`Computer's score: ${computerScore}`);