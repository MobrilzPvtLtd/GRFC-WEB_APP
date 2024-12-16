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

// const Appointment_without_login = ({Id_data}) => {
//   let token = sessionStorage.getItem("token");
//   const [userData, setUserData] = useState();
//   const [petData, setPetData] = useState();
//   let id = sessionStorage.getItem("id");
//   const context = useContext(ValueContext);
//   let url = process.env.REACT_APP_BACKEND_BASE_URL;

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     time: "",
//     date: "",
//     pet_details: "",

//   });

//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   // const[id_data,setId_Data] =useState()
//  console.log('id ka data ',Id_data)
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

// const navigate =useNavigate();

// useEffect(() => {
//   const fetchPetsData = async () => {
//     try {
//       const res = await axios.get(`${url}/pets/${Id_data.owner_id}`, {

//       });

//       setPetData(res.data.data);
//       // setLoader(false)

//       console.log("object", petData);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };
//   if (Id_data.owner_id ) {
//     fetchPetsData();
//   }
// }, [Id_data.owner_id]);

//   const handleSubmitForm = async(e) => {

//     console.log("form submitted", form);

//     try {
//       e.preventDefault();
//       const appointment_data = await axios.post(`${url}/apointment`,
//         {

//         appointment_time: form.time,
//         appointment_date: form.date,
//         disease_description: form.pet_details,
//         pet_id:Id_data.pet_id,
//         owner_id:Id_data.owner_id,
//       } ,

//       { headers: {
//         // Authorization: token,
//         "Content-Type": "application/json",
//       }
//     }
//      );
//      if (appointment_data.status == 200) {

//         toast.success('Appointment Book Successfully');
//         navigate('/')

//      }

//       console.log("Response_of_appnt:", appointment_data);

//     } catch (error) {
//       console.log(error)
//     }

//   };
//    console.log("Response:",form ,);

//   return (
//     <>

//       <div className="container my-4">
//         <div className="row">
//           <div
//             className="col-md-8  mx-auto rounded-xl"
//             style={{
//               backgroundColor: "#5badbdfa",
//             }}
//           >

//             <h1 className="text-4xl py-4">Fill out the Appointment Form</h1>

//               <form onSubmit={handleSubmitForm} action="" className="p-3">
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   className="form-control mb-3 txt-dg"
//                  name = "name"
//                  onChange={handleChange}

//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="form-control mb-3 txt_dg"
//                    name = "email"
//                       onChange={handleChange}
//                       />

//                 <input
//                   type="number"
//                   placeholder="Phone"
//                   className="form-control mb-3 txt_dg"
//                    name = "phone"
//                       onChange={handleChange}

//                 />
//                 <input
//                   type="time"
//                   placeholder="Pickup Time"
//                   className="form-control mb-3 txt_dg"
//                   name="time"
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="date"
//                   placeholder="Pickup Date"
//                   className="form-control mb-3 txt_dg"
//                   name="date"
//                   onChange={handleChange}
//                 />
//                 <label>
//                   <b>Pet Details </b>
//                 </label>
//                 <textarea
//                   name=""
//                   id=""
//                   placeholder="Write Here"
//                   className="form-control mb-3 "
//                 ></textarea>

//                  <div className="table-responsive mb-3">
//                   <table class="table  table-striped ">
//                     <thead >
//                       <tr className="bg-success-subtle">
//                         <th>Owner Name</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Owner Size Record</th>
//                         <th>Pet Name</th>
//                         <th>Pet Code</th>
//                         <th>Status</th>
//                         <th>Species</th>
//                         <th>Breed</th>
//                         <th>Size</th>
//                         <th>Coat</th>
//                         <th>Character</th>
//                         <th>Sex</th>
//                         <th>Color</th>
//                         <th>DOB</th>
//                         <th>Weight Kg</th>
//                         <th>Size record date</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {petData?.map((item,index)=>(
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
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="flex justify-center">
//                   {" "}
//                   <button className="btn btn-success" type="submit">

//                       Submit

//                   </button>{" "}
//                 </div>
//               </form>

//           </div>
//         </div>
//       </div>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"

//       >
//         <DialogTitle id="alert-dialog-title">

//           <span className="text-center text-6xl">Booking Confirm</span>
//         </DialogTitle>
//         <DialogContent>
//         <DialogContentText id="success-dialog-description">
//             Your appointment has been successfully booked!
//              </DialogContentText>
//           <DialogContentText id="alert-dialog-description">

//             <form  >
//               <div className="container">
//                 <div className="row">
//                   <div className="col-6"><label htmlFor="">Name</label><span>{form.name}</span></div>
//                   <div className="col-6"><label htmlFor="">Email</label><span>{form.email}</span></div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6"><label htmlFor="">Phone</label><span>{form.phone}</span></div>
//                   <div className="col-6"><label htmlFor="">Time</label><span>{form.time}</span></div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6"><label htmlFor="">Date</label><span>{form.date}</span></div>
//                   <div className="col-6"><label htmlFor="">Pet Details</label><span>{form.pet_details}</span></div>
//                 </div>
//               </div>
//             </form>

//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Canel</Button>
//           <Button onClick={handleClose} autoFocus>
//             Done
//           </Button>
//         </DialogActions>
//       </Dialog>

//     </>
//   );
// };

// export default Appointment_without_login;

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ValueContext } from "../../../Context/Context_Hook";

