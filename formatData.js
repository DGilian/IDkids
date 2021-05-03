"use strict"

function formatData(data) {
  data.map(questionInformation =>{
    // add array of all answer
    questionInformation.answers = []
    questionInformation.incorrect_answers.map( answer=> {
      questionInformation.answers.push(answer)
    })
    questionInformation.answers.push(questionInformation.correct_answer)

    // sort answer in order to not have each time the good answer in same position
    questionInformation.answers.sort()
  })
  return data
}