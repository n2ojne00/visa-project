
// Visan elementit
const quizForm = document.querySelector("#quiz-form");
const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question5 = document.querySelector("#question5");
const resultsContainer = document.getElementById("results-container");

// Visan siirtymät ja oikeat vastaukset
quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const answer1 = quizForm.tehtava1.value.toLowerCase();
  const answer2 = quizForm.tehtava2.value.toLowerCase();
  const answer3 = quizForm.tehtava3.value.toLowerCase();
  const answer4 = quizForm.tehtava4.value.toLowerCase();
  const answer5 = quizForm.tehtava5.value.toLowerCase();

  if (
    answer1 === "rooma" ||
    answer1 === "vienna" ||
    answer1 === "ankara" ||
    answer1 === "ateena" ||
    answer1 === "madrid"
  ) {
    question1.style.display = "none";
    question2.style.display = "block";
  }

  if (
    answer2 === "saksa" ||
    answer2 === "italia" ||
    answer2 === "puola" ||
    answer2 === "malta" ||
    answer2 === "norja"
  ) {
    question2.style.display = "none";
    question3.style.display = "block";
  }

  if (
    answer3 === "marianas" ||
    answer3 === "everest" ||
    answer3 === "tongan" ||
    answer3 === "bermuuda" ||
    answer3 === "iso hautavajoama"
  ) {
    question3.style.display = "none";
    question4.style.display = "block";
  }

  if (
    answer4 === "niili" ||
    answer4 === "loire" ||
    answer4 === "seine" ||
    answer4 === "volga" ||
    answer4 === "gauja"
  ) {
    question4.style.display = "none";
    question5.style.display = "block";
  }

  if (
    answer5 === "vatikaanivaltio" ||
    answer5 === "lichenstein" ||
    answer5 === "alankomaat" ||
    answer5 === "iso-britannia" ||
    answer5 === "yhdysvallat"
  ) {
    question5.style.display = "none";
    scorescreen.style.display = "block";
  }

  const selectedAnswers = [answer1, answer2, answer3, answer4, answer5];

  const correctAnswers = [
    "rooma",
    "saksa",
    "marianas",
    "niili",
    "vatikaanivaltio",
  ];

  let numCorrect = 0;
  for (let i = 0; i < selectedAnswers.length; i++) {
    if (selectedAnswers[i] === correctAnswers[i]) {
      numCorrect++;
    }
  }

  resultsContainer.innerHTML = `<p>Oikein vastattuja kysymyksiä: ${numCorrect} / ${correctAnswers.length}</p>`;
});
