const express = require('express')
const app = express()
const data = require('./data')

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url)
  next()
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString())
  next()
}

app.use(urlLogger, timeLogger)
app.use(express.static('public'))

app.get('/', (request, response) => {

})

app.get('/json', (request, response) => {
  response.status(200).json(data)
})

app.listen(3000, () => {
  console.log('express intro running on localhost:3000')
})

// add custom 404 page
// create separate json data file, load that file && send that data as response
