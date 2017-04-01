/* global AUTH0_CLIENT_ID, AUTH0_DOMAIN */
import React, { Component } from 'react'
import Router from 'next/router'
import { Toolbar, Space, NavItem, Avatar, Arrow, Dropdown, DropdownMenu, Button } from 'rebass'
import RocketIcon from 'react-icons/lib/fa/rocket'
import AuthService from '../utils/AuthService'


class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: null,
      profilePic: null,
      dropdownOpen: false
    }
    this.logout = this.logout.bind(this)
    this.profile = this.profile.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  componentDidMount () {
    this.auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN)

    let profile = this.auth.getProfile()

    this.setState({
      username: profile.name,
      profilePic: profile.picture
    })
  }

  logout () {
    this.auth.logout()
  }

  profile () {
    Router.push('/profile')
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  render () {
    return (
      <Toolbar style={{ height: '4.5em', background: '#3ca2e0', boxShadow: '#999 2px 2px 4px' }}>
        <style jsx global>{`
          .header-icon {
            font-size: 3.5em;
            padding-right: 10px;
          }
        `}</style>
        <NavItem href='/'>
          <RocketIcon className='header-icon' />
          <h1>Rocket, by Tangible</h1>
        </NavItem>
        <Space auto x={1} />
        <Avatar
          circle
          size={42}
          src={this.state.profilePic}
        />
        <Dropdown>
          <Button style={{ fontSize: '1em', background: '#3ca2e0' }} onClick={this.toggle('dropdownOpen')}>
            <div className='profilename'>{this.state.username}<Arrow direction='down' /></div>
          </Button>
          <DropdownMenu open={this.state.dropdownOpen} onDismiss={this.toggle('dropdownOpen')}>
            <NavItem onClick={this.profile} children='Profile' />
            <NavItem onClick={this.logout} children='Logout' />
          </DropdownMenu>
        </Dropdown>
      </Toolbar>
    )
  }
}

export default Header
