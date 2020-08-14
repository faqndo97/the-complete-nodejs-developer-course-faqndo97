const request = require('postman-request')
require('dotenv').config()

const forecast= (lat, long, callback) => {
  const urlWeatherStack = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_TOKEN}&query=${lat},${long}`

  request({url: urlWeatherStack, json: true }, (err, res) => {
    if (err) {
      callback('Unable to connect to weather service!')
    } else if (res.body.error) {
      callback('Unable to find location')
    } else {
      const { temperature, feelslike, weather_descriptions } = res.body.current

      callback(undefined, `${weather_descriptions[0]}: It is currently ${temperature} degress out. It feels like ${feelslike} degress out.`)
    }
  })
}

module.exports = forecast 