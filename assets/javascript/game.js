var dogsBreeds = ["labrador", "poodle", "bulldog", "beagle", "german dog"];
var win = 0;
var lose = 0;
var keyWord;
var str;
var attempts;
var letters;


var userLoseH3 = document.getElementById("userLose");
var userWinH3 = document.getElementById("userWin");
var attemptsSpan = document.getElementById("getAttempts");
var getWordSpan = document.getElementById("getWord");
var gamePictures = document.getElementById("gamePicture");
var lettersUsedSpan = document.getElementById("lettersUsed");


function startGame() {
    attempts = 8;
    letters = "";
    keyWord = dogsBreeds[Math.floor(Math.random() * dogsBreeds.length)];
    str = "";
    for (var i = 0; i < keyWord.length; i++) {
        if (keyWord.charAt(i) === " ") {
            str += " ";
        }
        else {
            str += "-";
        }
    }
}
function updateUI() {
    attemptsSpan.innerHTML = attempts;
    getWordSpan.innerHTML = str;
    userLoseH3.innerHTML = lose;
    userWinH3.innerHTML = win;
    lettersUsedSpan.innerHTML = letters;
}
startGame();
updateUI();

document.onkeyup = function (event) {
    var c = event.key.toLowerCase();
    for (var i = 0; i < keyWord.length; i++) {
        if (c === keyWord.charAt(i)) {
            str = str.slice(0, i) + c + str.slice(i + 1, str.length);
        }
    }
    if (keyWord.indexOf(c) === -1 && letters.indexOf(c) === -1) {
        letters += c;
        attempts--;
    }
    if (str === keyWord) {
        win++;
        gamePictures.setAttribute("src", "assets/images/" + keyWord + ".jpg");
        startGame();
    }
    if (attempts === 0) {
        lose++;
        startGame();

    }

    updateUI();
}

