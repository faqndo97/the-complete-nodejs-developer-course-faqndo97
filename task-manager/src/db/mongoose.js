const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

mongoose.connect(`${connectionURL}/${database}`, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
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
  name: '     Facundo   ',
  email: '     FACU@GMAIL.com',
})

me.save().then((result) => {
  console.log(result)
}).catch((error) => {
  console.error(error)
})