var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res) {
  res.json([
    {
      username: 'ndoak',
      body: 'node rocks'
    }
  ])
})

app.listen(3000, function () {
  console.log('Server is listening on', 3000)
})

app.post('/api/posts', function (req, res) {
  console.log('post received')
  console.log(req.body.username)
  console.log(req.body.body)
  res.sendStatus(201)
})
