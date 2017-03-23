import React, { Component, PropTypes } from 'react'
import s from './SidebarWidgets.css'
import SidebarProfile from './SidebarProfile'
import SidebarCalendar from './SidebarCalendar'
import SidebarNewsFeed from './SidebarNewsFeed'

class SidebarWidgets extends Component {
  static propTypes = {
    profile: PropTypes.object
  }

  render () {
    return (
      <div className={`sideWidgets ${s.sideWidgets}`}>
        <div className={`widgets-content ${s.widgetsContent}`}>
          <SidebarProfile profile={this.props.profile} />
          <SidebarCalendar />
          <SidebarNewsFeed />
        </div>
      </div>
    )
  }
}

export default SidebarWidgets
