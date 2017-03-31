/* global AUTH0_CLIENT_ID, AUTH0_DOMAIN */
import React, { Component, PropTypes } from 'react'
import Router from 'next/router'
import AuthService from '../utils/AuthService'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

class Layout extends Component {
  static propTypes = {
    children: PropTypes.object
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
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
