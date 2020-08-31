const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.error(error)
  }

  const db = client.db(database)

  db.collection('users').insertOne({
    name: 'Facundo',
    age: 23
  }, (error, result) => {
    if (error) {
      return console.error(error)
    }

    console.log(result.ops)
  })
})