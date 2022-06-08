import fs from 'fs';

export class GameOfLife{

  
  constructor(size) {
      this.size = size;
      this.pattern = new Pattern(2,2, '2o$2o!');
  }

  isClear = true;
  size;
  pattern;

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
    let dataFilter = data.filter((elem) => elem[0] != "#");
    console.log(dataFilter);
    return data[4];
  }

  getPatternDimension(){
    return this.pattern;
  }


}

export class Pattern {
  sizeX;
  sizeY;
  stringPattern;

  constructor(x,y,string){
    this.sizeX = x;
    this.sizeY = y;
    this.stringPattern = string;
  }

}

