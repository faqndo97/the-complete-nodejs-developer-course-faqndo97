const express = require('express')

require('./db/mongoose')

const User = require('./db/models/user')
const Task = require('./db/models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Users

app.get('/users', async (req, res, next) => {
  try {
    const users = await User.find() 

    res.send(users)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.post('/users', async (req, res, next) => {
  const user = new User(req.body)

  try {
    await user.save()

    res.status(201).send(user)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

app.get('/users/:id', async (req, res, next) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id) 

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Tasks

app.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await Task.find()  

    res.send(tasks)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.post('/tasks', async (req, res, next) => {
  const task = new Task(req.body)

  try {
    await task.save

    res.status(201).send(task)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.get('/tasks/:id', async (req, res, next) => {
  const _id = req.params.id

  try {
    const task = await Task.findById(_id) 

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (error) {
    res.status(500).send(error)
  }
})


app.listen(port, () => {
  console.log('Server is up!')
})