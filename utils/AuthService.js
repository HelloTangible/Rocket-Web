/* global localStorage, Auth0Lock, ROCKET_API_HOST */
import Router from 'next/router'
import Axios from 'axios'
import { isTokenExpired } from './jwtHelper'

export default class AuthService {
  constructor (clientId, domain) {
    this.clientId = clientId
    this.domain = domain

    this.lock = new Auth0Lock(clientId, domain, {})
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
    this.loggedIn = this.loggedIn.bind(this)
  }

  _doAuthentication (authResult) {
    this.setToken(authResult.idToken)

    this.lock.getProfile(authResult.idToken, (err, profile) => {
      if (err) return console.log(`Error loading the Profile: ${err}`)

      this.setProfile(profile)
      this.saveIfNew(profile)

      Router.push('/')
    })
  }

  getLock () {
    return new Auth0Lock(this.clientId, this.domain, {})
  }

  login () {
    this.lock.show()
  }

  loggedIn () {
    const token = this.getToken()

    return (!!token && !isTokenExpired(token))
  }

  setProfile (profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getProfile () {
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  saveIfNew (profile) {
    // If this is a new user, save them to our internal DB
    Axios.get(`http://${ROCKET_API_HOST}/api/users/${profile.user_id}`).then((res) => {
      console.log(res)
    }).catch(() => {
      let user = {
        user_id: profile.user_id,
        email: profile.email,
        picture: profile.picture,
        email_verified: profile.email_verified,
        name: profile.name
      }

      Axios.post(`http://${ROCKET_API_HOST}/api/users`, user)
    })
  }

  setToken (idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken () {
    return localStorage.getItem('id_token')
  }

  logout () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    Router.push('/login')
  }
}
