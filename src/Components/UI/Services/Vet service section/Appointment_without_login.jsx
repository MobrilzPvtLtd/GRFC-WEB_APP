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
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


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

  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
        
          <span className="text-center text-6xl">Booking Confirm</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {Object.values(form)?.map((item,index)=>(    
            <form action="" key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-6"><label htmlFor="">Name</label><span>{item.name}</span></div>
                  <div className="col-6"><label htmlFor="">Email</label><span>{item.email}</span></div>
                </div>
                <div className="row">
                  <div className="col-6"><label htmlFor="">Phone</label><span>{item.phone}</span></div>
                  <div className="col-6"><label htmlFor="">Time</label><span>{item.time}</span></div>
                </div>
                <div className="row">
                  <div className="col-6"><label htmlFor="">Date</label><span>{item.date}</span></div>
                  <div className="col-6"><label htmlFor="">Pet Details</label><span>{item.pet_details}</span></div>
                </div>
              </div>
            </form>))}
            
            

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Canel</Button>
          <Button onClick={handleClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>

     



   
    </>
  );
};

export default Appointment_without_login;
