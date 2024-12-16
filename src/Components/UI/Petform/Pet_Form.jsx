import React, { useState } from "react";
import axios from "axios";
import Appointment_without_login from "../Services/Vet service section/Appointment_without_login";
import { toast } from "react-toastify";
import { changeLanguage } from "i18next";

const Pet_Form = () => {
  const [petdata, setPetdata] = useState({
    // owner_id: "",
    name: "",
    petCode: "",
    owner_name: "",
    phone: "",
    email: "",
    status: "",
    weight: "",
    species: "",
    coat:"",
    breeds: "",
    size: "",
    character: "",
    sex: "",
    dob: "",
    color: "",
    size_record_data: "",
    ownerSizeRecrd: "",
  });
let token  = sessionStorage.getItem("token")
  const [petimage, setPetimage] = useState(null);
  const [petcount, setPetCount] = useState(false);
  const [ID_data, setID_data] = useState();

  const [imagePreview, setImagePreview] = useState(null);

  const url = process.env.REACT_APP_BACKEND_BASE_URL;

  const handleChange = (e) => {
    setPetdata({ ...petdata, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      setPetimage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePetform = async (e) => {
    e.preventDefault();

    const formData = {};
    Object.keys(petdata).forEach((key) => {
      formData[key] = petdata[key];
    });

    if (petimage) {
      // formData.append("file", petimage);
    }
    sessionStorage.setItem("Pet_data", JSON.stringify(formData));
    try {
      const response = await axios.post(`${url}/pets`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        const Id_data= response.data.data
        setID_data(Id_data)
        if (!token) {
          setPetCount(true);
        }
        
        toast.success("Pet Data Filled Successfully");
        
      }
    } catch (error) {
      console.error(
        "Error submitting the form:",
        error.response || error.message
      );
      alert("An error occurred while creating the pet.");
    }
  };
  
console.log('2222222222222',ID_data)
  return (
    <>
      {petcount ? (
        <Appointment_without_login Id_data={ID_data}  />
      ) : (
        <div className="container mt-4">
          <div className="row">
            <div
              className="col-md-8 mx-auto rounded-xl"
              style={{
                backgroundColor: "#5badbdfa",
              }}
            >
              <h1 className="text-4xl py-4 text-center">Forma de mascota</h1>
              <form onSubmit={handlePetform} className="p-3">
                <input
                  type="text"
                  placeholder="Nombre de mascota"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Código de mascota"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="petCode"
                />
                <input
                  type="text"
                  placeholder="Nombre del propietario"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="owner_name"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="email"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="phone"
                />
                <input
                  type="text"
                  placeholder="Estado"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="status"
                />
                <input
                  type="number"
                  placeholder="Peso"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="weight"
                />
                <input
                  type="text"
                  placeholder="Especies"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="species"
                />
                <input
                  type="text"
                  placeholder="Abrigo"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="coat"
                />
                <input
                  type="text"
                  placeholder="Razas"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="breeds"
                />
                <input
                  type="text"
                  placeholder="Tamaño"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="size"
                />
                <input
                  type="text"
                  placeholder="Personaje"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="character"
                />
                <input
                  type="text"
                  placeholder="Sexo"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="sex"
                />
                <input
                  type="date"
                  placeholder="Fecha de nacimiento"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="dob"
                />
                <input
                  type="text"
                  placeholder="Color"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="color"
                />
                <input
                  type="text"
                  placeholder="Datos de registro de tamaño"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="size_record_data"
                />
                <input
                  type="text"
                  placeholder="Registro de tamaño del propietario"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="ownerSizeRecrd"
                />
                {/* <input
                  type="file"
                  accept="image/*"
                  className="form-control mb-3"
                  onChange={handleImage}
                  name="files"
                /> */}
                <button className="btn btn-success" type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pet_Form;
