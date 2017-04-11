import React, { Component, PropTypes } from 'react'
import SidebarContent from './SidebarContent'
const Sidebar = require('react-sidebar').default

class LeftNav extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  }

  sidebarStyles = {
    root: {
      position: 'absolute',
      top: '4.5em',
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden'
    },
    sidebar: {
      background: '#82ca9d',
      borderTop: '#3dabf0',
      width: '50px'
    },
    content: {
      marginLeft: '1em'
    }
  }

  constructor(props) {
    super(props)
    
    this.state = {
      sidebarDocked: true
    }
  }
  
  render () {
    return (
      <Sidebar className="sidebar" 
        sidebar={SidebarContent} 
        docked={this.state.sidebarDocked}
        styles={this.sidebarStyles}>
        {this.props.children}
      </Sidebar>
    )
  }
}

export default LeftNav
