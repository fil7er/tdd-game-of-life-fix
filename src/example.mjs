import fs from 'fs';

export class GameOfLife{

  
  constructor(size) {
      this.board = new Board(size);
      this.createBoard();
      this.pattern = new Pattern(2,2, '2o$2o!');
      this.patternOnBoard();
  }

  isClear = true;
  pattern;
  board;


  //Board

  isBoardClear(){
    return this.isClear;
  }

  createBoard() {
    let board = new Array;
    for(let i = 0; i < this.board.size; i++) board.push(new Array(this.board.size));
    for (let y = 0; y < this.board.size; y++){
      for (let x = 0; x < this.board.size; x++){
        board[y][x] = 'b';
      }
    }
    this.board.display = board;
  }



  //Parsing

  parsePattern(){
    let blockPatternFile = fs.readFileSync('block.rle').toString();

    let data = blockPatternFile.split("\n");
    let dataFilter = data.filter((elem) => elem[0] != "#").toString();
    let dataSplit = dataFilter.split(', ru')[0];
    let dim = {};
    this.pattern.sizeX = parseInt(dataSplit.split("x =")[1].split(",")[0]);
    this.pattern.sizeY = parseInt(dataSplit.split("y =")[1].split(",")[0]);
  }


  //Placing

  patternOnBoard(){
    let initX = Math.floor(this.board.size / 2) -1;
    let initY = Math.floor(this.board.size / 2) -1;
    for (let y = initY; y < this.pattern.sizeY + initY; y++){
      for (let x = initX; x < this.pattern.sizeX + initX; x++){
        this.board.display[y][x] = 'o';
      }
    }
  }

  movePattern(t){
    return 'fail';
  }



  getPatternDimension(){
    return this.pattern;
  }


}


export class Board{
  size;
  display;

  constructor(size){
    this.size = parseInt(size);
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

