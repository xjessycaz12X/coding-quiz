var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-banner");
var formInitials = document.getElementById("initials-form");
var containerHighScoresEl = document.getElementById("high-score-container");
var ViewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");
//buttons
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back");
var btnClearScoresEl = document.querySelector("#clear-high-scores");
//questions/answers element
var questionEl = document.getElementById("question");
var answerbuttonsEl = document.getElementById("answer-buttons");
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover;
timerEl.innerText = 0;

//High Score Array
var HighScores = [];

//assign array details for questions
var arrayShuffledQuestions;
var QuestionIndex = 0;

// The array of questions for our quiz game.
var questions = [
  {
    q: "Arrays in Javascript can be used to store __________.",
    a: "4. all of the above",
    choices: [
      { choice: "1. numbers" },
      { choice: "2. booleans" },
      { choice: "3. strings" },
      { choice: "4. all of the above" },
    ],
  },
  {
    q: "Inside which HTML element do we put the javascript?",
    a: "3. <script>",
    choices: [
      { choice: "1. <h1>" },
      { choice: "2. <js>" },
      { choice: "3. <script>" },
      { choice: "4. <head>" },
    ],
  },
  {
    q: "In the code -- setinterval(time(),1000) -- what is time()?",
    a: "1. callback function",
    choices: [
      { choice: "1. callback function" },
      { choice: "2. undefined" },
      { choice: "3. variable" },
      { choice: "4. all of the above" },
    ],
  },
  {
    q: "What syntax would call a function?",
    a: "4. function()",
    choices: [
      { choice: "1. var function" },
      { choice: "2. function" },
      { choice: "3. call function" },
      { choice: "4. function()" },
    ],
  },
  {
    q: "When did javascript first appear?",
    a: "1. 1995",
    choices: [
      { choice: "1. 1995" },
      { choice: "2. Roaring twenties" },
      { choice: "3. 2005" },
      { choice: "4. 2000" },
    ],
  },
  {
    q: "What does DOM stand for?",
    a: "2. Document Object Model",
    choices: [
      { choice: "1. Do Overnight Modules" },
      { choice: "2. Document Object Model" },
      { choice: "3. Divas Obviously Model" },
      { choice: "4. Do Oo Mo" },
    ],
  },
  {
    q: "What is getItem commonly used for?",
    a: "2. local storage",
    choices: [
      { choice: "1. adding drama" },
      { choice: "2. local storage" },
      { choice: "3. online shopping" },
      { choice: "4. naming a variable" },
    ],
  },
];
