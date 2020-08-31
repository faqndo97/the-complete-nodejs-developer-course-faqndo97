const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

const id = new ObjectId()
console.log(id.toHexString().length)
console.log(id.id.length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.error(error)
  }

  const db = client.db(database)

  // createUser(db)
  // createUsers(db)
  // createTasks(db)
})

function createTasks(db) {
  db.collection('tasks').insertMany([
    {
      description: 'walk dog',
      completed: true
    },
    {
      description: 'wash dishes',
      completed: false 
    }
  ], (error, result) => {
    if (error) {
      return console.error(error)
    }

    console.log(result.ops)
  })
}

function createUser(db) {
  db.collection('users').insertOne({
    _id: id,
    name: 'Facundo',
    age: 23
  }, (error, result) => {
    if (error) {
      return console.error(error)
    }

    console.log(result.ops)
  })
}

function createUsers(db) {
  db.collection('users').insertMany([
    {
      name: 'Matias',
      age: 28
    }, {
      name: 'Raul',
      age: 34
    }
  ], (error, result) => {
    if (error) {
      console.error(error)
    }

    console.log(result.ops)
  })
}