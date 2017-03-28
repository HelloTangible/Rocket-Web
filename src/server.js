import 'babel-polyfill'
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOM from 'react-dom/server'
import UniversalRouter from 'universal-router'
import PrettyError from 'pretty-error'
import Html from './components/Html'
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage'
import errorPageStyle from './routes/error/ErrorPage.css'
import models from './data/models'
import routes from './routes'
import assets from './assets'
import { port } from './config'

import AuthService from './utils/AuthService'
const envGlobal = __PARSED__

const auth0 = new AuthService(envGlobal.AUTH0_CLIENT_ID, envGlobal.AUTH0_DOMAIN)

const app = express()

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    let css = new Set()
    let statusCode = 200
    const data = { title: '', description: '', style: '', script: assets.main.js, children: '' }
    await UniversalRouter.resolve(routes, {
      path: req.path,
      query: req.query,
      context: {
        insertCss: (...styles) => {
          styles.forEach(style => css.add(style._getCss()))
        },
        setTitle: value => (data.title = value),
        setMeta: (key, value) => (data[key] = value),
        getProfile: auth0.getProfile
      },
      render (component, status = 200) {
        css = new Set()
        statusCode = status
        data.children = ReactDOM.renderToString(component)
        data.style = [...css].join('')
        return true
      }
    })

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)

    res.status(statusCode)
    res.send(`<!doctype html>${html}`)
  } catch (err) {
    next(err)
  }
})

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError()
pe.skipNodeFiles()
pe.skipPackage('express')

app.use((err, req, res, next) => {
  console.log(pe.render(err))
  const statusCode = err.status || 500
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title='Internal Server Error'
      description={err.message}
      style={errorPageStyle._getCss()}
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>
  )
  res.status(statusCode)
  res.send(`<!doctype html>${html}`)
})

//
// Launch the server
// -----------------------------------------------------------------------------
models.sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`)
  })
})
