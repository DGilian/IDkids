'use strict'
let storeApp = {
  questions : [],
  currentQuestion: 0,
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
  storeApp.currentQuestion += 1
  refreshQuestion()
}


function refreshQuestion() {
  const { questions, currentQuestion } = storeApp
  document.getElementById('question').innerHTML = questions[currentQuestion].question
}