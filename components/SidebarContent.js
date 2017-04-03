import React from 'react'
import { NavItem } from 'rebass'
import { FaTasks } from 'react-icons/lib/fa'
import { MdCloud, MdCreditCard, MdPerson, MdPhonelinkSetup, MdTimeline } from 'react-icons/lib/md'

export default (
  <div className='sidebar-icons'>
    <style jsx global>{`
      .icon {
        font-size: 3em;
        padding-right: 0;
      }
    `}</style>
    <NavItem href='/devices' title='Devices'>
      <MdPhonelinkSetup className='icon' />
    </NavItem>
    <NavItem href='/simulations' title='Simulations'>
      <FaTasks className='icon' />
    </NavItem>
    <NavItem href='/runs' title='Runs'>
      <MdCloud className='icon' />
    </NavItem>
    <NavItem href='/reports' title='Reports'>
      <MdTimeline className='icon' />
    </NavItem>
    <NavItem href='/account' title='Account'>
      <MdPerson className='icon' />
    </NavItem>
    <NavItem href='/billing' title='Billing'>
      <MdCreditCard className='icon' />
    </NavItem>
  </div>
)
