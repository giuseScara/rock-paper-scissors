const service = RockPaperScissorsService();
const model = RockPaperScissorsModel();
var intervalComputer = null;

function RockPaperScissorsController() {

    const hideElement = function(className) {
        document.getElementsByClassName(className)[0].classList.add("hide-element");
    };

    const showElement = function(className) {
        document.getElementsByClassName(className)[0].classList.remove("hide-element");
    };

    const showWinIcon = function() {
        document.getElementById("result-win").classList.add("result-to-show");
    };

    const showLooseIcon = function() {
        document.getElementById("result-loose").classList.add("result-to-show");
    };

    const resetScore =  function() {
        document.getElementById("score1").innerHTML = 0;
        document.getElementById("score2").innerHTML = 0;
        document.getElementById("score1").setAttribute("data-score", 0);
        document.getElementById("score2").setAttribute("data-score", 0);
    };

    const incrementScore = function(id) {
        var score = document.getElementById(id).getAttribute("data-score");
        score++;
        document.getElementById(id).setAttribute("data-score", score);
        document.getElementById(id).innerHTML = score;
    };
    
    const showWinner = function(isPlayWinner) {
        hideElement("game");
        hideElement("score");
        if(isPlayWinner)  {
            incrementScore("score1");
            showWinIcon();
        }
        else  {
            incrementScore("score2");
            showLooseIcon();
        }
        //needed to show againg the choise section after the result animation 
        setTimeout(function(){ 
            document.getElementsByClassName("result-to-show")[0].classList.remove("result-to-show");
            showElement("game");
            showElement("score");
        }, 1100);
    };

    const startGame = function() {
        var gameMode = this.getAttribute("id");
        var label = "";
        hideElement("menu");
        showElement("game");
        showElement("score");
        if (gameMode == "computerMode") {
            label= "Computer A";
            startAsComputer();
        } else {
            label= "Player A";
        }
        document.getElementById("label-score1").innerHTML = label;
    };

    const startAsComputer = function() {
        if (intervalComputer) {
            clearInterval(intervalComputer);
        }
        //create automatic computer behaviour
        intervalComputer = setInterval(function(){
            const choise1 = service.generateComputerChoise(model);
            const choise2 = service.generateComputerChoise(model);
            const isPlayWinner = service.checkGameWinner(service.beatsStrategy,choise1, choise2);
            if(isPlayWinner) incrementScore("score1");
            else  incrementScore("score2");
         }, 1500);
    };

    const restartGame = function() {
        hideElement("game");
        hideElement("score");
        showElement("menu");
        resetScore();
        clearInterval(intervalComputer);
    };
    
    const playGame = function() {
        const playerChoise = this.getAttribute("id");
        const computerChoise = service.generateComputerChoise(model);
        const isPlayWinner = service.checkGameWinner(service.beatsStrategy,playerChoise, computerChoise);
        showWinner(isPlayWinner);
    };

    return {
        onClickPlayGame: playGame,
        onClickStartGame: startGame,
        onClickRestart: restartGame
    }
};

if (typeof module !== 'undefined') {
    //needed for testing
    module.exports = RockPaperScissorsController;
} else {
    //add event listener events
    var classname = document.getElementsByClassName("col-choise");
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', RockPaperScissorsController().onClickPlayGame);
    }
    document.getElementById("restartGame").addEventListener("click", RockPaperScissorsController().onClickRestart);
    document.getElementById("playerMode").addEventListener("click", RockPaperScissorsController().onClickStartGame);
    document.getElementById("computerMode").addEventListener("click", RockPaperScissorsController().onClickStartGame);    
}


