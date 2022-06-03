import React from 'react'

import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import SocialIcons from '../socialicons/SocialIcons'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Hello I'm</h5>
        <h1 className='text-light'>Hitesh Kumar Gendre</h1>
        {" "}
        <h3 className="mono text-light">
          Front End Developer
        </h3>
        
        <CTA />
        <SocialIcons position='header__socialicons' />
        <div className="me">
          <img src={ME} alt="André Tavares Fotografando" />
        </div>
        <a href="#contact" className='scroll__down'>
          Scroll
        </a>
      </div>
    </header>
  )
}