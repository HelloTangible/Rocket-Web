import React from 'react'
import App from '../components/App'

// Child routes
import home from './home'
import login from './login'
import signup from './signUp'
import ErrorPage from './error/ErrorPage'

// dashboard pages
import blank from './dashboard/Blank'
import profile from './dashboard/Profile'

export default [{
  path: '/',
  children: [
    home,
    blank,
    profile
  ],
  async action ({ next, render, context }) {
    const component = await next()
    if (component === undefined) return component
    return render(
      <App context={context} header={true}>{component}</App>
    )
  }
},
{
  path: '/',
  children: [
    signup,
    login
  ],
  async action ({ next, render, context }) {
    const component = await next()
    if (component === undefined) return component
    return render(
      <App context={context} header={false}>{component}</App>
    )
  }
},
{
  path: '/error',
  action ({ render, context, error }) {
    return render(
      <App context={context} error={error}>
        <ErrorPage error={error} />
      </App>,
      error.status || 500
    )
  }
}
]
