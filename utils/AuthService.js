/* global localStorage, Auth0Lock */
import Router from 'next/router'
import Axios from 'axios'
import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'

export default class AuthService {
  constructor (clientId, domain) {
    this.clientId = clientId
    this.domain = domain

    this.lock = new Auth0Lock(clientId, domain, {})
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
  }

  _doAuthentication (authResult) {
    this.setToken(authResult.idToken)

    Router.push('/')
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

  setToken (idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken () {
    return localStorage.getItem('id_token')
  }

  logout () {
    localStorage.removeItem('id_token')
  }
}
