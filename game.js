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
}

function nextQuestion() {
  console.log("next")
}
