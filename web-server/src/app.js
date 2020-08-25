const express = require('express')

// express is mainly a function, and we need start it
const app = express()

// In this way we define routes
app.get('/', (req, res, next) => {
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res, next) => {
  res.send({ hello: 'bye' })
})

app.get('/about', (req, res, next) => {
  res.send('<h1>About page</h1>')
})

app.get('/weather', (req, res, next) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia'
  })
})

// And to end we need say to express to listen for incoming request
// at the port 3000, and it uses the callback pattern that will
// invoke that function when the server is up and running.
app.listen(3000, () => {
  console.log('Server is up')
})