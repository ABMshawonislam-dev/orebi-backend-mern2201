const express = require('express')
const app = express()

app.get('/', function (req, res) {

    let data = [
        {
            name:"Shaown",
            phone: "3246545"
        },
        {
            name:"Siam",
            phone: "a3246545"
        },
    ]

  res.send(data)
})

app.listen(8000)