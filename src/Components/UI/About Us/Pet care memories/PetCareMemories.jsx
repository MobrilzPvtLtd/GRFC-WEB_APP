import React from 'react'
import gallery1 from "../../../../images_new/gallery1.jpg"
import gallery3 from "../../../../images_new/gallery3.jpg"

const PetCareMemories = () => {
  return (
    <div className="gap">
    <div className="container">
      <div className="heading">
        {/* Uncomment if needed
        <img src="assets/img/heading-img.png" alt="heading-img" />
        */}
        <h6>Gallery Photos</h6>
        <h2 className='text-7xl font-bold'>Pet Care Memories</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="about-gallery-img ">
            <a href={gallery1} data-fancybox="gallery">
              <i className="fa-solid fa-plus"></i>
            </a>
            <figure  className='bg-black '>
              <img className=' w-1/2' alt="girl" src={gallery1} />
            </figure>
          </div>
          <div className="about-gallery-img mb-lg-0">
            <a href="/images_new/gallery3.jpg" data-fancybox="gallery">
              <i className="fa-solid fa-plus"></i>
            </a>
            <figure>
              <img  alt="girl" src={gallery3} />
            </figure>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="about-gallery-img">
            <a href="/images_new/gallery3.jpg" data-fancybox="gallery">
              <i className="fa-solid fa-plus"></i>
            </a>
            <figure>
              <img alt="girl" src={gallery3} />
            </figure>
          </div>
          <div className="about-gallery-img">
            <a href="/images_new/gallery3.jpg" data-fancybox="gallery">
              <i className="fa-solid fa-plus"></i>
            </a>
            <figure>
              <img alt="girl" src={gallery3} />
            </figure>
          </div>
          <div className="about-gallery-img mb-lg-0">
            <a href="/images_new/gallery3.jpg" data-fancybox="gallery">
              <i className="fa-solid fa-plus"></i>
            </a>
            <figure>
              <img alt="girl" src={gallery3} />
            </figure>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="about-gallery-img">
            <a href="/images_new/gallery3.jpg" data-fancybox="gallery">
              <i className="fa-solid fa-plus"></i>
            </a>
            <figure>
              <img alt="girl" src={gallery3} />
            </figure>
          </div>
          <div className="about-gallery-img mb-lg-0">
            <a href="/images_new/gallery1.jpg" data-fancybox="gallery">
              <i className="fa-solid fa-plus"></i>
            </a>
            <figure>
              <img alt="girl" src={gallery1} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PetCareMemories
