import React, { useEffect, useState } from "react";
import doctor from "../../../../images_new/doctor2000011111.png";
import ServiceBreadcrum from "../Service Breadcrum/ServiceBreadcrum";
import bg from "../../../../images_new/background_2.png";
import banner_1 from "../../../../images_new/banner-img-1-1.jpg";
import banner_2 from "../../../../images_new/banner-img-2.jpg";
import dog_pic from "../../../../images_new/pet-walking.jpg";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Descr_Page = () => {
  // const urlparam = window.location.pathname;
  const location = useLocation(); // Use the useLocation hook to get the current URL path
  const urlparam = location.pathname; // Extract the pathname from location

  const url = process.env.REACT_APP_BACKEND_BASE_URL;
  const [description, setDescription] = useState([]);
  const [filteredDescription, setFilteredDescription] = useState(null); // For filtered description

  useEffect(() => {
    const fetchCategory_descr = async () => {
      try {
        const res = await axios.get(`${url}/subcategory/2`);
        setDescription(res.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchCategory_descr();
  }, []);

  // Filter description based on urlparam
  useEffect(() => {
    if (description && description?.length > 0 && urlparam) {
      const filtered = description.find(item => urlparam.includes(item.name.toLowerCase()));
      setFilteredDescription(filtered); // Set filtered description based on urlparam match
    }
  }, [description, urlparam]);


  return (
    <>
      <section
        className="banner"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url(${bg})`,
          backgroundPosition: `center`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h2 className="text-6xl font-bold">Reserva Aquí</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img">
                <div className="banner-img-1">
                  <svg
                    width="260"
                    height="260"
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
                  <img src={banner_1} alt="banner" />
                </div>
                <div className="banner-img-2">
                  <svg
                    width="320"
                    height="320"
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
                  <img src={banner_2} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row mx-auto">
          <div className="col-lg-5 col-md-6 mb-4 mt-6">
            <div className=" ">
              <img src={dog_pic} alt="we" className="rounded-xl" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6  mb-2 mt-6">
            {/* {description?.map((item, index) => (
              <p className="p-5 text-xl" key={index}>
                {item?.description}
              </p>
            ))} */}
             {/* Display filtered description if it exists */}
             {filteredDescription ? (
              <p className="p-5 text-xl">
                {filteredDescription.description}
              </p>
            ) : (
              <p className="p-5 text-xl">No se encontró ninguna descripción que coincida.</p>
            )}
            <div className="flex justify-center">
              {" "}
              <button className="btn btn-success">
                <a href={`${urlparam}/booknow`} className="text-white">
                Reserva ahora{" "}
                </a>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Descr_Page;
