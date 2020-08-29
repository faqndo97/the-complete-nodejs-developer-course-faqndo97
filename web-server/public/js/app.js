const weatherForm = document.querySelector('form')
const address = document.querySelector('input')
const messagesOne = document.querySelector('#message-one')
const messagesTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()

  messagesOne.textContent = 'Loading...'
  messagesTwo.textContent = ''

  fetch(`/weather?address=${address.value}`)
    .then(data => data.json())
    .then(data => {
      if (data.error) {
        messagesOne.textContent = data.error
      } else {
        messagesOne.textContent = data.location
        messagesTwo.textContent = data.forecast
      }
    })
    .catch(error => console.error(error))
})