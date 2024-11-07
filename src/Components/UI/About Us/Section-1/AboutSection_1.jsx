import React from 'react'
import dog_1 from "../../../../images_new/image-about.png"

const AboutSection_1 = () => {
  return (
    <div>
       <section className="gap about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading two">
              <h2 className='text-7xl font-bold'>Welcome to The Pet Care Company</h2>
            </div>
            <div className="love-your-pets">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit do ei usmod tempor incididunt ut labore et.
                Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod te incididunt ut la amet, consectetur.
              </p>
              <ul className="list">
                <li>
                  <img src="/assets/img/list.png" alt="list" />
                  Graceful goldfish, to small, cute kittens
                </li>
                <li>
                  <img src="/assets/img/list.png" alt="list" />
                  Feeders are either veterinary qualified staff
                </li>
                <li>
                  <img src="/assets/img/list.png" alt="list" />
                  Experienced pet owners and animal lovers
                </li>
                <li>
                  <img src="/assets/img/list.png" alt="list" />
                  Hungry horses: whatever the size of your pet
                </li>
              </ul>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="dogs-img">
              <img src={dog_1} alt="dogs" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutSection_1
