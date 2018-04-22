'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//this function will run as a rock, paper, scissors game
function rockPaperScissors(hand1, hand2) {
  const player1 = hand1.toLowerCase().trim(); //take user's input, remove spaces, and make input lowercase
  const player2 = hand2.toLowerCase().trim(); //take user's input, remove spaces, and make input lowercase
  // the following if/else if statement is to check the moves
  if ((player1 === player2)) {
    console.log("It's a tie!");
  } else if ((player1 === "rock") && (player2 === "paper")) {
    console.log("Hand two wins!");
  } else if ((player1 === "rock") && (player2 === "scissors")) {
    console.log("Hand one wins!");
  } else if ((player1 === "paper") && (player2 === "rock")) {
    console.log("Hand one wins!");
  } else if ((player1 === "paper") && (player2 === "scissors")) {
    console.log("Hand two wins!");
  } else if ((player1 === "scissors") && (player2 === "rock")) {
    console.log("Hand two wins!");
  } else if ((player1 === "scissors") && (player2 === "paper")) {
    console.log("Hand one wins!");
  } else {
    console.log("invalid entry");
  }
}


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}