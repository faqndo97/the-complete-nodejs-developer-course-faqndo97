const express = require('express')
const path = require('path')

// express is mainly a function, and we need start it
const app = express()

// With app.set we can overwrite default configurations by express.
// In this case we are telling to express which module use to render
// views.
app.set('view engine', 'hbs')

// Load static files
const staticFolder = path.join(__dirname, '../public')
app.use(express.static(staticFolder))

// In this way we define routes
app.get('', (req, res, next) => {
  res.render('index', {
    title: 'Weather app',
    name: 'Facundo Espinosa'
  })
})

app.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About'
  })
})

app.get('/help', (req, res, next) => {
  res.render('help', {
    title: 'Help title'
  })
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