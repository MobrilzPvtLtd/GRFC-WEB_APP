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
  if (Id_data.owner_id ) {
    fetchPetsData();
  }
}, [Id_data.owner_id]);

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
        <DialogContentText id="success-dialog-description">
            Your appointment has been successfully booked!
             </DialogContentText>
          <DialogContentText id="alert-dialog-description">
           
            <form  >
              <div className="container">
                <div className="row">
                  <div className="col-6"><label htmlFor="">Name</label><span>{form.name}</span></div>
                  <div className="col-6"><label htmlFor="">Email</label><span>{form.email}</span></div>
                </div>
                <div className="row">
                  <div className="col-6"><label htmlFor="">Phone</label><span>{form.phone}</span></div>
                  <div className="col-6"><label htmlFor="">Time</label><span>{form.time}</span></div>
                </div>
                <div className="row">
                  <div className="col-6"><label htmlFor="">Date</label><span>{form.date}</span></div>
                  <div className="col-6"><label htmlFor="">Pet Details</label><span>{form.pet_details}</span></div>
                </div>
              </div>
            </form>
            
            

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
// import React, { useContext, useEffect, useState } from "react";
// import ServiceBreadcrum from "../Service Breadcrum/ServiceBreadcrum";
// import bg from "../../../../images_new/background_2.png";
// import banner_1 from "../../../../images_new/banner-img-1-1.jpg";
// import banner_2 from "../../../../images_new/banner-img-2.jpg";
// import { ValueContext } from "../../../Context/Context_Hook";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Pet_Form from "../../Petform/Pet_Form";
// import { useNavigate } from "react-router-dom";
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// const Appointment_without_login = ({ Id_data }) => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     time: "",
//     date: "",
//     pet_details: "",
//   });
//   const [petData, setPetData] = useState();
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isConfirmed, setIsConfirmed] = useState(false); // Track confirmation status

//   const context = useContext(ValueContext);
//   const navigate = useNavigate();
//   const url = process.env.REACT_APP_BACKEND_BASE_URL;
//   const token = sessionStorage.getItem("token");
//   const id = sessionStorage.getItem("id");

//   // Fetch pet data
//   useEffect(() => {
//     if (id) {
//       const fetchPetsData = async () => {
//         try {
//           const res = await axios.get(`${url}/pets/${Id_data.owner_id}`);
//           setPetData(res.data.data);
//         } catch (error) {
//           console.error("Error fetching pet data:", error);
//         }
//       };
//       fetchPetsData();
//     }
//   }, [id]);

//   // Handle form changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Open the confirmation dialog
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   // Close the confirmation dialog
//   const handleClose = () => {
//     setOpen(false);
//   };

//   // Handle form submission
//   const handleSubmitForm = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     try {
//       const appointment_data = await axios.post(`${url}/apointment`, {
//         appointment_time: form.time,
//         appointment_date: form.date,
//         disease_description: form.pet_details,
//         pet_id: Id_data.pet_id,
//         owner_id: Id_data.owner_id,
//       }, {
//         headers: {
//           "Content-Type": "application/json",
//         }
//       });

//       if (appointment_data.status === 200) {
//         setIsConfirmed(true); // Show confirmation modal
//       } else {
//         toast.error("Failed to book appointment.");
//       }
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       toast.error("Error booking appointment.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="container my-4">
//         <div className="row">
//           <div className="col-md-8 mx-auto rounded-xl" style={{ backgroundColor: "#5badbdfa" }}>
//             <h1 className="text-4xl py-4">Fill out the Appointment Form</h1>
//             <form onSubmit={handleSubmitForm} className="p-3">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="form-control mb-3"
//                 name="name"
//                 onChange={handleChange}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="form-control mb-3"
//                 name="email"
//                 onChange={handleChange}
//               />
//               <input
//                 type="number"
//                 placeholder="Phone"
//                 className="form-control mb-3"
//                 name="phone"
//                 onChange={handleChange}
//               />
//               <input
//                 type="time"
//                 placeholder="Appointment Time"
//                 className="form-control mb-3"
//                 name="time"
//                 onChange={handleChange}
//               />
//               <input
//                 type="date"
//                 placeholder="Appointment Date"
//                 className="form-control mb-3"
//                 name="date"
//                 onChange={handleChange}
//               />
//               <label><b>Pet Details</b></label>
//               <textarea
//                 name="pet_details"
//                 placeholder="Write Here"
//                 className="form-control mb-3"
//                 onChange={handleChange}
//               ></textarea>

//               <div className="table-responsive mb-3">
//                 <table className="table table-striped">
//                   <thead>
//                     <tr className="bg-success-subtle">
//                       <th>Owner Name</th>
//                       <th>Phone</th>
//                       <th>Email</th>
//                       <th>Owner Size Record</th>
//                       <th>Pet Name</th>
//                       <th>Pet Code</th>
//                       <th>Status</th>
//                       <th>Species</th>
//                       <th>Breed</th>
//                       <th>Size</th>
//                       <th>Coat</th>
//                       <th>Character</th>
//                       <th>Sex</th>
//                       <th>Color</th>
//                       <th>DOB</th>
//                       <th>Weight Kg</th>
//                       <th>Size record date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {petData?.map((item, index) => (
//                       <tr key={index}>
//                         <td>{item.name}</td>
//                         <td>{item.phone}</td>
//                         <td>{item.email}</td>
//                         <td>{item.owner_size_rec}</td>
//                         <td>{item.pet_code}</td>
//                         <td>{item.pet_code}</td>
//                         <td>{item.status_ID}</td>
//                         <td>{item.species_id}</td>
//                         <td>{item.breed_id}</td>
//                         <td>{item.size_id}</td>
//                         <td>{item.coat_id}</td>
//                         <td>{item.character_id}</td>
//                         <td>{item.sex_id}</td>
//                         <td>{item.color_id}</td>
//                         <td>{item.birth_date}</td>
//                         <td>{item.weight}</td>
//                         <td>{item.size_record_date}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="flex justify-center">
//                 <button className="btn btn-success" type="submit" disabled={loading}>
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Confirmation Dialog */}
//       <Dialog
//         open={open && !isConfirmed}
//         onClose={handleClose}
//         aria-labelledby="confirm-dialog-title"
//         aria-describedby="confirm-dialog-description"
//       >
//         <DialogTitle id="confirm-dialog-title">Booking Confirm</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="confirm-dialog-description">
//             <div>
//               <div><strong>Name:</strong> {form.name}</div>
//               <div><strong>Email:</strong> {form.email}</div>
//               <div><strong>Phone:</strong> {form.phone}</div>
//               <div><strong>Time:</strong> {form.time}</div>
//               <div><strong>Date:</strong> {form.date}</div>
//               <div><strong>Pet Details:</strong> {form.pet_details}</div>
//             </div>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             onClick={() => {
//               handleSubmitForm();
//               handleClose();
//             }}
//             autoFocus
//           >
//             Confirm Booking
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success Confirmation Dialog */}
//       {isConfirmed && (
//         <Dialog
//           open={true}
//           onClose={() => setIsConfirmed(false)}
//           aria-labelledby="success-dialog-title"
//           aria-describedby="success-dialog-description"
//         >
//           <DialogTitle id="success-dialog-title">Booking Confirmed</DialogTitle>
//           <DialogContent>
//             <DialogContentText id="success-dialog-description">
//               Your appointment has been successfully booked! You will be notified shortly.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setIsConfirmed(false)} autoFocus>
//               OK
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </>
//   );
// };

// export default Appointment_without_login;

