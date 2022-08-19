import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/elijah-samson-16619912a/" target="_black"><BsLinkedin /></a>
      <a href="https://github.com/obaraelijah" target="_black"><FaGithub /></a>
      <a href="http://dribble.com" target="_black"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials;
