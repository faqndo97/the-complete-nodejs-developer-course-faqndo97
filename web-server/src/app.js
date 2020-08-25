const express = require('express')
const path = require('path')

// express is mainly a function, and we need start it
const app = express()


// Load static files
const staticFolder = path.join(__dirname, '../public')
app.use(express.static(staticFolder))

// In this way we define routes
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