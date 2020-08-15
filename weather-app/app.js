const { argv } = require('yargs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (argv.address) {
  geocode(argv.address, (err, data) => {
    if (err) {
      return console.error(err)
    }
  
    forecast(data, (err, forecastData) => {
      if (err) {
        return console.error(err)
      }
  
      console.log(data.location)
      console.log(forecastData)
    })
  })
} else {
  console.error('Address is requeried')
}
