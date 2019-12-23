function RockPaperScissorsModel() {
  return [
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
};

if (typeof module !== 'undefined') {
  module.exports = RockPaperScissorsModel;
}
