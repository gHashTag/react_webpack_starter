import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router'
import App from './App'

ReactDOM.render((
  <MemoryRouter>
    <App/>
  </MemoryRouter>
), document.getElementById('app'))
