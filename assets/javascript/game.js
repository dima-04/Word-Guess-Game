var dogsBreeds = ["labrador", "poodle", "bulldog", "beagle", "german dog"];
var win = 0;
var lose = 0;
var keyWord = dogsBreeds[Math.floor(Math.random() * dogsBreeds.length)];
var str = "";
var Attempts = 8;
var c = "d";
for (var i = 0; i < keyWord.length; i++) {
    str = str + "-";
}
for (var c = 0; c < keyWord.length; c++) {
    if (c === keyWord.charAt(c)) {
   str[i]=c;
    }
}
console.log(str);
console.log(keyWord);
var userLoseH3 = document.getElementById("userLose");
userLoseH3.innerHTML = lose;
var userWinH3 = document.getElementById("userWin");
userWinH3.innerHTML = win;
var attemptsSpan = document.getElementById("getAttempts");
attemptsSpan.innerHTML = Attempts;

