import React, { Component, PropTypes } from 'react'
import s from './Sidebar.css'
import SidebarWidgets from './SidebarWidgets'
import MenuBar from './MenuBar/MenuBar'

class Sidebar extends Component {
  static propTypes = {
    profile: PropTypes.object
  }

  render () {
    return (
      <aside className={s.sidebar}>
        <div className={'sidenav-outer ' + s.sidenavOuter}>
          <MenuBar />
          <SidebarWidgets profile={this.props.profile} />
        </div>
      </aside>
    )
  }
}

export default Sidebar
