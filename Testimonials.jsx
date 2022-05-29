import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me-about.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'bla bla bla'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'bla bla bla 2'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'bla bla bla 3'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>testimials</h2>

      <div className='container testimonials__container'>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <articlec key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </articlec>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials