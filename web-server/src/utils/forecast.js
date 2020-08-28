const request = require('postman-request')
require('dotenv').config()

const forecast= ({ latitude: lat, longitude: long }, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_TOKEN}&query=${lat},${long}`

  request({url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to weather service!')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      const { temperature, feelslike, weather_descriptions } = body.current

      callback(undefined, `${weather_descriptions[0]}: It is currently ${temperature} degress out. It feels like ${feelslike} degress out.`)
    }
  })
}

module.exports = forecast 