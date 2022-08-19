import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User stories.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content strategy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information architecture.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand and design system development.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-end design and development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Intergration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-end development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continuos support and evolution</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Quality analysis</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Database Intergration</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MySql</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>mongoDB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Firebase</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>POstgreSQL</p>
            </li>

          </ul>
        </article>


      </div>
    </section >
  )
}

export default Services;
