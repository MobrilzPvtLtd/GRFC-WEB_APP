import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Otp = ({ handleCancel, email }) => {
  const [otp, setOtp] = useState();
  let url = "https://grfc.mobrilz.digital/api";
  let token = localStorage.getItem("authToken");
  let navigate = useNavigate();
  console.log("token aa raha hai ki nhi", token);
  const handleChange = (newValue) => {
    newValue.preventDefault();
    setOtp((prevotp) => ({
      ...prevotp,
      [newValue.target.name]: newValue.target.value,
    }));
    // setOtp(newValue);
  };
  const handleOtp = async () => {
    try {
      
    
    const OtpValidate = await axios.put(
      `${url}/verify`,
      {
        otp: otp,
      },
      {
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        },
      }
    );
    if (OtpValidate==200){
      navigate("/");
    } else {
      alert("Invalid OTP");
    }
  } catch (error) {
      
  }
  };

  const handleProp = () => {
    console.log(handleCancel(false));
  };
  return (
    <div className="d-flex w-25 flex-column justify-content-center align-items-center py-5 bg-white container shadow rounded my-4 ">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex">
          {" "}
          <h2>OTP Verification</h2>{" "}
        </div>
        <p className="text-center">
          we will send you an one time password
          <br /> on this <b>{email}</b>
        </p>
        <div className="" style={{ width: "90%", height: "15%" }}>
          <MuiOtpInput value={otp} onChange={handleChange} />
        </div>
        <div className="d-flex gap-2">
          <button
            onClick={handleOtp}
            type="submit"
            className="my-4 py-3 px-5 rounded-5 primary-color-bg $white text-white font-semibold transition-transform hover:scale-105"
          >
            Submit
          </button>
          <button
            type="button"
            className="my-4 py-3 px-5 rounded-5 danger-color-bg $white"
            onClick={handleProp}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Otp;
