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

  // Keep asking for input until a valid choice is entered
  while (true) {
    userInput = prompt("Enter your choice: Rock, Paper, or Scissors").trim();

    // Convert the input to lowercase for case-insensitive comparison
    userInput = userInput.toLowerCase();

    // Check if the input is valid
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      break; // Exit the loop if the input is valid
    } else {
      alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
    }
  }

  // Capitalize the first letter of the choice (e.g., "rock" → "Rock")
  return userInput.charAt(0).toUpperCase() + userInput.slice(1);
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Play the game
const humanChoice = getHumanChoice();
const computerChoice = getRandomChoice();

console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(determineWinner(humanChoice, computerChoice));