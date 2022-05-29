import React from 'react'
import './header.css'
import CTA from '/home/rinchindugar/Documents/html/fullweb/react-portfolio-website-1/src/components/header/CTA'
import ME from '/home/rinchindugar/Documents/html/fullweb/react-portfolio-website-1/src/assets/me.png'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>сайн байна уу? намайг</h5>
        <h1>Э.Амарсанаа</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>

    </header>
  )
}

export default Header