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


app.listen(port, () => {
  console.log('Server is up!')
})