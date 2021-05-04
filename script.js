const quizData = [
  {
    question:
      ' In Star Wars, what do they call the invisible power that binds the galaxy together? ',
    a: 'The Fourth',
    b: 'The Force',
    c: 'The Groove',
    d: 'The Palpatine',
    correct: 'b',
  },
  {
    question: 'C-3P0 is fluent in how many languages?',
    a: '280',
    b: 'Over 60 million',
    c: 'zero',
    d: '38',
    correct: 'b',
  },
  {
    question: 'What is the name of Yoda’s home?',
    a: 'Tatouine',
    b: 'Dagobah',
    c: 'Washington, DC',
    d: 'Space, in general',
    correct: 'b',
  },
  {
    question: 'Who built C-3P0?',
    a: 'Tony Stark',
    b: 'Anakin Skywalker',
    c: 'Q',
    d: 'Alfred',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

let score = 0;

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

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score} / ${quizData.length} questions correctly!</h2>

        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
