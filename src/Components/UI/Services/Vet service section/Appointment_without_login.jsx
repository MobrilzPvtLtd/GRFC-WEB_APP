import React, { useContext, useEffect, useState } from "react";
import ServiceBreadcrum from "../Service Breadcrum/ServiceBreadcrum";
import bg from "../../../../images_new/background_2.png";
import banner_1 from "../../../../images_new/banner-img-1-1.jpg";
import banner_2 from "../../../../images_new/banner-img-2.jpg";
import { ValueContext } from "../../../Context/Context_Hook";
import axios from "axios";
import { toast } from "react-toastify";
import Pet_Form from "../../Petform/Pet_Form";
import { useNavigate } from "react-router-dom";

const Appointment_without_login = ({Id_data}) => {
  let token = sessionStorage.getItem("token");
  const [userData, setUserData] = useState();
  const [petData, setPetData] = useState();
  let id = sessionStorage.getItem("id");
  const context = useContext(ValueContext);
  let url = process.env.REACT_APP_BACKEND_BASE_URL;
  

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    pet_details: "",
    
  });
  // const[id_data,setId_Data] =useState()
 console.log('id ka data ',Id_data)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const navigate =useNavigate();



useEffect(() => {
  const fetchPetsData = async () => {
    try {
      const res = await axios.get(`${url}/pets/${Id_data.owner_id}`, {
        
      });

      setPetData(res.data.data);
      // setLoader(false)
     

      console.log("object", petData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  if (id ) {
    fetchPetsData();
  }
}, [id]);

  const handleSubmitForm = async(e) => {
   
    console.log("form submitted", form);
    
    try {
      e.preventDefault();
      const appointment_data = await axios.post(`${url}/apointment`, 
        {

        appointment_time: form.time,
        appointment_date: form.date,
        disease_description: form.pet_details,
        pet_id:Id_data.pet_id,
        owner_id:Id_data.owner_id,
      } ,
      
      { headers: {
        // Authorization: token,
        "Content-Type": "application/json",
      }
    }
     );
     if (appointment_data.status == 200) {
       
        toast.success('Appointment Book Successfully');
        navigate('/')
   
     }
      
      console.log("Response_of_appnt:", appointment_data);
      
    } catch (error) {
      console.log(error)
    }
    
  };
   console.log("Response:",form ,);

  return (
    <>
      {/* <section
        className="banner"
        style={{ backgroundColor: "#fff", backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h2 className="text-6xl font-bold">Appointment Form</h2>
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
      </section> */}
      
      <div className="container my-4">
        <div className="row">
          <div
            className="col-md-8  mx-auto rounded-xl"
            style={{
              backgroundColor: "#5badbdfa",
            }}
          >
            
            <h1 className="text-4xl py-4">Fill out the Appointment Form</h1>
          
              <form onSubmit={handleSubmitForm} action="" className="p-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control mb-3 txt-dg"
                 name = "name"
                 onChange={handleChange}
                  
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3 txt_dg"
                   name = "email"
                      onChange={handleChange}
                      />
            
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control mb-3 txt_dg"
                   name = "phone"
                      onChange={handleChange}

                />
                <input
                  type="time"
                  placeholder="Pickup Time"
                  className="form-control mb-3 txt_dg"
                  name="time"
                  onChange={handleChange}
                />
                <input
                  type="date"
                  placeholder="Pickup Date"
                  className="form-control mb-3 txt_dg"
                  name="date"
                  onChange={handleChange}
                />
                <label>
                  <b>Pet Details </b>
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Write Here"
                  className="form-control mb-3 "
                ></textarea>

                 <div className="table-responsive mb-3">
                  <table class="table  table-striped ">
                    <thead >
                      <tr className="bg-success-subtle">
                        <th>Owner Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Owner Size Record</th>
                        <th>Pet Name</th>
                        <th>Pet Code</th>
                        <th>Status</th>
                        <th>Species</th>
                        <th>Breed</th>
                        <th>Size</th>
                        <th>Coat</th>
                        <th>Character</th>
                        <th>Sex</th>
                        <th>Color</th>
                        <th>DOB</th>
                        <th>Weight Kg</th>
                        <th>Size record date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {petData?.map((item,index)=>(  
                      <tr key={index}>
                       
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.owner_size_rec}</td>
                        <td>{item.pet_code}</td>
                        <td>{item.pet_code}</td>
                        <td>{item.status_ID}</td>
                        <td>{item.species_id}</td>
                        <td>{item.breed_id}</td>
                        <td>{item.size_id}</td>
                        <td>{item.coat_id}</td>
                        <td>{item.character_id}</td>
                        <td>{item.sex_id}</td>
                        <td>{item.color_id}</td>
                        <td>{item.birth_date}</td>
                        <td>{item.weight}</td>
                        
                        <td>{item.size_record_date}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-center">
                  {" "}
                  <button className="btn btn-success" type="submit">
                    
                      Submit
                   
                  </button>{" "}
                </div>
              </form>
            
          </div>
        </div>
      </div> 
      
    

     



   
    </>
  );
};

export default Appointment_without_login;
