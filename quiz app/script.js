const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const quizQuestions = [
  {
    question: "What is the main function of the CPU in a computer?",
    answers: shuffleArray([
      { text: "To perform calculations and execute instructions.", isCorrect: true },
      { text: "To store data permanently.", isCorrect: false },
      { text: "To manage network connections.", isCorrect: false },
      { text: "To display graphics on the monitor.", isCorrect: false }
    ])
  },
  {
    question: "What does RAM stand for?",
    answers: shuffleArray([
      { text: "Random Access Memory", isCorrect: true },
      { text: "Read Access Memory", isCorrect: false },
      { text: "Rapid Access Memory", isCorrect: false },
      { text: "Run Access Memory", isCorrect: false }
    ])
  },
  {
    question: "Which of the following is an input device?",
    answers: shuffleArray([
      { text: "Keyboard", isCorrect: true },
      { text: "Monitor", isCorrect: false },
      { text: "Printer", isCorrect: false },
      { text: "Speaker", isCorrect: false }
    ])
  },
  {
    question: "What is the purpose of an operating system?",
    answers: shuffleArray([
      { text: "To manage hardware and software resources.", isCorrect: true },
      { text: "To create graphics for games.", isCorrect: false },
      { text: "To provide an internet connection.", isCorrect: false },
      { text: "To encrypt data on the hard drive.", isCorrect: false }
    ])
  },
  {
    question: "Which of these is an example of an optical storage device?",
    answers: shuffleArray([
      { text: "CD-ROM", isCorrect: true },
      { text: "Hard Disk Drive", isCorrect: false },
      { text: "Solid State Drive", isCorrect: false },
      { text: "RAM", isCorrect: false }
    ])
  },
  {
    question: "What does a firewall do?",
    answers: shuffleArray([
      { text: "Protects a network from unauthorized access.", isCorrect: true },
      { text: "Scans files for viruses.", isCorrect: false },
      { text: "Increases internet speed.", isCorrect: false },
      { text: "Backs up data to the cloud.", isCorrect: false }
    ])
  },
  {
    question: "What is the purpose of a graphics card?",
    answers: shuffleArray([
      { text: "To render images and videos.", isCorrect: true },
      { text: "To manage network traffic.", isCorrect: false },
      { text: "To store system files.", isCorrect: false },
      { text: "To handle system updates.", isCorrect: false }
    ])
  },
  {
    question: "What does URL stand for?",
    answers: shuffleArray([
      { text: "Uniform Resource Locator", isCorrect: true },
      { text: "Universal Resource Locator", isCorrect: false },
      { text: "Uniform Reference Link", isCorrect: false },
      { text: "Universal Resource Link", isCorrect: false }
    ])
  },
  {
    question: "Which component is considered the 'brain' of the computer?",
    answers: shuffleArray([
      { text: "CPU", isCorrect: true },
      { text: "RAM", isCorrect: false },
      { text: "Motherboard", isCorrect: false },
      { text: "Hard Drive", isCorrect: false }
    ])
  },
  {
    question: "What is the primary function of the motherboard?",
    answers: shuffleArray([
      { text: "To connect all the computer components together.", isCorrect: true },
      { text: "To store data and programs.", isCorrect: false },
      { text: "To provide a user interface.", isCorrect: false },
      { text: "To manage network connections.", isCorrect: false }
    ])
  }
];



const questionElement = document.getElementById('question');
const answersElement = document.getElementById('buttons');
const nextButton = document.getElementById('nextBtn');

let questionIndex = 0;
let score = 0;

const startQuiz = () => {
  questionIndex = 0;
  score = 0;
  nextButton.textContent = 'Next';
  showQuestions();
  answersElement.dataset.boxNo = 1;
};

const showQuestions = () => {
  resetQuiz();

  const currentQuestion = quizQuestions[questionIndex];
  const qNo = questionIndex + 1;

  questionElement.innerHTML = `${qNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.dataset.correct = answer.isCorrect; // Set data-correct on button
    button.addEventListener('click', selectAnswer);
    answersElement.appendChild(button);
  });
};

const resetQuiz = () => {
  nextButton.style.display = 'none';
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
};

const selectAnswer = (event) => {
  const button = event.target;
  const isCorrect = button.dataset.correct === 'true';

  if (isCorrect) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('incorrect');
  }

  Array.from(answersElement.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'block';
};

const showScore = () => {
  resetQuiz();
  questionElement.innerHTML = `You scored ${score} out of ${quizQuestions.length}`;
  nextButton.textContent = 'Play Again';
  nextButton.style.display = 'block';
  
};

const handleNextButton = () => {
  questionIndex++;
  if (questionIndex < quizQuestions.length) {
    showQuestions();
    nextButton.innerText = 'Next'
  } else {
    showScore();
  }
};

nextButton.addEventListener('click', () => {
  if (questionIndex < quizQuestions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

