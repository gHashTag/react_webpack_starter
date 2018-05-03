import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import App from '../src/index.js'

const app = express() // create an instance of express
const PORT = process.env.PORT || 5000 // create the port

app.use(express.static(__dirname + '/build'))

app.get('/*', function (req, res) {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
              <!doctype html>
              <div id="app">${html}</div>
              `)
              res.end()
  }
})

app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`ПОЕХАЛИ!!! http://localhost:${PORT}`)
  }
})
