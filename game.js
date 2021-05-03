'use strict'
let storeApp = {
  questions : [],
  currentQuestion: 0,
  goodAnswer: 0,
}

window.onload = ()=> {
  callApi().then(result => {
    storeApp.questions = result
  })
}

function startGame() {
  document.getElementById("startGame").className="hidden"
  document.getElementById("game").classList.remove("hidden")
  refreshQuestion()
}

function nextQuestion() {
  const userAnswer = document.querySelector('input[name=answer]:checked').value;
  if(userAnswer === storeApp.questions[storeApp.currentQuestion].correct_answer) storeApp.goodAnswer +=1
  storeApp.currentQuestion += 1
  refreshQuestion()
  refreshGameInformation()
}

function refreshGameInformation() {
  const totalGoodAnswer = document.getElementById('totalGoodAnswer')
  totalGoodAnswer.innerHTML = storeApp.goodAnswer
}

function refreshQuestion() {
  const { questions, currentQuestion } = storeApp

  const answerList = document.getElementById('answersList')
  // refresh question
  document.getElementById('question').innerHTML = questions[currentQuestion].question

  // remove old answers questions
  answerList.innerHTML =''

  // add new answers
  questions[currentQuestion].answers.map(answer => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer"
    radio.value = answer;
    answerList.appendChild(radio)
    answerList.appendChild(label);
    label.appendChild(document.createTextNode(answer));
  })
}