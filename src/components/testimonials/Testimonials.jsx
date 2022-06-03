import React from 'react'
import './testimonials.css'
import ekant from '../../assets/ekant.jpg'
import hemant from '../../assets/hemant.jpg'


// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const testimonialData = [
  {
    avatar:   hemant,
    name:     "Hemant Kumar Rathore",
    review:   "Excellent"
  },
  {
    avatar:   ekant,
    name:     "Ekant Chandrakar",
    review:   "Superb"
  },
  // {
  //   avatar:   "https://randomuser.me/api/portraits/lego/1.jpg",
  //   name:     "Brandon Wilker",
  //   review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  // },
  // {
  //   avatar:   "https://randomuser.me/api/portraits/women/61.jpg",
  //   name:     "Fátima Lunes",
  //   review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  // },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className='text-light'>Review from friends</h5>
      <h2 className='text-light'>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          testimonialData.map(({avatar, name, review}, idex) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials