import quizData from './quizQuestions.js';

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const counterEl = document.getElementById('counter');
const contMessage = document.getElementById('contMessage');

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  submitBtn.disabled = true;
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  counterEl.innerText = `Question ${currentQuiz + 1} of ${quizData.length}`;
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
      contMessage.classList.remove('contMessageShow');
      contMessage.innerHTML = '✔ Correct!';
      contMessage.classList.add('contMessageShow');
    } else {
      contMessage.classList.remove('contMessageShow');
      contMessage.innerHTML = '❌ Incorrect.';
      contMessage.classList.add('contMessageShow');
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score} out of ${quizData.length} questions correctly!</h2>

        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});

// document.getElementById("myBtn").disabled;
