const quizData = [
  {
    question:
      'Which HTML5 element should contain important links for navigating a website?',
    a: '<li>',
    b: '<ul>',
    c: '<header>',
    d: '<nav>',
    correct: 'd',
  },
  {
    question:
      'Which HTML5 element should contain important information about what page you are on and the topic of the page?',
    a: '<li>',
    b: '<ul>',
    c: '<header>',
    d: '<nav>',
    correct: 'c',
  },
  {
    question:
      'Which JavaScript variable declaration is used when the assigned value is likely to change?',
    a: 'let',
    b: 'var',
    c: 'variable',
    d: 'const',
    correct: 'a',
  },
  {
    question:
      'Which term in JavaScript can be used to describe a declared variable that has not yet been given a value?',
    a: 'null',
    b: 'undefined',
    c: 'typeError',
    d: 'NaN',
    correct: 'b',
  },
  {
    question:
      "Which selector could refer to an html element with the class of 'sm-col'?",
    a: '#sm-col',
    b: '.sm, .col',
    c: '[class~=col]',
    d: '.sm_col',
    correct: 'c',
  },
  {
    question:
      "Setting an element height to '10vh' bases the height calculation on _________'",
    a: 'viewfinder height',
    b: 'viewport width',
    c: 'visible height',
    d: 'viewport height',
    correct: 'd',
  },
  {
    question: 'Which HTML5 property can be used for custom data?',
    a: 'data-',
    b: '-data-',
    c: 'data=',
    d: 'custom',
    correct: 'a',
  },
  {
    question:
      "Which HTML5 tag is used to define 'independant, self-contained content' within a web page?",
    a: '<section>',
    b: '<main>',
    c: '<aside>',
    d: '<article>',
    correct: 'd',
  },
  {
    question:
      'Which of the following snippets does not result in a return value of 8?',
    a: '8**1',
    b: 'Math.pow(16, .75)',
    c: "2 * 2 * 'two'",
    d: "2**+'3'",
    correct: 'c',
  },
  {
    question:
      'Which of these statements is NOT true of browser-side JavaScript?',
    a: 'JavaScript can be used for functional programming.',
    b:
      'JavaScript can be used for file reading and writing on client machines.',
    c: 'JavaScript does not require frameworks or libraries to be used.',
    d:
      'Though not class-based, JavaScript is an Object-Oriented Programming Language.',
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
