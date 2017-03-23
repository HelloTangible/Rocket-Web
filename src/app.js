import React from 'react'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './app.css'

import App from 'components/App/App'

import { browserHistory } from 'react-router'
import makeRoutes from './routes'

const routes = makeRoutes()

const Root = () => {
  return (
    <App history={browserHistory} routes={routes} />
  )
}

render(<Root />, document.querySelector('#root'))
