import React, { useContext, useEffect, useState } from "react";
import ServiceBreadcrum from "../Service Breadcrum/ServiceBreadcrum";
import bg from "../../../../images_new/background_2.png";
import banner_1 from "../../../../images_new/banner-img-1-1.jpg";
import banner_2 from "../../../../images_new/banner-img-2.jpg";
import { ValueContext } from "../../../Context/Context_Hook";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";

const Appointment_with_login = () => {
  let token = sessionStorage.getItem("token");
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(true);
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
  const [id_data, setId_Data] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${url}/user/${id}`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });

        setUserData([res.data.data]);
        setLoader(false)
        setForm((prevForm) => ({
          ...prevForm,
          name: res.data.data.name,
          email: res.data.data.email,
          phone: res.data.data.phone,
        }));

        setId_Data({
          id: res.data.data.id,
          owner_id: res.data.data.owner_id,
        });

        console.log("object", res, form);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (id && token) {
      fetchUserData();
    }
  }, [id, token]);
  const handleSubmitForm = async (e) => {
    console.log("form submitted", form);

    try {
      e.preventDefault();
      const appointment_data = await axios.post(
        `${url}/apointment`,
        {
          appointment_time: form.time,
          appointment_date: form.date,
          disease_description: form.pet_details,
          pet_id: id_data.id,
          owner_id: id_data.owner_id,
        },

        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (appointment_data.status == 200) {
        toast.success("Appointment Book Successfully");
        navigate("/");
      }

      console.log("Response_of_appnt:", appointment_data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("Response:", userData, "dfghj id ka data", id_data);

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div
            className="col-md-8  mx-auto rounded-xl"
            style={{
              backgroundColor: "#5badbdfa",
            }}
          >
            <h1 className="text-4xl py-4">Fill out the Appointment Form</h1>
            {loader ? <Skeleton/>: userData?.map((item, index) => (
              <form
                onSubmit={handleSubmitForm}
                action=""
                className="p-3"
                key={index}
              >
                <input
                  type="text"
                  placeholder="username"
                  className="form-control mb-3 txt-dg"
                  value={item?.name}
                  // name = "name"
                  // onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3 txt_dg"
                  value={item?.email}
                  // name = "email"
                  // onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control mb-3 txt_dg"
                  value={item?.phone}
                  // name = "phone"
                  // onChange={handleChange}
                />
                <input
                  type="time"
                  placeholder="Pickup Time"
                  className="form-control mb-3 txt_dg "
                  name="time"
                  onChange={handleChange}
                  required={true}
                />
                <input
                  type="date"
                  placeholder="Pickup Date"
                  className="form-control mb-3 txt_dg"
                  name="date"
                  onChange={handleChange}
                  required={true}
                />
                <label>
                  <b>Pet Details </b>
                </label>
                <textarea
                  name="pet_details"
                  id=""
                  placeholder="Write Here"
                  className="form-control mb-3 "
                  onChange={handleChange}
                  required={true}
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
                      <tr>
                       
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
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center">
                  {" "}
                  <button type="submit" className="btn btn-success" >
                    Submit
                  </button>{" "}
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>

      {/* modal */}
    
    
       

     
     


    </>
  );
};

export default Appointment_with_login;
