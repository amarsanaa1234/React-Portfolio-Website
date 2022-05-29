import React from 'react'
import './experience.css'
import { FaCheckCircle } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        what skills i have
      </h5>
      <h2>
        my Experiance
      </h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedaite</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle />
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <FaCheckCircle />
              <h4>MongoDB</h4>
              <small className='text-light'>Intermedaite</small>
            </article>
            <article className='experience__details'>
              <FaCheckCircle />
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <FaCheckCircle />
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience