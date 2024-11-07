import React from 'react'
import ServiceBreadcrum from '../../Services/Service Breadcrum/ServiceBreadcrum'
import ServicesSection from '../../Services/service section/ServicesSection'
import VetServicesSection from '../../Services/Vet service section/VetServiceSection'

const Services = () => {
  return (
    <div>
      <ServiceBreadcrum/>
      <ServicesSection/>
      <VetServicesSection/>
    </div>
  )
}

export default Services
