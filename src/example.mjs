export class GameOfLife{

  createBoard(n) {
    let board = new Array;
    for(let i = 0; i < n; i++) board.push(new Array(n));
    for (let y = 0; y < n; y++){
      for (let x = 0; x < n; x++){
        board[y][x] = 'b';
      }
    }
    return board.length;
  }

}

