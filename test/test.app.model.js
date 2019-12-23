const model = require("../src/js/app.model")();
const expect = require("chai").expect;

describe("model: Testing Game model...", function() {
  context("Using gameElements", function() {
    it("Position 0 should be Scissors", function() {
      expect(model[0].name).to.be.equals("Scissors");
    });

    it("Position 1 should be Paper", function() {
      expect(model[1].name).to.be.equals("Paper");
    });

    it("Position 2 should be Rock", function() {
      expect(model[2].name).to.be.equals("Rock");
    });
  });
});