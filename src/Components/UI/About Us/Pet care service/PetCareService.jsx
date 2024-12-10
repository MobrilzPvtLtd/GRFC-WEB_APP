import React from 'react'
import pet_walking from "../../../../images_new/pet-walking.jpg"

const PetCareService = () => {
  return (
    <div>
      <section style={{ backgroundColor: '#f5f5f5' }} className="gap care-services">
      <div className="container">
        <div className="heading">
          {/* Uncomment if needed
          <img src="/assets/img/heading-img.png" alt="heading-img" />
          */}
          <h6>Lo que ofrecemos</h6>
          <h2 className='text-4xl lg:text-6xl font-bold'>Servicios de cuidado de mascotas</h2>
        </div>
        {/* Uncomment if needed
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 p-lg-0 col-md-6 col-sm-6">
              <div className="pet-grooming">
                <i><img src={service.icon} alt="icon" /></i>
                <svg width="138" height="138" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d={service.svgPath} fill="#940c69" />
                </svg>
                <a href="#">
                  <h4>{service.title}</h4>
                </a>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        */}
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6">
            <div className="video position-relative">
              <figure>
                <img src={pet_walking} alt="img" />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="video position-relative">
              <a data-fancybox href="https://www.youtube.com/watch?v=5q6TE1sLTDo">
                <i>
                  <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 8.49951L0.5 0.27227L0.5 16.7268L11 8.49951Z" fill="#000" />
                  </svg>
                </i>
              </a>
              <figure>
                <img src={pet_walking} alt="img" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default PetCareService
