module.exports = function RockPaperScissorsGame() {
  const gameElements = [
    {
      id: 1,
      name: "Scissors",
      generationRange: 0.33
    },
    {
      id: 2,
      name: "Paper",
      generationRange: 0.66
    },
    {
      id: 3,
      name: "Rock",
      generationRange: 1.0
    }
  ];

  const beatsStrategy = {
    1: [2],
    2: [3],
    3: [1]
  };
  
  return {
    gameElements: gameElements,
    beatsStrategy: beatsStrategy,
    generateComputerChoise: generateComputerChoise,
    checkGameWinner: checkGameWinner
  };
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
