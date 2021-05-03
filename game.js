'use strict'
let storeApp = {
  questions : [],
  currentQuestion: 0,
  goodAnswer: 0,
  timer: 20,
  timerInterval: ()=>{}
}

window.onload = ()=> {
  callApi().then(result => {
    storeApp.questions = result
  })
}

function startGame() {
  document.getElementById("startGame").className="hidden"
  document.getElementById("game").classList.remove("hidden")
  document.getElementById("timer").innerHTML = storeApp.timer
  refreshQuestion()
  storeApp.timerInterval = setInterval(setTimer, 1000);
}

function nextQuestion() {
  if(storeApp.currentQuestion === 4) return endGame()
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
  questions[currentQuestion].answers.map((answer, index) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer"
    radio.value = answer;
    index === 0 && (radio.checked = "check")
    answerList.appendChild(radio)
    answerList.appendChild(label);
    label.appendChild(document.createTextNode(answer));
  })
}

function endGame() {
  clearInterval(storeApp.timerInterval)

  // reset block
  const questionContainer = document.getElementById("questionContainer")
  questionContainer.innerHTML =''

  // add end message
  const endMessage = document.createElement("p");
  questionContainer.appendChild(endMessage)
  endMessage.appendChild(document.createTextNode(`Congratulation you have ${storeApp.goodAnswer} good answer`))

  // add restart button
  const restartButton = document.createElement('button');
  restartButton.innerHTML = 'restart game'
  restartButton.onclick = () => window.location.reload()
  restartButton.classList.add("resetButton")
  questionContainer.appendChild(restartButton)
}


function setTimer() {
  if(storeApp.timer === 0)   return endGame();
  storeApp.timer -= 1
  document.getElementById("timer").innerHTML = storeApp.timer
}
