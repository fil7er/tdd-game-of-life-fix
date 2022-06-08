import fs from 'fs';

export class GameOfLife{

  
  constructor(size) {
      this.size = size;
  }

  isClear = true;
  size;

  isBoardClear(){
    return this.isClear;
  }

  createBoard() {
    let board = new Array;
    for(let i = 0; i < this.size; i++) board.push(new Array(this.size));
    for (let y = 0; y < this.size; y++){
      for (let x = 0; x < this.size; x++){
        board[y][x] = 'b';
      }
    }
    return board.length;
  }

  //Parsing

  parsePattern(){
    let blockPatternFile = fs.readFileSync('block.rle').toString();

    let data = blockPatternFile.split("\n");
    console.log(data);
    return data[4];
  }


}

