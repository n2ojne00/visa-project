let timeLeft = 10;
let timerInterval;
let score = 0;
let highScore = 0;
let correctAnswer = 0;
//Fetch the highScore data from localStorage
let highScoreData = JSON.parse(localStorage.getItem("highScore"));

if (highScoreData !== null) {
  highScore = highScoreData.score;
  highScore = 0;
  document.getElementById("highScore").innerHTML =
    "High Score: " +
    highScoreData.score +
    " (by " +
    highScoreData.playerName +
    ")";
}
//buttons are disabled untill you press start button.
document.getElementById("btn1").disabled = true;
document.getElementById("btn2").disabled = true;
document.getElementById("btn3").disabled = true;
document.getElementById("btn4").disabled = true;

// function for questions
function nextQuestion() {
  let operationDiv = document.getElementById("operation");
  let firstNum = Math.ceil(Math.random() * 12);
  let secondNum = Math.ceil(Math.random() * 12);
  correctAnswer = firstNum * secondNum;
  operationDiv.innerHTML = firstNum + "*" + secondNum;

  let wrongAnswer1 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer2 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer3 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer4 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);

  document.getElementById("btn1").innerHTML = wrongAnswer1;
  document.getElementById("btn2").innerHTML = wrongAnswer2;
  document.getElementById("btn3").innerHTML = wrongAnswer3;
  document.getElementById("btn4").innerHTML = wrongAnswer4;

  let correctAnswerIndex = Math.floor(Math.random() * 4) + 1;
  let correctAnswerID = "btn" + correctAnswerIndex;
  document.getElementById(correctAnswerID).innerHTML = correctAnswer;
}

//function for setting the high score and player name to localStorage
function setHighScore() {
  let highScoreData = JSON.parse(localStorage.getItem("highScore"));
  if (highScoreData === null) {
    highScore = 0;
  } else {
    highScore = highScoreData.score;
  }

  if (score > highScore) {
    highScore = score;
    let person = prompt(
      "You got a high score of " + highScore + "! Please enter your name:",
      "Enter your name"
    );
    highScoreData = {
      score: highScore,
      playerName: person,
    };
    localStorage.setItem("highScore", JSON.stringify(highScoreData));
    document.getElementById("highScore").innerHTML =
      "High Score: " +
      highScoreData.score +
      " (by " +
      highScoreData.playerName +
      ")";
  }
}
//function for counting points
function checkAnswer(buttonIndex) {
  let answer = document.getElementById("btn" + buttonIndex).innerHTML;
  if (correctAnswer == answer) score += 1;
  document.getElementById("currentScore").innerHTML = "Pisteesi: " + score;

  nextQuestion();
}

//When start button is pressed, game starts and buttons are no longer disabled, then it calls nextQuestion() function

function startGame() {
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  document.getElementById("btn4").disabled = false;

  document.getElementById("startbtn").hidden = true;

  nextQuestion();

  //timedisplay shows remaining time, and when time reaches zero it makes button disabled
  //and after that calls setHighSocre function to see, if there is new high score and it stores it to localStorage.
  let timeDisplay = document.getElementById("timeDisplay");
  timeDisplay.hidden = false;
  timerInterval = setInterval(function () {
    timeLeft -= 1;
    timeDisplay.innerHTML = "Aikaa jäljellä: " + timeLeft;
    if (timeLeft == 0) {
      clearInterval(timerInterval);
      document.getElementById("btn1").disabled = true;
      document.getElementById("btn2").disabled = true;
      document.getElementById("btn3").disabled = true;
      document.getElementById("btn4").disabled = true;

      setHighScore();
    }
  }, 1000);
}
