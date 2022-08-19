import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
     <div className="container">
       <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Elijah Obara Samson</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <CTA />
         <HeaderSocials />
        <div className="me">
         
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
     </div>
   </header>
  )
}

export default Header
