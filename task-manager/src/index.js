const express = require('express')

require('./db/mongoose')

const User = require('./db/models/user')
const Task = require('./db/models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Users

app.get('/users', (req, res, next) => {
  User.find().then((response) => {
    res.status(201).send(response)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

app.post('/users', (req, res, next) => {
  const user = new User(req.body)

  user.save().then((response) => {
    res.status(201).send(response)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

app.get('/users/:id', (req, res, next) => {
  const _id = req.params.id

  User.findById(_id).then((user) => {
    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  }).catch((error) => {
    res.status(500).send(error)
  })
})

// Tasks

app.get('/tasks', (req, res, next) => {
  Task.find().then((response) => {
    res.status(201).send(response)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

app.post('/tasks', (req, res, next) => {
  const task = new Task(req.body)

  task.save().then((response) => {
    res.status(201).send(response)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

app.get('/tasks/:id', (req, res, next) => {
  const _id = req.params.id

  Task.findById(_id).then((task) => {
    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  }).catch((error) => {
    res.status(500).send(error)
  })
})


app.listen(port, () => {
  console.log('Server is up!')
})