import React from "react";
import logo from '../../images_new/Idenditad-Visual-Grupo-Felino-Canino-3.png';
import headphone from '../../assets/img/hadphon.png';
import visaicon from '../../assets/img/visa.jpg';

const Footer = () => {
  return (
    <footer 
      style={{
        backgroundColor: "#fff",
        backgroundImage: "url(assets/images_new/background_2.png)",
        backgroundPosition: "0% -500%",
        backgroundSize : " cover"
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="logo">
              <a href="index.html">
                <img
                  class="flogo001"
                  src={logo}
                  alt="logo"
                />
              </a>
              <p className="font-semibold ">
                At vero eos et accusam justo duo dolo res et ea rebum. Stet
                clita kasd guber gren. Aenean sollici tudin lorem qsben elit
                clita.
              </p>
              <div class="phone">
                <i>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M0,81v350h512V81H0z M456.952,111L256,286.104L55.047,111H456.952z M30,128.967l134.031,116.789L30,379.787V128.967z
                               M51.213,401l135.489-135.489L256,325.896l69.298-60.384L460.787,401H51.213z M482,379.788L347.969,245.756L482,128.967V379.788z"
                    ></path>
                  </svg>
                </i>
                <a href="mallto:username@domain.com">usuario@dominio.com</a>
              </div>
              <div class="phone d-flax align-items-center">
                <i>
                  <svg
                    version="1.1"
                    xmlSpace="preserve"
                    width="682.66669"
                    height="682.66669"
                    viewBox="0 0 682.66669 682.66669"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <clipPath clipPathUnits="userSpaceOnUse">
                      <path d="M 0,512 H 512 V 0 H 0 Z"></path>
                    </clipPath>
                    <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                      <g>
                        <g clip-path="url(#clipPath2333)">
                          <g transform="translate(256,92)">
                            <path
                              d="m 0,0 c -126.964,143.662 -160,165.23 -160,240 0,88.366 71.634,160 160,160 88.365,0 160,-71.634 160,-160 C 160,165.854 130.212,147.337 0,0 Z"
                              style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "40",
                                strokeLinecap: "square",
                                strokeLinejoin: "miter",
                                strokeMiterlimit: "10",
                                strokeDasharray: "none",
                                strokeOpacity: "1",
                              }}
                            ></path>
                          </g>
                          <g transform="translate(316,372)">
                            <path
                              d="m 0,0 -80,-80 -40,40"
                              style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "40",
                                strokeLinecap: "square",
                                strokeLinejoin: "miter",
                                strokeMiterlimit: "10",
                                strokeDasharray: "none",
                                strokeOpacity: "1",
                              }}
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
                <p>Eighth Avenue 487, New York</p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="widget-title">
              <h3>Enlaces rápidos</h3>
              <div class="boder"></div>
              <ul>
                <li>
                  <i class="fa-solid fa-angle-right"></i>
                  <a href="javascript:void(0)">Servicios de alojamiento para perros</a>
                </li>
                <li>
                  <i class="fa-solid fa-angle-right"></i>
                  <a href="javascript:void(0)">Servicios de alojamiento para gatos</a>
                </li>
                <li>
                  <i class="fa-solid fa-angle-right"></i>
                  <a href="javascript:void(0)">Servicios de spa y peluquería</a>
                </li>
                <li>
                  <i class="fa-solid fa-angle-right"></i>
                  <a href="javascript:void(0)">Cuidar al cachorro</a>
                </li>
                <li>
                  <i class="fa-solid fa-angle-right"></i>
                  <a href="javascript:void(0)">Servicio en un Resort</a>
                </li>
                <li>
                  <i class="fa-solid fa-angle-right"></i>
                  <a href="javascript:void(0)">Servicio Veterinario</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 sm:mt-5">
            <div class="working-hours">
              <div class="widget-title">
                <h3>horas de trabajo</h3>
                <div class="boder"></div>
                <div class="working-time">
                  <h6 class="pt-0">
                  Lunes - Sábado <span>08AM - 10PM</span>
                  </h6>
                  <h6>
                  Domingo<span>08AM - 10PM</span>
                  </h6>
                  <div class="call-us">
                    <img src={headphone} alt="hadphon" />
                    <div>
                      <a href="#">+021 01283492</a>
                      <span>¿Tienes preguntas? Llámanos 24/7</span>
                    </div>
                  </div>
                  <ul class="social-icon">
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>
            © 2024 Reservados todos los derechos. Diseñado y desarrollado por{" "}
            <a href="https://mobrilz.com/">Mobrilz</a>
          </p>
          <a href="#">
            <img src={visaicon} alt="cad" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
