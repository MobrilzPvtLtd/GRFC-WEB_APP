import React from 'react';
import Slider from 'react-slick';
import test from "../../../images_new/doctor2.png"
import testimonial_bg from "../../../images_new/Testimonials/testimonial-bg.png"
import client_bg from "../../../images_new/Testimonials/client_5.png"
import star from "../../../images_new/Testimonials/GREEN-STAR 5.png"
import profile from "../../../images_new/Testimonials/quote 3.png"

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  // Disable arrows if you just want dots
  };

  const testimonials = [
    {
      text: 'Excepteur sint occaecat cupidatat nilesm aniu deserunt mollit anim Lorem set dolo liem amet dolor sit amet, consectetur adipiscing il erunti nuliems elit sed incididunt',
      name: 'Qlark Domous',
      designation: 'Health Advisor.',
      image: test, // Replace with an actual image
    },
    {
      text: 'Excepteur sint occaecat cupidatat nilesm aniu deserunt mollit anim Lorem set dolo liem amet dolor sit amet, consectetur adipiscing il erunti nuliems elit sed incididunt',
      name: 'Qlark Domous',
      designation: 'Health Advisor',
      image: test, // Replace with an actual image
    },
    {
      text: 'Excepteur sint occaecat cupidatat nilesm aniu deserunt mollit anim Lorem set dolo liem amet dolor sit amet, consectetur adipiscing il erunti nuliems elit sed incididunt',
      name: 'Qlark Domous',
      designation: 'Health Advisor',
      image: test, // Replace with an actual image
    },
  ];

  return (
    <div  style={{ backgroundImage: `url(${testimonial_bg}`}}>
    <div className="testimonial-carousel h-1/2 py-10 container" >
      <h1 className=' pb-3 text-center text-lg sm:text-6xl sm:text-left sm:ml-20 sm:pb-10 font-semibold'>What Our Clients Say</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item " >
            <div className='flex justify-center items-center flex-col min-h-[30rem] min-w-10 gap-1 sm:px-20 gap-3  sm: ' style={{ backgroundImage: `url(${client_bg}`,backgroundPosition:"center" ,  backgroundSize: "cover", 
    backgroundRepeat: "no-repeat", }}>
      <div className='flex gap-1 sm:gap-3 justify-center items-center'>
        <img className='w-5' src={star} alt={star} />
        <img className='w-5'src={star} alt={star} />
        <img className='w-5'src={star} alt={star} />
        <img className='w-5'src={star} alt={star} />
        <img className='w-5'src={star} alt={star} />
        </div>
      <p className='text-xs lg:text-lg font-semibold text-center'>"{testimonial.text}"</p>
      <h3 className='text-xs lg:text-3xl font-bold'>{testimonial.name}</h3>
      <p className='font-semibold'>{testimonial.designation}</p>
      <div className='w-full flex justify-end items-center mr-20 ' >
        <div className='bg-[#A8C845] p-4 rounded-[50%]'>
            <img
              src={profile}
              alt={profile}
            />
            </div>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
