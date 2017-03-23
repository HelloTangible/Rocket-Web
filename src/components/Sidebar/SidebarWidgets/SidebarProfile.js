import React, { Component, PropTypes } from 'react'
import s from './SidebarWidgets.css'
import Link from '../../Link'

class SidebarNewsFeed extends Component {
  static propTypes = {
    profile: PropTypes.object
  }
  
  render () {
    return (
      <div className="text-center">
        <Link to="/dashboard/profile">
          <img
            src={this.props.profile.picture}
            className={`user-avatar ${s.userAvatar}`}
            alt="user profile"
          />
        </Link>
        <div className={`text-center ${s.avatarName}`}>
          {this.props.profile.name}
        </div>
      </div>
    )
  }
}

export default SidebarNewsFeed
