'use strict'

window.onload = ()=> {
  callApi().then(result => {
    console.log(result)
  })
}

function startGame() {
  document.getElementById("startGame").className="hidden"
  document.getElementById("game").classList.remove("hidden")
}

function nextQuestion() {
  console.log("next")
}
