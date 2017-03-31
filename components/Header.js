/* global AUTH0_CLIENT_ID, AUTH0_DOMAIN */
import React, { Component } from 'react'
import Link from 'next/link'
import AuthService from '../utils/AuthService'

const linkStyle = {
  marginRight: 15
}

class Header extends Component {
  componentDidMount () {
    this.auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
  }

  logout (e) {
    e.preventDefault()
    
    this.auth.logout()
  }
  
  render () {
    return (
      <div>
        <Link href='/'>
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href='/about'>
          <a style={linkStyle}>About</a>
        </Link>
        <a href='#' onClick={this.logout.bind(this)} style={linkStyle}>Logout</a>
      </div>
    )
  }
}

export default Header
