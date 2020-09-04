const express = require('express')
const router = new express.Router()

const User = require('../db/models/user')

router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find()

    res.send(users)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/users', async (req, res, next) => {
  const user = new User(req.body)

  try {
    await user.save()

    res.status(201).send(user)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

router.get('/users/:id', async (req, res, next) => {
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

router.patch('/users/:id', async (req, res, next) => {
  const _id = req.params.id

  try {
    const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

    if (!user) {
      res.status(404).send()
    }

    res.send(user)
  } catch (error) {
    res.send(400).send(error)
  }
})

router.delete('/users/:id', async (req, res, next) => {
  const _id = req.params.id

  try {
    const user = await User.findByIdAndDelete(_id)

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router