const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('MERN 2201')
})

app.listen(8000)