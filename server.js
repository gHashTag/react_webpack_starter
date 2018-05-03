const express = require('express')
const app = express() // create an instance of express
const PORT = process.env.PORT || 5000 // create the port

app.use(express.static(__dirname + '/build'))

app.get('/', function (req, res) {
  console.log('req', req)
  res.send('Hello World Yogi')
})

app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`ПОЕХАЛИ!!! http://localhost:${PORT}`)
  }
})
