function RockPaperScissorsService() {
  const beatsStrategy = {
    1: [2],
    2: [3],
    3: [1]
  };

  const checkGameWinner = function(strategy, choise1, choise2) {
    return strategy[choise1].includes(choise2);
  };

  const generateComputerChoise = function(model) {
    var computerChoise = null;
    const randomChoise = Math.random();
    for (const index in model) {
      var checkNumberInsideModelRange =
        randomChoise < model[index].generationRange;
      if (!computerChoise && checkNumberInsideModelRange) {
        computerChoise = model[index].id;
      }
    }
    return computerChoise;
  };

  return {
    beatsStrategy: beatsStrategy,
    generateComputerChoise: generateComputerChoise,
    checkGameWinner: checkGameWinner
  };
}

if (typeof module !== "undefined") {
  module.exports = RockPaperScissorsService;
}
