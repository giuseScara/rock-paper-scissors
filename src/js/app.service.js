function RockPaperScissorsService() {
  const beatsStrategy = {
    1: [2],
    2: [3],
    3: [1]
  };

  const checkGameWinner = function(strategy, choise1, choise2) {
    return strategy[choise1].includes(choise2) ? choise1 : choise2;
  };

  const generateComputerChoise = function(gameElementsToCheck) {
    var computerChoise = 0;
    const randomChoise = Math.random();
    for (const index in gameElementsToCheck) {
      if (randomChoise < gameElementsToCheck[index].generationRange) {
        computerChoise = gameElementsToCheck[index].id;
      }
    }
    return computerChoise;
  };

  return {
    beatsStrategy: beatsStrategy,
    generateComputerChoise: generateComputerChoise,
    checkGameWinner: checkGameWinner
  };
};

if (typeof module !== 'undefined') {
  module.exports = RockPaperScissorsService;
}
