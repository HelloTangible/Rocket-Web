import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Sidebar.css'
import SidebarWidgets from './SidebarWidgets'
import AuthService from '../../utils/AuthService'
import MenuBar from './MenuBar/MenuBar'

class Sidebar extends Component {
  static propTypes = {
    auth: PropTypes.instanceOf(AuthService)
  }
  
  render () {
    return (
      <aside className={s.sidebar}>
        <div className={'sidenav-outer ' + s.sidenavOuter}>
          <MenuBar />
          <SidebarWidgets auth={this.props.auth} />
        </div>
      </aside>
    );
  }
}

export default withStyles(s)(Sidebar)
