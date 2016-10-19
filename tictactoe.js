///////////////BROKEN

var prompt = require('prompt-sync')();

var playGame = function() {

var checkBoardX = function() {
  if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

};

var checkBoardO = function() {
  if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

  if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
    hasWon = true;
    console.log('You Won!');
    return 'You Won';
  }

};






  var board =
[ ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

  var addX = function(x, y) {
    board[x][y] = 'X';
  };

  var addO = function(x, y) {
    board[x][y] = 'O';
  };

  var count = -1;
  var hasWon = false;

  while (!hasWon) {
    count++;
    checkBoardO();
    checkBoardX();

    if (count % 2 === 0) {
      var xCoord = prompt('Player1 Go!, Enter your X coord');
      var yCoord = prompt('Player1 Go!, Enter your Y coord');
      console.log(xCoord);
      console.log(yCoord);

      addX(xCoord, yCoord);
      console.log(board);
    }

    if (count % 2 !== 0) {
      var xCoord = prompt('Player2 Go!, Enter your X coord');
      var yCoord = prompt('Player2 Go!, Enter your Y coord');

      addO(xCoord, yCoord);
      console.log(board);
    }
  }


};

playGame();

// console.log(board);