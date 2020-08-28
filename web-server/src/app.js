const express = require('express')
const path = require('path')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// express is mainly a function, and we need start it
const app = express()

// With app.set we can overwrite default configurations by express.
// In this case we are telling to express which module use to render
// views.
app.set('view engine', 'hbs')

// Store views in a different folder with a custom name
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

// Tell to hbs where to lookup by the partials
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

// Load static files
const staticFolder = path.join(__dirname, '../public')
app.use(express.static(staticFolder))

// In this way we define routes
app.get('', (req, res, next) => {
  res.render('index', {
    title: 'Weather app',
    authorName: 'Facundo Espinosa'
  })
})

app.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About',
    authorName: 'Facundo espinosa'
  })
})

app.get('/help', (req, res, next) => {
  res.render('help', {
    title: 'Help title',
    authorName: 'Facundo Espinosa'
  })
})

app.get('/weather', (req, res, next) => {
  const { address } = req.query

  if (!address) {
    return res.send({
      error: 'Address must be provided'
    })
  }

  geocode(address, (error, data) => {
    if (error) {
      return res.send({ error })
    }
  
    forecast(data, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }
  
      return res.send({
        forecast: forecastData,
        location: data.location,
        address: address
      })
    })
  })
})

app.get('/help/*', (req, res, next) => {
  res.render('404', {
    title: '404 Title',
    message: 'Help article not found',
    authorName: 'Facundo Espinosa'
  })
})

app.get('*', (req, res, next) => {
  res.render('404', {
    title: '404 Title',
    message: 'Page not found',
    authorName: 'Facundo espinosa'
  })
})

// And to end we need say to express to listen for incoming request
// at the port 3000, and it uses the callback pattern that will
// invoke that function when the server is up and running.
app.listen(3000, () => {
  console.log('Server is up')
})