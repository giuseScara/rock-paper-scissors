const service = RockPaperScissorsService();
const model = RockPaperScissorsModel();

function RockPaperScissorsController() {

    const hideMenu = function() {
        document.getElementsByClassName("menu")[0].style.display = "none";
    };

    const showGameChoise = function() {
        document.getElementsByClassName("game")[0].style.display = "block";
    };

    return {
        onClickPlayGame: function () {
            var id = this.getAttribute("id");
            const play = service.generateComputerChoise(model);
            console.log(play);
        },
        onClickStartAsPlayer: function() {
            hideMenu();
            showGameChoise();
        },
        onClickStartAsComputer: function() {
            hideMenu();
            showGameChoise();
        }

    }
};

if (typeof module !== 'undefined') {
    module.exports = RockPaperScissorsController;
} else {
    var classname = document.getElementsByClassName("col-choise");
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', RockPaperScissorsController().onClickPlayGame);
    }
    document.getElementById("playerMode").addEventListener("click", RockPaperScissorsController().onClickStartAsPlayer);
    document.getElementById("computerMode").addEventListener("click", RockPaperScissorsController().onClickStartAsComputer);    
}


