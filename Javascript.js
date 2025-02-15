// Define the choices for the game
const choices = ["Rock", "Paper", "Scissors"];

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

  // Keeps asking for input until a valid choice is entered
  while (true) {
    userInput = prompt("Enter your choice: Rock, Paper, or Scissors").trim();


    userInput = userInput.toLowerCase();

    // Check if the input is valid
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      break; 
    } else {
      alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
    }
  }


  return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}

// Function to play 5 rounds and declare the overall winner
function playGame() {
  // Initialize score variables
  let humanScore = 0; // Tracks the human player's score
  let computerScore = 0; // Tracks the computer's score

  // Function to play a single round
  function playRound(humanChoice, computerChoice) {
  
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Determines the winner and log the result
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++; // Increment human score if the player wins
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++; // Increment computer score if the computer wins
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);

    const humanChoice = getHumanChoice();
    const computerChoice = getRandomChoice();

    playRound(humanChoice, computerChoice);

    // Display the scores after each round
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }

  // Declare the overall winner
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you lose the game. Better luck next time!");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();