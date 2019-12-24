function RockPaperScissorsModel() {
  return [
    {
      id: 1,
      name: "Scissors",
      generationRange: 0.20
    },
    {
      id: 2,
      name: "Paper",
      generationRange: 0.40
    },
    {
      id: 3,
      name: "Rock",
      generationRange: 0.60
    },
    {
      id: 4,
      name: "Lizard",
      generationRange: 0.80
    },
    {
      id: 5,
      name: "Spock",
      generationRange: 1.0
    }
  ];
};

if (typeof module !== 'undefined') {
  module.exports = RockPaperScissorsModel;
}
