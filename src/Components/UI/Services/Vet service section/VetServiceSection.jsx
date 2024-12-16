import React, { useEffect, useState } from "react";
import video_bg from "../../../../images_new/services-video.jpg";
import primare_care from "../../../../images_new/lila-in-primary-care.gif";
import doctor from "../../../../images_new/doctor2000011111.png";
import cardiology from "../../../../images_new/cardiology.png";
import feline from "../../../../images_new/preventive-care-cats-720px.jpg";
import vet from "../../../../images_new/DSC_0332.jpg";
import dog from "../../../../images_new/top-20-small-dog-breeds.jpeg";
import ServiceBreadcrum from "../Service Breadcrum/ServiceBreadcrum";
import bg from "../../../../images_new/background_2.png";
import banner_1 from "../../../../images_new/banner-img-1-1.jpg";
import banner_2 from "../../../../images_new/banner-img-2.jpg";
import axios from "axios";
import { Skeleton } from "antd";
import { Link, useSearchParams } from "react-router-dom";

const VetServicesSection = () => {
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [loader, setLoader] = useState(true);

  let url = process.env.REACT_APP_BACKEND_BASE_URL;
  const [subcategory_data, setSubCategory_data] = useState();

  setTimeout(() => {
    setCategoryId(localStorage.getItem("category_id"));
    setCategoryName(localStorage.getItem("category_name"));
   
  }, 1000);
  console.log("yyyyy", categoryId);

  useEffect(() => {
    const fetchSubCategoryData = async () => {
      try {
        const res = await axios.get(`${url}/subcategory/2`);
        setSubCategory_data(res.data.data);
        setLoader(false);
        // console.log(res)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchSubCategoryData();
  }, [categoryId]);

  const urlparam =  window.location.pathname
  console.log('window.location.pathname',window.location.pathname)
  return (
    <>
      <section
        className="banner"
        style={{ backgroundColor: "#fff", backgroundImage: `url(${bg})`, backgroundPosition:`center` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h2 className="text-6xl font-bold">Instalación</h2>
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

     

      <section className="gap no-bottom">
        <div className="container mt-6">
          <div className="row">
            {loader ? <Skeleton/> : subcategory_data?.map((item, index) => (
              <div className="col-lg-4 col-md-6">
                <div className="we-provide">
                  <div className="we-provide-img a01 flex justify-center">
                    <img src={primare_care} alt="we-provide-1" />
                    <svg
                      width="326"
                      height="326"
                      viewBox="0 0 673 673"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                        fill="#fedc4f"
                      ></path>
                    </svg>
                  </div>
                  <Link to={`/services/${categoryName}/${(item?.name).toString().toLowerCase()}`}>
                    <h5>{item?.name}</h5>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* } */}
    </>
  );
};

export default VetServicesSection;
