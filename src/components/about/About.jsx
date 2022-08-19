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
                <small>5+ clients Locally</small>
            </article>
            <article className='about__card'>
                 <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ completed Projects</small>
            </article>
          </div>

          <p>
          “I have just over a year of experience as a junior software engineer with First Technology. In my short time there, I've already contributed to over a dozen projects and assisted with managing one project for one of the firm's long-time clients.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;