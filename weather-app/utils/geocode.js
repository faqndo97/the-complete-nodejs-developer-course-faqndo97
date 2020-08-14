const request = require('postman-request')
require('dotenv').config()

const geocode = (address, callback) => {
  // encodedURIComponent is a function to safe us from special characters
  const urlMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=${process.env.MAPBOX_TOKEN}`

  request({url: urlMapBox, json: true}, (err, res) => {
    if (err) {
      // If we don't define an argument is by default undefined
      callback('Unable to connect to mapbox service!')
    } else if (res.body.features.length === 0) {
      callback('Unable to find location')
    } else {
      const [longitude, latitude] = res.body.features[0].center
      const { place_name: location } = res.body.features[0]

      callback(undefined, {
        latitude,
        longitude,
        location
      })
    }
  })
}

module.exports = geocode