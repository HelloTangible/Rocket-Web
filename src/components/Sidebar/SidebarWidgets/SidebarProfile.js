import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './SidebarWidgets.css'
import Link from '../../Link'

import AuthService from '../../../utils/AuthService'

class SidebarProfile extends Component {
  static propTypes = {
    auth: PropTypes.instanceOf(AuthService)
  }

  constructor(props) {
    super(props)
    
    const prof = this.props.auth.getProfile()

    this.state = {
      rtlClass: true,
      profile: prof ? prof : {} 
    }
  }
  
  render () {
    return (
      <div className='text-center'>
        <Link to='/dashboard/profile'>
          <img
            src={this.state.profile.picture}
            className={`user-avatar ${s.userAvatar}`}
            alt='user profile'
          />
        </Link>
        <div className={`text-center ${s.avatarName}`}>
          {this.state.profile.name}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(SidebarProfile)
