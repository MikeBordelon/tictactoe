var playGame = function() {

var checkBoardX = function() {
  if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
    hasWon = true;
    return 'You Won';
  }

};

var checkBoardO = function() {
  if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
    hasWon = true;
    return 'You Won';
  }

  if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
    hasWon = true;
    return 'You Won';
  }

  if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
    hasWon = true;
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

  var count = 0;
  var hasWon = false;

  while (!hasWon) {
    checkBoardO();
    checkBoardX();

    if (count % 2 === 0) {
      addX(prompt('Player1 Go!, Enter your XY coords like: 0, 0'));
      count++;

    }

    if (count % 2 !== 0) {
      addO(prompt('Player1 Go!, Enter your XY coords like: 0, 0'));
      count++;

    }
  }


};

playGame();

console.log(board);