import React from "react";
import bg from "../../../../images_new/background_2.png";
import banner_img_1 from "../../../../images_new/banner-img-1-1.jpg";
import banner_img_2 from "../../../../images_new/banner-img-2.jpg";

const ContactBreadcrum = () => {
  return (
    <>
      <section
       className="banner" style={{ backgroundColor: '#fff', backgroundImage: `url(${bg})` , backgroundPosition:`center`, backgroundSize: "cover"}}
      >
        {/* <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-4">
            <div className="banner-text">
              <h2 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>Contact</h2>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ol>
            </div>
          </div>
          <div className="col-lg-6 col-8">
            <div className="banner-img">
              <div className="banner-img-1">
                <svg width="100%" height="100%" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                    fill="#fa441d"
                  />
                </svg>
                <img src={banner_img_1} alt="banner" className='w-100 h-auto' />
              </div>
              <div className="banner-img-2">
                <svg width="100%" height="100%" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                    fill="#fa441d"
                  />
                </svg>
                <img src={banner_img_2} alt="banner" className='w-100 h-auto'  />
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-4">
              <div className="banner-text">
                <h2 className="text-2xl font-bold sm:text-5xl md:text-6xl lg:text-5xl">
                Nuestro contacto
                </h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Hogar</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Nuestro contacto
                  </li>
                  {/* <li className="breadcrumb-item active" aria-current="page">shop</li> */}
                </ol>
              </div>
            </div>
            <div className="col-lg-6 col-8">
              <div className="banner-img">
                <div className="banner-img-1">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 673 673"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                      fill="#fa441d"
                    ></path>
                  </svg>
                  <img
                    src={banner_img_1}
                    alt="banner"
                    className="w-100 h-auto"
                  />
                </div>
                <div className="banner-img-2">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 673 673"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                      fill="#fa441d"
                    ></path>
                  </svg>
                  <img
                    src={banner_img_2}
                    alt="banner"
                    className="w-100 h-auto "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBreadcrum;
