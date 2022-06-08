import { expect } from "chai";
import { GameOfLife, Pattern } from "../src/example.mjs";
import fs from 'fs';

describe("Creating Board", () => {

  let game = new GameOfLife(16);
  it("must be 16 of lenght", () => {
    expect(game.board.size).to.equal(16);
  });

  it("must have dead cells only", () => {
    expect(game.isBoardClear()).to.be.true;
  });
});

describe("Parsing block rle", () => {

  let game = new GameOfLife(16);

  it("block.rle must exist", () => {
    expect(fs.existsSync('block.rle')).to.be.true;
  });


  it("Pattern string must be 2o$2o!", () => {
    expect(game.getPatternDimension().stringPattern).to.equal('2o$2o!');
  });

  it("Dimensions must be x=2 and y=2", () => {
    expect(game.getPatternDimension().sizeX).to.equal(2);
    expect(game.getPatternDimension().sizeY).to.equal(2);
  });

});

describe("Pattern on the Board", () => {

  let game = new GameOfLife(16);

  it("pattern initial position must be in the middle", () => {
    expect(game.board.display[7][7]).to.equal("o");
    expect(game.board.display[8][8]).to.equal("o");
    expect(game.board.display[7][8]).to.equal("o");
    expect(game.board.display[8][7]).to.equal("o");
  });

});


describe("moving", () => {
  let game = new GameOfLife(16);
  game.movePattern(1);
  console.log(game.board.display.join('\n').toString());
 
  it("Position after 1 times forward", () => {
    expect(game.board.display[7][8]).to.equal("o");
    expect(game.board.display[8][9]).to.equal("o");
    expect(game.board.display[7][9]).to.equal("o");
    expect(game.board.display[8][8]).to.equal("o");
  });


  it("No duplicate of alive cells", () => {
    for(let i=0; i< game.board.size; i++){
      for(let j=0; j< game.board.size; j++){
        if((i != 7 && i != 8) && (j != 8 && j != 9)){
          if(game.board.display[i][j] === 'o'){
            console.log(i+'-'+j);
            throw 'Duplicated';
          }
        }
      }
    }
  });
});

