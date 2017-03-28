import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './SidebarWidgets.css'
import SidebarProfile from './SidebarProfile'
import SidebarCalendar from './SidebarCalendar'
import SidebarNewsFeed from './SidebarNewsFeed'

import AuthService from '../../../utils/AuthService'

class SidebarWidgets extends Component {
  static propTypes = {
    auth: PropTypes.instanceOf(AuthService)
  }
  
  render () {
    return (
      <div className={`sideWidgets ${s.sideWidgets}`}>
        <div className={`widgets-content ${s.widgetsContent}`}>
          <SidebarProfile auth={this.props.auth} />
          <SidebarCalendar />
          <SidebarNewsFeed />
        </div>
      </div>
    )
  }
}

export default withStyles(s)(SidebarWidgets)
