const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('hello world')
})

app.listen(3000, () => {
  console.log('express intro running on localhost:3000')
})