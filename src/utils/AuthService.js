/* global localStorage, location, __PARSED__ */
import Auth0 from 'auth0-js'
import Axios from 'axios'
import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
const envGlobal = __PARSED__

export default class AuthService extends EventEmitter {
  constructor (clientId, domain) {
    super()
    // Configure Auth0
    this.auth0 = new Auth0.WebAuth({
      domain: domain,
      clientID: clientId,
      redirectUri: `http://${envGlobal.ROOT_URL}/`,
      responseType: 'token'
    })
  }

  login () {
    this.auth0.authorize()
  }

  loggedIn () {
    if (typeof location === 'undefined') return

    if (location.hash) {
      this.auth0.parseHash(location.hash, (err, result) => {
        if (err) return console.log(`Authentication Error: ${err}`)

        this.saveAuth(result)
      })
    } else {
      const token = this.getToken()

      if (!token || isTokenExpired(token)) {
        console.log('Token expired. Renewing...')
        this.auth0.renewAuth({
          redirectUri: `http://${envGlobal.ROOT_URL}/`,
          usePostMessage: true
        }, (err, result) => {
          if (err) return console.log(`Authentication Error: ${err}`)

          console.log(result)

          this.saveAuth(result)
        })
      }
    }
  }

  saveAuth (result) {
    // Saves the user token
    this.setToken(result.idToken)

    // Async loads the user profile data
    this.auth0.client.userInfo(result.accessToken, (err, profile) => {
      if (err) return console.log(`Error loading the Profile: ${err}`)

      console.log(profile)
      this.setProfile(profile)
      this.saveIfNew(profile)
    })
  }

  setProfile (profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile)
  }

  getProfile () {
    if (typeof localStorage === 'undefined') return

    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  saveIfNew (profile) {
    // If this is a new user, save them to our internal DB
    Axios.get(`http://${envGlobal.ROCKET_API_HOST}/api/users/${profile.user_id}`).then((res) => {
      console.log(res)
    }).catch(() => {
      let user = {
        user_id: profile.user_id,
        email: profile.email,
        picture: profile.picture,
        email_verified: profile.email_verified,
        name: profile.name
      }

      Axios.post(`http://${envGlobal.ROCKET_API_HOST}/api/users`, user)
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
  }
}
