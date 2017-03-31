import React from 'react'
import { NavItem } from 'rebass'
import RocketIcon from 'react-icons/lib/fa/rocket'
import Router from 'next/router'

export default (
  <NavItem href='/'>
    <style jsx>{`
      .icon {
        font-size: .5em;
      }
    `}</style>
    <RocketIcon className='icon' />
  </NavItem>
)
