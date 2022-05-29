import React from 'react'
import About from './../src/components/about/About'
import Experience from './../components/experience/Experience'
import Header from './../components/header/Header'
import Nav from './../components/nav/Nav'
import Portfolio from './../components/portfolio/Portfolio'
import Testimonials from './../components/testimonials/Testimonials'
import Contact from './../components/contact/Contact'
import Footer from './../components/footer/Footer'
import Services from './../components/services/Services'

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Testimonials />
      </div>
    </div>
  )
}

export default App