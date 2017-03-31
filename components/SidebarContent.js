import React from 'react'
import { NavItem } from 'rebass'
import { FaTasks, FaCogs, FaRefresh } from 'react-icons/lib/fa'

export default (
  <div>
    <style jsx>{`
      .icon {
        font-size: .5em;
      }
    `}</style>
    <NavItem href='/'>
      <FaTasks className='icon' />
    </NavItem>
    <NavItem href='/'>
      <FaRefresh className='icon' />
    </NavItem>
    <NavItem href='/'>
      <FaCogs className='icon' />
    </NavItem>
  </div>
)
