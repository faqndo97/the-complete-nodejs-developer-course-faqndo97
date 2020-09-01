const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

mongoose.connect(`${connectionURL}/${database}`, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

// const newTask = new Task({
//   description: 'I have something to do',
//   completed: false
// })

// newTask.save().then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.error(error)
// })

const me = new User({
  name: 'Facundo',
  age: -1
})

me.save().then((result) => {
  console.log(result)
}).catch((error) => {
  console.error(error)
})