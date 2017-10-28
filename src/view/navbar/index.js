import React from 'react'
import { Menu, } from 'semantic-ui-react'

import WhiteButton from '../components/white_button'

import Logo from '../assets/ivy-bg.png'

const Navbar = ({ handleRun, handleStep, handleClear, runMode}) => (
  <Menu className='component__navbar'>
    <span style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
      <span style={{ height: '100%', padding: '8px', }}>
        <img alt='ivy' src={ Logo } className='ivy-logo'/>
      </span>
      <span style={{ padding: '15px', }}>
        <span style={{ paddingRight: '7px', }} >
          <WhiteButton text='Run' onClick={ handleRun } runMode={ runMode }/>
        </span>
        <span style={{ paddingRight: '7px', }} >
          <WhiteButton text='Step' onClick={ handleStep } />
	    </span>
        <WhiteButton text='Clear' onClick={ handleClear } />
      </span>
    </span>
  </Menu>
)

export default Navbar
