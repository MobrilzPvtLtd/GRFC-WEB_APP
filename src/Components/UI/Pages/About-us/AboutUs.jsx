import React from 'react'
import TestimonialCarousel from '../../Testimonial/TestimonialCarousel'
import Breadcrumb from '../../About Us/Breadcrum/Breadcrum'
import AboutSection_1 from '../../About Us/Section-1/AboutSection_1'
import PetCareService from '../../About Us/Pet care service/PetCareService'
import PetCareMemories from '../../About Us/Pet care memories/PetCareMemories'



const AboutUs = () => {
  return (
    <div>
      <Breadcrumb/>
     <AboutSection_1/>
     <PetCareService/>
     <TestimonialCarousel/>
     <PetCareMemories/>
    </div>
  )
}

export default AboutUs
