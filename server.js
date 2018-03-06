const express = require('express')
const app = express()

app.use(express.static('public'))

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url)
  next()
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString())
  next()
}

app.get('/json', urlLogger, timeLogger, (request, response) => {
  response.status(200).json({"name": "James"})
})

app.listen(3000, () => {
  console.log('express intro running on localhost:3000')
})

