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
              <h1 className="text-4xl py-4 text-center">Pet Form</h1>
              <form onSubmit={handlePetform} className="p-3">
                <input
                  type="text"
                  placeholder="Pet Name"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Pet Code"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="petCode"
                />
                <input
                  type="text"
                  placeholder="Owner Name"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="owner_name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="email"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="phone"
                />
                <input
                  type="text"
                  placeholder="Status"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="status"
                />
                <input
                  type="number"
                  placeholder="Weight"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="weight"
                />
                <input
                  type="text"
                  placeholder="Species"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="species"
                />
                <input
                  type="text"
                  placeholder="Breeds"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="breeds"
                />
                <input
                  type="text"
                  placeholder="Size"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="size"
                />
                <input
                  type="text"
                  placeholder="Character"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="character"
                />
                <input
                  type="text"
                  placeholder="Sex"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="sex"
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
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
                  placeholder="Size Record Data"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required={true}
                  name="size_record_data"
                />
                <input
                  type="text"
                  placeholder="Owner Size Record"
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
