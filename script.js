// import external quiz data
import quizData from './quizQuestions.js';

// bring in elements
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('input[type=radio]');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const counterEl = document.getElementById('counter');
const quizResult = document.getElementById('result');
const nextBtn = document.getElementById('next');
const contMessage = document.getElementById('contMessage');

// declare start point of quizData array
let currentQuiz = 0;

// declare starting score as zero
let score = 0;

loadQuiz();

// declare fxn to load quiz data
function loadQuiz() {
  deselectAnswers();
  // disable submit button
  submitBtn.disabled = true;

  // reset message text & next button visiblity
  quizResult.style.display = 'none';
  contMessage.textContent = '';
  nextBtn.disabled = true;

  // declare var for parsing through quiz data
  const currentQuizData = quizData[currentQuiz];
  // change elements innerText to show what is in quiz data
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  // display place message
  counterEl.innerText = `Question ${currentQuiz + 1} of ${quizData.length}`;
}

// declare fxn to deselect all answer options
function deselectAnswers() {
  // loop through array of answers and deselect each
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// declare fxn to fetch which answer was selected
function getSelected() {
  // declare initial answer var
  let answer;

  // parse through answers
  answerEls.forEach((answerEl) => {
    // take selected answer and set answer var to id of selection
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  // return new answer var
  return answer;
}

// enable submit button after selection of answer
answerEls.forEach((item) => {
  item.addEventListener('click', (event) => {
    submitBtn.disabled = false;
  });
});

// add event listener to submit button
submitBtn.addEventListener('click', () => {
  // set answer as return from getSelected
  const answer = getSelected();

  // in the below if statement, answer is a Boolean, when no answer is selected value is false
  if (answer) {
    // checks if answer is strictly equal to current quiz correct answer,
    if (answer === quizData[currentQuiz].correct) {
      quizResult.style.display = 'block';
      contMessage.textContent = '✔ Correct!';
      //Since the result div is set to display none initially, styling has to be loaded from javascript
      contMessage.style.textAlign = 'center';
      nextBtn.disabled = false;
      // if yes, increase score by 1, show correct
      score++;
    } else {
      quizResult.style.display = 'block';
      contMessage.textContent = '❌ Incorrect';
      //Since the result div is set to display none initially, styling has to be loaded from javascript
      contMessage.style.textAlign = 'center';
      nextBtn.disabled = false;
    }
  }
});

//Display the next question / quiz result on click of next
nextBtn.addEventListener('click', () => {
  if (!nextBtn.disabled) {
    // regardless of above block, value of currentQuiz increases by 1
    currentQuiz++;

    // test for end of quiz array
    if (currentQuiz < quizData.length) {
      // if it is less than number of quiz questions, load
      loadQuiz();
    } else {
      // show end score and show button to reload quiz
      quiz.innerHTML = `
        <h2>You answered ${score} out of ${quizData.length} questions correctly!</h2>

        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
