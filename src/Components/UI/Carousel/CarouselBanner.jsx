import React from "react";
import Slider from "react-slick";
import bannerBg from "../../../images_new/background_2.png";
import banner1 from "../../../images_new//slide-3.png";

const CarouselBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const banners = [
    {
      image: banner1,
      alt: "Banner 1",
      heading: "Cuide bien a las mascotas",
      description:
        "Somos su servicio local de alojamiento para perros en casa y le brindamos una completa",
    },
    {
      image: banner1,
      alt: "Banner 2",
      heading: "Cuide bien a las mascotas",
      description:
        "Somos su servicio local de alojamiento para perros en casa y le brindamos una completa",
    },
    {
      image: banner1,
      alt: "Banner 3",
      heading: "Cuide bien a las mascotas",
      description:
        "Somos su servicio local de alojamiento para perros en casa y le brindamos una completa",
    },
  ];

  return (
    <div
      className="carousel-container"
      style={{
        maxWidth: "screen",
        minWidth: "320px",
        margin: "2rem auto",
        backgroundImage: `url(${bannerBg})`, // Using template literals for dynamic URL
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image
        maxHeight: "500px",
        minHeight: "200px",
        marginTop : "10rem",
        width:"screen"

      }}
    >
     
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <div className="flex w-full h-full justify-center items-center px-4">
              <div className="h-full w-1/2 flex flex-col justify-center gap-2 lg:gap-5 ms-11">
                <h1 className=" lg:text-6xl font-bold ">
                  {banner.heading.slice(0, 11)}
                  <br></br>
                  {banner.heading.slice(11)}
                </h1>
                <p className=" lg:w-1/3 font-bold text-sm ">{banner.description}</p>
                <button className="w-fit mh-fit text-white bg-orange-600  px-3 py-1 rounded-lg font-semibold text-sm">
                Ver servicios</button>
              </div>
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-52 lg:w-fit  h-52 lg:h-[30rem]"
                // style={{ width: "20%", height: "500px" }}
              />
            </div>
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default CarouselBanner;
