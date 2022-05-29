import React from 'react'
import './portfolio.css'
import IMG from '../../assets/me-about.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'ymar negn webv',
    github: 'https://github.com',
    demo: '#'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>my recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="fortfolio__item-sta">
                  <a href={github} className='btn'>GITHUB</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">live demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio