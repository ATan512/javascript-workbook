'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  //need to check if row 1, row 2, or row 3 have three of the same values in a row
  //this would be board[0][0], board[0][1], board[0][2]
  //also board[1][0] board[1][1] board[1][2]
  //and board[2][0] board[2][1] board[2][2]

  /*  if ((board[0][0] === board[0][1]) && (board[0][1] === board[0][2])) {
      console.log("Three in a row win - horizontally");
      //just return true since checkForWin() will call these?
    } else if ((board[1][0] === board[1][1]) && (board[1][1]board[1][2])) {
      return true;
    } else if ((board[2][0] === board[2][1]) && board[2][1] === board[2][2]) {
      return true;
    } else {
      return false;
    }
  */

  if (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
    (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
    (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
      return true;
    } else {
      return false;
    }

}

function verticalWin() {
  // need to check if the three columns have the same three values
  //board[0][0] board[1][0 ] board[2][2]
  //board[0][1] board[1][1] board[2][1]
  //board[0][2] board[1][2] board[2][2]
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
    (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
    (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
      return true;
    } else {
      return false;
    }
}

function diagonalWin() {
  // check to see if diagonals from either side have the same three values
  //board[0][0] board[1][1] board[2][2]
  //board[0][2] board[1][1] board[2][0]
  if (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
    (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
      return true;
    } else {
      return false;
    }
}

function checkForWin() {
  if (horizontalWin()) {
    console.log("You win!");
  } else if (verticalWin()) {
    console.log("You win!");
  } else if (diagonalWin()) {
    console.log("You win!");
    else {
      console.log("Tie game");
    }
  }
}

function ticTacToe(row, column) {
  if (checkForWin()) {
    let board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    printBoard();
  } else {
    let playerTurn = 'O';
  }
  //check whatplayer it's on, after they go, switch players, if/else or switch statement
  //if checkForWin, clear board , can set back to blank using template already given
  // callthe printBoard to restart game
  //players same variable but different value for each user
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}