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
              <h2 className='text-4xl lg:text-6xl font-bold py-3'>Bienvenido a la empresa de cuidado de mascotas</h2>
            </div>
            <div className="love-your-pets">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit do ei usmod tempor incididunt ut labore et.
                Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod te incididunt ut la amet, consectetur.
              </p>
              <ul className="list">
                <li>
                  <img src="/assets/img/list.png" alt="list" />
                  Desde elegantes peces dorados hasta gatitos pequeños y lindos

                </li>
                <li>
                  <img src="/assets/img/list.png" alt="list" />
                  Los comederos son personal veterinario cualificado.
                </li>
                <li>
                  <img src="/assets/img/list.png" alt="list" />
                  Dueños de mascotas con experiencia y amantes de los animales.
                </li>
                <li>
                  <img src="/assets/img/list.png" alt="list" />
                  Caballos hambrientos: sea cual sea el tamaño de tu mascota
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
