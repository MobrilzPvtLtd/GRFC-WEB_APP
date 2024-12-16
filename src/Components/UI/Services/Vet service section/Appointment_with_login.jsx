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
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Appointment_with_login = () => {
  let token = sessionStorage.getItem("token");
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);
  let id = sessionStorage.getItem("id");
  const [petId, setPetId] = useState("");
  const [pet_data, set_Pet_Data] = useState([]);
  const context = useContext(ValueContext);
  let url = process.env.REACT_APP_BACKEND_BASE_URL;
  const [id_data, setId_Data] = useState();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    pet_details: "",
  });
  // const [id_data, setId_Data] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${url}/user`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });

        context.setUserData([res.data.data]);
        setLoader(false);
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
          pet_id: petId,
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
        setIsConfirmed(true); // Show confirmation page
        toast.success("Appointment Book Successfully");

        navigate("/");
      }

      console.log("Response_of_appnt:", appointment_data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = () => {
    navigate("/");
  };

  const handleCancel = () => {
    setIsConfirmed(false); // Reset to form view
  };
  useEffect(() => {
    if (context.userData) {
      let petsData = context.userData[0]?.pets;
      set_Pet_Data(petsData);

      console.log("Response:", context.userData, "pets ka data", petsData);
    }
  }, [context.userData]);

  const handle_petID = (state) => {
    // console.log('999999999',state)
    setPetId(state);
  };
  return (
    <>
      <div className="container my-4">
        {!isConfirmed ? (
          <div className="row">
            <div
              className="col-md-8  mx-auto rounded-xl"
              style={{
                backgroundColor: "#5badbdfa",
              }}
            >
              <h1 className="text-4xl py-4">Complete el formulario de cita</h1>
              {loader ? (
                <Skeleton />
              ) : (
                context.userData?.map((item, index) => (
                  <form
                    onSubmit={handleSubmitForm}
                    action=""
                    className="p-3"
                    key={index}
                  >
                    <input
                      type="text"
                      placeholder="nombre de usuario"
                      className="form-control mb-3 txt-dg"
                      value={item?.owner_name}
                      // name = "name"
                      // onChange={handleChange}
                      readOnly
                    />
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      className="form-control mb-3 txt_dg"
                      value={item?.email}
                      // name = "email"
                      // onChange={handleChange}
                      readOnly
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="form-control mb-3 txt_dg"
                      value={item?.phone}
                      // name = "phone"
                      // onChange={handleChange}
                      readOnly
                    />
                    <input
                      type="time"
                      placeholder="Hora de recogida"
                      className="form-control mb-3 txt_dg "
                      name="time"
                      onChange={handleChange}
                      required={true}
                    />
                    <input
                      type="date"
                      placeholder="Fecha de recogida"
                      className="form-control mb-3 txt_dg"
                      name="date"
                      onChange={handleChange}
                      required={true}
                    />
                    <label>
                      <b>Detalles de la mascota </b>
                    </label>
                    <textarea
                      name="pet_details"
                      id=""
                      placeholder="Escribe aquí"
                      className="form-control mb-3 "
                      onChange={handleChange}
                      required={true}
                    ></textarea>
                    <div className="table-responsive mb-3">
                      <table class="table  table-striped ">
                        <thead>
                          <tr className="bg-success-subtle">
                            <th>Seleccionar</th>

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
                          {pet_data?.map((item, index) => (
                            <tr key={index}>
                              {/* <td>{item.owner_name}</td>
                          <td>{item.phone}</td>*/}
                              <td>
                                <input
                                  type="checkbox"
                                  onClick={() => handle_petID(item.id)}
                                />
                              </td>
                              <td>{item.name}</td>
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
                              <td>{item.owner_size_rec}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex justify-center">
                      {" "}
                      <button
                        type="submit"
                        onClick={() => handleClickOpen}
                        className="btn btn-success"
                      >
                       Entregar
                      </button>{" "}
                    </div>
                  </form>
                ))
              )}
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

      {/* modal */}

      {/* <Dialog
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
            <form action="">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="">Name</label>
                    <span>{form.name}</span>
                  </div>
                  <div className="col-6">
                    <label htmlFor="">Email</label>
                    <span>{form.email}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="">Phone</label>
                    <span>{form.phone}</span>
                  </div>
                  <div className="col-6">
                    <label htmlFor="">Time</label>
                    <span>{form.time}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="">Date</label>
                    <span>{form.date}</span>
                  </div>
                  <div className="col-6">
                    <label htmlFor="">Pet Details</label>
                    <span>{form.pet_details}</span>
                  </div>
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
      </Dialog> */}
    </>
  );
};

export default Appointment_with_login;
