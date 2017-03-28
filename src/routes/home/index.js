/* global __PARSED__ */
import React from 'react'
import AuthService from '../../utils/AuthService'
const envGlobal = __PARSED__

const auth = new AuthService(envGlobal.AUTH0_CLIENT_ID, envGlobal.AUTH0_DOMAIN)

export default {
  path: ['/', '/home'],
  async action () {
    const Home = await new Promise((resolve) => {
      require.ensure([], (require) => {
        resolve(require('./Home').default)
      }, 'home')
    })

    return <Home key={'home'} auth={auth} />
  }
}
