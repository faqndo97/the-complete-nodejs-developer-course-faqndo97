const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.error(error)
  }

  const db = client.db(database)

  // Finding practice 

  // db.collection('users').findOne({ _id: new ObjectID('5f4c5f880a2e2f9f73ad8179') }, commonCallback)
  // db.collection('users').find({ name: 'Facundo' }).toArray(commonCallback)
  // db.collection('users').find({ name: 'Facundo' }).count(commonCallback)
  // db.collection('tasks').findOne({ _id: new ObjectID('5f4c601b7456d89fbdc8dc43')}, commonCallback)
  // db.collection('tasks').find({ completed: true }).toArray(commonCallback)

  // Updating
  // db.collection('users').updateOne({
  //   _id: new ObjectID('5f4c5f880a2e2f9f73ad8179')
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.error(error)
  // })
  
  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => console.log(result)).catch((error) => error)

  // Delete
  // db.collection('users').deleteMany()
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error(error))

  db.collection('tasks').deleteOne({ _id: new ObjectID('5f4c601b7456d89fbdc8dc42') })
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
})

function commonCallback(error, result) {
  if (error) {
    return console.error(error)
  }

  console.log(result)
}

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