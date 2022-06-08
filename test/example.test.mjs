import { expect } from "chai";
import { GameOfLife, Pattern } from "../src/example.mjs";
import fs from 'fs';

describe("Creating Board", () => {

  let game = new GameOfLife(16);

  it("must be 16 of lenght", () => {
    expect(game.createBoard()).to.equal(16);
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

