const choices = ["Rock", "Paper", "Scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomChoice() {
  const randomIndex = getRandomInt(choices.length);
  return choices[randomIndex];
}

// Test the function
console.log(getRandomChoice()); // Expected output: "Rock", "Paper", or "Scissors"