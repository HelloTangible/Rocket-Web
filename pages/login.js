/* global AUTH0_CLIENT_ID, AUTH0_DOMAIN */
import React, { Component } from 'react'
import AuthService from '../utils/AuthService'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = { loggedIn: false }
  }

  componentDidMount () {
    this.auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
    this.setState({ loggedIn: this.auth.loggedIn() })
    // instance of Lock
    this.lock = this.auth.getLock()

    this.lock.on('authenticated', () => {
      this.setState({ loggedIn: this.auth.loggedIn() })
    })
  }

  login () {
    this.auth.login()
  }

  render () {
    return (
      <div className='login-page animate'>
        <style jsx>{`
          .login-page {
            font-family: 'Open Sans', sans-serif;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: auto;
            background: #3ca2e0;
            text-align: center;
            color: #fff;
            padding: 3em;
          }

          h1 {
            font-weight: 300;
            font-size: 36px;
            margin-top: 20px;
            margin-bottom: 10px;
          }

          small {
            color: rgba(255,255,255,0.7);
          }
          
          .btn {
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;
            background: none;
            border-color: transparent;
            font-weight: 400;
            border-radius: 50px;
            text-transform: none;
            font-size: 18px;
            line-height: 45px;
            padding: 0 25px;
            color: #fff;
          }

          .btn:hover, .btn:focus {
            box-shadow: 0 0 0 2px #fff inset;
            color: #fff;
            background: none;
          }
        `}</style>
        <div className='row'>
          <div>
            <img src='../static/images/rocket-white.png' alt='rocket' className='user-avatar' />
            <h1>Rocket, by Tangible </h1>
            <br />
            <button
              type='submit'
              className='btn'
              onClick={this.login.bind(this)}
              data-style='fill' data-horizontal>Log in</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