const Appointment_without_login = ({ Id_data }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    pet_details: "",
  });
  const Pet_data = JSON.parse(sessionStorage.getItem("Pet_data"));
  const [petData, setPetData] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [pet_id, setPet_ID]= useState('')
  const context = useContext(ValueContext);
  const url = process.env.REACT_APP_BACKEND_BASE_URL;

 console.log('pet-----------data',Pet_data)
  // Fetch pet data based on owner_id
  // useEffect(() => {
  //   const fetchPetsData = async () => {
  //     try {
  //       const res = await axios.get(`${url}/pets`);
  //       setPetData(res.data.data);
  //     } catch (error) {
  //       console.error("Error fetching pet data:", error);
  //     }
  //   };

    
  //     fetchPetsData();
    
  // }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const appointment_data = await axios.post(
        `${url}/apointment`,
        {
          appointment_time: form.time,
          appointment_date: form.date,
          disease_description: form.pet_details,
          pet_id:Id_data.pet_id,
          owner_id: Id_data.owner_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (appointment_data.status === 200) {
        setIsConfirmed(true); // Show confirmation page
        toast.success("Appointment booked successfully!");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const handleConfirm = () => {
    // After confirmation, navigate to home page
    navigate("/");
  };

  const handleCancel = () => {
    setIsConfirmed(false); // Reset to form view
  };

  return (
    <div className="container my-4">
      {!isConfirmed ? (
        // Appointment Form
        <div className="row">
          <div
            className="col-md-8 mx-auto rounded-xl"
            style={{
              backgroundColor: "#5badbdfa",
            }}
          >
            <h1 className="text-4xl py-4">Complete el formulario de cita</h1>
            <form onSubmit={handleSubmitForm} className="p-3">
              <input
                type="text"
                placeholder="Nombre de usuario"
                className="form-control mb-3 txt-dg"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="form-control mb-3 txt-dg"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="form-control mb-3 txt-dg"
                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                onChange={handleChange}
                value={form.phone}
              />
              <input
                type="time"
                className="form-control mb-3 txt-dg"
                name="time"
                onChange={handleChange}
                value={form.time}
              />
              <input
                type="date"
                className="form-control mb-3 txt-dg"
                name="date"
                onChange={handleChange}
                value={form.date}
              />
              <label>
                <b>Detalles de la mascota</b>
              </label>
              <textarea
                placeholder="Escribe aquí"
                className="form-control mb-3"
                name="pet_details"
                onChange={handleChange}
                value={form.pet_details}
              ></textarea>

              <div className="table-responsive mb-3">
                <table class="table text-center table-striped ">
                  <thead>
                    <tr className="bg-success-subtle">
                     
                     
                    <th>Nombre de la Mascota</th>
                            <th>Código de la Mascota</th>
                            <th>Estado</th>
                            <th>Especie</th>
                            <th>Raza</th>
                            <th>Tamaño</th>
                            <th>Pelo</th>
                            <th>Carácter</th>
                            <th>Sexo</th>
                            <th>Color</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Peso Kg</th>
                            <th>Fecha de Registro de Tamaño</th>
                            <th>Tamaño Registrado por el Propietario</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    <td>{Pet_data.name}</td>
                    <td>{Pet_data.petCode}</td>
                    <td>{Pet_data.status}</td>
                    <td>{Pet_data.species}</td>
                    <td>{Pet_data.breeds}</td>
                    <td>{Pet_data.size}</td>
                    <td>{Pet_data.coat}</td>
                    <td>{Pet_data.character}</td>
                    <td>{Pet_data.sex}</td>
                    <td>{Pet_data.color}</td>
                    <td>{Pet_data.dob}</td>
                    <td>{Pet_data.weight}</td>
                    <td>{Pet_data.size_record_data}</td>
                    <td>{Pet_data.ownerSizeRecrd}</td>
                  {/* {Pet_data.map((item,index)=>( 
                      <tr key={ index}>
                      
                        
                        <td>{item?.owner_size_rec}</td>
                        <td>{item?.pet_code}</td>
                       
                        <td>{item?.status_ID}</td>
                        <td>{item?.species_id}</td>
                        <td>{item?.breed_id}</td>
                        <td>{item?.size_id}</td>
                        <td>{item?.coat_id}</td>
                        <td>{item?.character_id}</td>
                        <td>{item?.sex_id}</td>
                        <td>{item?.color_id}</td>
                        <td>{item?.birth_date}</td>
                        <td>{item?.weight}</td>

                        <td>{item?.size_record_date}</td>
                      </tr>
                      ))} */}
                    
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center">
                <button className="btn btn-success" type="submit">
                Entregar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // Confirmation Page
        <div className="confirmation-container">
          <h1 className="text-4xl py-4">Reserva confirmada</h1>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <label>Nombre:</label> <span>{form.name}</span>
              </div>
              <div className="col-6">
                <label>Correo electrónico:</label> <span>{form.email}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Teléfono:</label> <span>{form.phone}</span>
              </div>
              <div className="col-6">
                <label>Tiempo:</label> <span>{form.time}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Fecha:</label> <span>{form.date}</span>
              </div>
              <div className="col-6">
                <label>Detalles de la mascota:</label> <span>{form.pet_details}</span>
              </div>
            </div>
          </div>

          <div className="confirmation-buttons">
            <button className="btn btn-danger mx-2" onClick={handleCancel}>
            Cancelar
            </button>
            <button className="btn btn-success" onClick={handleConfirm}>
            Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment_without_login;
