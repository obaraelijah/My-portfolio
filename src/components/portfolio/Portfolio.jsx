import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data= [
  {
    id: 1,
    image: IMG1,
    title: 'Platform for Money Movements',
    github: 'http://github.com',
    demo: 'https://cdn.dribbble.com/userupload/3272863/file/original-cc9365b311e8ca8169cd4359f7593ffa.png?compress=1&resize=752x'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Axel Arigato Virtual Fitting App',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19116575-Axel-Arigato-Virtual-Fitting-App'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Blocklink logo concept',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19122368-Blocklink-logo-concept-pt-3'
  },
  {
    id: 1,
    image: IMG4,
    title: 'Blocklink logo concept',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19122368-Blocklink-logo-concept-pt-3'
  },
  {
    id: 1,
    image: IMG5,
    title: 'Blocklink logo concept',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19122368-Blocklink-logo-concept-pt-3'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Blocklink logo concept',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/19122368-Blocklink-logo-concept-pt-3'
  },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
               <div className="portfolio__item-cta">
               <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
               </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;
