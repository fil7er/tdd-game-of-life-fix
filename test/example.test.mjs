import { expect } from "chai";
import { GameOfLife } from "../src/example.mjs";

describe("Creating Board", () => {

  let game = new GameOfLife(16);

  it("must be 16 of lenght", () => {
    expect(game.createBoard()).to.equal(16);
  });

  it("must have dead cells only", () => {
    expect(game.isBoardClear()).to.equal(true);
  });
});
