import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bg.jpg'
import IMG2 from '../../assets/me-about.jpg'
import IMG3 from '../../assets/download.jpg'
// import IMG4 from '../../assets/img-portfolio4.png'
// import IMG5 from '../../assets/img-portfolio5.png'
// import IMG6 from '../../assets/img-portfolio6.png'

// Data Array para preenhcer o portfolio
const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Meme Creator',
    github: 'https://github.com',
    demo: 'https://beexclusivegym.com.br'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Portfolio',
    github: 'https://github.com',
    demo: 'https://embelezegama.com.br'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Face Detector ',
    github: 'https://github.com',
    demo: 'https://seoxperts.com.br'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'instituto Modal - Wordpress Design e SEO',
  //   github: 'https://github.com',
  //   demo: 'https://modal.org.br'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Mansão Cristal - Wordpress Design',
  //   github: 'https://github.com',
  //   demo: 'https://mansaocristal.com.br'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Microtecnica - Wordpress Design e SEO',
  //   github: 'https://github.com',
  //   demo: 'https://microtecnica.com.br'
  // },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='text-light'>My Recent Work</h5>
      <h2 className="text-light">
        Portfolio
      </h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} className="image" alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Site</a>
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