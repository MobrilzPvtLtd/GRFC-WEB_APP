import React, { useEffect, useState } from 'react';
import primare_care from "../../../../images_new/lila-in-primary-care.gif"
import doctor from "../../../../images_new/doctor2000011111.png"
import cardiology from "../../../../images_new/cardiology.png"
import feline from "../../../../images_new/preventive-care-cats-720px.jpg"
import vet from "../../../../images_new/DSC_0332.jpg"
import dog from "../../../../images_new/top-20-small-dog-breeds.jpeg"
import axios from 'axios';


const ServicesSection = () => {

  let url = process.env.REACT_APP_BACKEND_BASE_URL;
  const[category_data,setCategory_data] = useState([]);


  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await axios.get(`${url}/category`);
        setCategory_data(res.data.data)
        // console.log(res)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchCategoryData();
  }, []);
  console.log('1111111111',category_data)
  return (
    <section className="gap no-bottom">
      <div className="container">
        <div className="row">
          { category_data?.map((item,index)=>(
              
            
            <div  className="col-lg-4 col-md-6" key={index}>
            <div className="we-provide">
              <div className="we-provide-img a01 flex justify-center my-5">
                
                <img className="w-60 aspect-square" src={item?.image_link} alt="we-provide-1" />
                <svg width="326" height="326" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                    fill="#fedc4f"
                  ></path>
                </svg>
              </div>
              <a href="/services/farmacia">
                <h5><b>{item?.name} </b></h5>
              </a>
            </div>
           </div>  
            ))}
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
