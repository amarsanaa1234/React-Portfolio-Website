import React from 'react'
import '../../index.css'
import CV from '../../assets/me.pdf'


const CTA = () => {
  return (
    <div className="cta">
      {<a href={CV} download className='btn'>CV татах</a>}
      <a href="#hi" className='btn btn-primary'>утсаар ярих</a>
    </div>
  )
}

export default CTA