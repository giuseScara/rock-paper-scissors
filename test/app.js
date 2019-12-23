var game = require("../app");
var expect = require("chai").expect;

describe("generateComputerChoise(): Testing Generate Random Number between 0 and 1...", function() {
  var gameElements = game().gameElements;

  context("gameElement as parameter", function() {
    it("should return a number", function() {
      expect(game().generateComputerChoise(gameElements)).to.be.a("number");
    });

    it("should return a number Greater then 0", function() {
      expect(game().generateComputerChoise(gameElements)).to.be.greaterThan(0);
    });

    it("should return a random number Lower then 4", function() {
      expect(game().generateComputerChoise(gameElements) < 4).to.be.true;
    });
  });
});

describe("gameElements: Testing Game element map...", function() {
  var gameElements = game().gameElements;

  context("Using gameElements", function() {
    it("Position 0 should be Scissors", function() {
      expect(gameElements[0].name).to.be.equals("Scissors");
    });

    it("Position 1 should be Paper", function() {
      expect(gameElements[1].name).to.be.equals("Paper");
    });

    it("Position 2 should be Rock", function() {
      expect(gameElements[2].name).to.be.equals("Rock");
    });
  });
});

describe("checkGameWinner: Testing Game Winner...", function() {
  const beatsStrategy = game().beatsStrategy,
    scissors = game().gameElements[0].id,
    paper = game().gameElements[1].id,
    rock = game().gameElements[2].id;

  context("Using gameElements and beastStrategy", function() {
    it("Scissors should beats Paper", function() {
      expect(
        game().checkGameWinner(beatsStrategy, scissors, paper)
      ).to.be.equals(scissors);
    });

    it("Paper should beats Rock", function() {
      expect(game().checkGameWinner(beatsStrategy, paper, rock)).to.equals(
        paper
      );
    });

    it("Rock should beats Scissors", function() {
      expect(
        game().checkGameWinner(beatsStrategy, rock, scissors)
      ).to.be.equals(rock);
    });

    it("Paper should not beats Scissors", function() {
      expect(
        game().checkGameWinner(beatsStrategy, paper, scissors)
      ).to.not.equals(paper);
    });

    it("Rock should beats Paper", function() {
      expect(game().checkGameWinner(beatsStrategy, rock, paper)).to.not.equals(
        rock
      );
    });

    it("Scissors should beats Rock", function() {
      expect(
        game().checkGameWinner(beatsStrategy, scissors, rock)
      ).to.not.equals(scissors);
    });
  });
});
