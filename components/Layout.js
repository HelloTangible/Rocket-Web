/* global AUTH0_CLIENT_ID, AUTH0_DOMAIN */
import React, { Component, PropTypes } from 'react'
import Router from 'next/router'
import AuthService from '../utils/AuthService'
import Header from './Header'
import LeftNav from './LeftNav'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.array || PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = { loggedIn: false }
  }

  componentDidMount () {
    this.auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
    if (!this.auth.loggedIn()) {
      Router.push('/login')
    }
  }

  render () {
    return (
      <div >
        <Header />
        <LeftNav>
          {this.props.children}
        </LeftNav>
      </div>
    )
  }
}

export default Layout
