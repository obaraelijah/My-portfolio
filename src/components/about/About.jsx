import React from 'react'
import './about.css'
import ME from '../../assets/sam.jpg'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="AboutImage" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                 <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years</small>
            </article>
            <article className='about__card'>
                 <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>25+ clients Locally</small>
            </article>
            <article className='about__card'>
                 <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ completed Projects</small>
            </article>
          </div>

          <p>
          Dynamic software engineer skilled at developing complex solutions, possessing strong creative thinking skilss, high energy and integrity.I am dedicated to constantly improving tools and infrastructure to maximize productivity and minimize system downtime.
          I have just over a year of experience as a junior software engineer with First Technology including web development, process automation, algorithms and modelling and database management.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;