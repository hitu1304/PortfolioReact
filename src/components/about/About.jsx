import React from 'react'
import './about.css'
import Andre from '../../assets/me-about.jpg'
import {GiNinjaHead} from 'react-icons/gi'
import {GoOrganization} from 'react-icons/go'
import {RiTeamFill} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
      <h5 className='text-light'>Get to know</h5>
      <h2 className='text-light'>About me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Andre} alt="André Tavares por Nathalia Millen" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <GiNinjaHead className='about__icon'/>
                <h5>Experience</h5>
                <small>1 year</small>
              </article>
              {/* <article className="about__card">
                <GoOrganization className='about__icon'/>
                <h5>Clientes</h5>
                <small>Apoio e consultoria</small>
              </article> */}
              <article className="about__card">
                <RiTeamFill className='about__icon'/>
                <h5>Projects</h5>
                <small>3+</small>
              </article>
            </div>
            <p>
            I did intership from GEEKSFORGEEKS as Technical Content Writer from Dec 2021 to april 2022. During my internship I written 20+ Data 
             Structure Algorithms based article and published on GFG portal and also make many valid improvements to existing contents.
            </p>
            <a href="#contact" className="btn btn-primary">Know more</a>
          </div>
        </div>
    </section>
  )
}

export default About