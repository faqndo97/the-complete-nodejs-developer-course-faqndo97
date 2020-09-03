const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/', (req, res, next) => {
  console.log(req.body)
  res.send('It is alive')
})

app.listen(port, () => {
  console.log('Server is up!')
})