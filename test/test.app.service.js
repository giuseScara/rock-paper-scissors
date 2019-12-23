const model = require("../src/js/app.model")();
const service = require("../src/js/app.service")();
const expect = require("chai").expect;

describe("generateComputerChoise(): Testing Generate Random Number between 0 and 1...", function() {
  context("model as parameter", function() {
    it("should return a number", function() {
      expect(service.generateComputerChoise(model)).to.be.a("number");
    });

    it("should return a number Greater then 0", function() {
      expect(service.generateComputerChoise(model)).to.be.greaterThan(0);
    });

    it("should return a random number Lower then 4", function() {
      expect(service.generateComputerChoise(model) < 4).to.be.true;
    });
  });
});

describe("checkGameWinner: Testing Game Winner...", function() {
  const scissors = model[0].id,
    paper = model[1].id,
    rock = model[2].id;

  context("Using model and service", function() {
    it("Scissors should beats Paper", function() {
      expect(
        service.checkGameWinner(service.beatsStrategy, scissors, paper)
      ).to.be.true;
    });

    it("Paper should beats Rock", function() {
      expect(
        service.checkGameWinner(service.beatsStrategy, paper, rock)
      ).to.be.true;
    });

    it("Rock should beats Scissors", function() {
      expect(
        service.checkGameWinner(service.beatsStrategy, rock, scissors)
      ).to.be.true;
    });

    it("Paper should not beats Scissors", function() {
      expect(
        service.checkGameWinner(service.beatsStrategy, paper, scissors)
      ).to.be.false;
    });

    it("Rock should beats Paper", function() {
      expect(
        service.checkGameWinner(service.beatsStrategy, rock, paper)
      ).to.be.false;
    });

    it("Scissors should beats Rock", function() {
      expect(
        service.checkGameWinner(service.beatsStrategy, scissors, rock)
      ).to.be.false;
    });
  });
});
