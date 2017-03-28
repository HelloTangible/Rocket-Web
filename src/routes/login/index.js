/* global __PARSED__ */
import React from 'react'
import AuthService from '../../utils/AuthService'
const envGlobal = __PARSED__

const auth = new AuthService(envGlobal.AUTH0_CLIENT_ID, envGlobal.AUTH0_DOMAIN)

export default {
  path: '/login',
  async action () {
    const Login = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./Login.jsx').default), 'login')
    })
    return <Login key={'login'} auth={auth} />
  }
}
