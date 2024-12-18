import React from 'react'
import SliderBanner from './SliderBanner'
import WelcomeSection from './WelcomeSection'
import ProductSection from './ProductSection'
import Newsletter from './Newsletter'
import ServiceSection from './ServiceSection'
import CarouselBanner from '../Carousel/CarouselBanner'
import TestimonialCarousel from '../Testimonial/TestimonialCarousel'
import ServicesSection from '../Services/service section/ServicesSection'

const Home = () => {
  return (
    <div className='container'>
        {/* <SliderBanner/> */}

{/* workable component start here */}
        <CarouselBanner/>
        <ServicesSection/>
        <ProductSection/>
        <TestimonialCarousel/>



        {/* workable component ends here */}




        {/* <Newsletter/> */}
        {/* <Testimonials/> */}
    </div>
  )
}

export default Home
