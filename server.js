import express from 'express'
const app = express() // create an instance of express
const PORT = process.env.PORT || 5000 // create the port

app.use(express.static(__dirname + '/build'))

app.get('/*', function (req, res) {
  console.log('req', req)
  console.log('res', res)
  res.send('Hello World')
})

app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`ПОЕХАЛИ!!! http://localhost:${PORT}`)
  }
})
