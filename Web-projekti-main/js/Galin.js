//Kysymykset visaan//
const quizData = [
  {
    question: "Mitä näistä käytetään polttonesteenä sprii polttimessa?",
    a: "Bensiiniä",
    b: "Marinol",
    c: "Metsäpuu",
    d: "Öljyä",
    correct: "b",
  },
  {
    question: "Mikä näistä on kansallispuisto?",
    a: "Koffin puisto",
    b: "Repovesi",
    c: "Åstromin puisto",
    d: "Halti tunturi",
    correct: "b",
  },
  {
    question: "Jos puhutaan joka miehen oikeuksista tarkoittaako se, että saa?",
    a: "Onkia ja pilkkiä",
    b: "Poimia omenoita toisen pihalta?",
    c: "Kalastaa virvelillä missä vain",
    d: "tehdä mitä vaan jos on MIES",
    correct: "a",
  },
  {
    question: "Mistä Suomen luonto tunnetaan?",
    a: "Synkästä syksystä",
    b: "Maailman Saastuneelta",
    c: "Maailman parhaimmalta",
    d: "Ei miltään",
    correct: "c",
  },
  {
    question: "Suomi on tuhansien ____ maa?",
    a: "Metsien",
    b: "Kuusien",
    c: "Eläinten",
    d: "Järvien",
    correct: "d",
  },
];

// Kysymykset loppuu tähän!

// määritellään muuttujat
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// ladataan visa eli alkaa näkymällä

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;

  b_text.innerText = currentQuizData.b;

  c_text.innerText = currentQuizData.c;

  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// tarkistaa ja palauttaa vastauksan nähdääkseen kuinka monta meni oikein
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// kun klikataan vastausta yhtä neljästä niin muistaa vastauksen

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  // jos vastataan oikein niin lisätään piste
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
  }
  if (currentQuiz < quizData.length) loadQuiz();
  // kun on vastattu kaikkiin
  else {
    quiz.innerHTML = `
        <h2> Vastasit ${score}/${quizData.length} tehtävää oikein </h2>

        <button onclick="location.reload()">Reload</button
        `;
  }
});
