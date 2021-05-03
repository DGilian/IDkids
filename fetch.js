"use strict"

function callApi() {
  const apiUrl = 'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple'

  return fetch(apiUrl)
  .then(response => {
    return response.text()
  })
  .then(text => {
    return JSON.parse(text)
  })
}