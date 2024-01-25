import React from 'react';
import { Pagination } from 'swiper';
import { FaBook } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://ieeexplore.ieee.org/document/9182844',
      name: 'Convolutional Neural Network-based Automatic Extraction and Fine Generation',
      conference: 'Second International Conference on Inventive Research in Computing Applications (ICIRCA)',
    },
    {
      id: 2,
      name: 'Security to IOT devices using Blockchain ',
      conference: 'ICCES 2019',
    },
  ];
  return (
    <section id="testmonials">
      <h5>My published Papers</h5>
      <h2>Publications</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
            <FaBook /> {/* Replace with the book icon */}

            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.conference}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials