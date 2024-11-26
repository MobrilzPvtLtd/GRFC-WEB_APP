import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

const Otp = ({ handleCancel, email }) => {
  const [otp, setOtp] = useState("");
  const [value, setValue] = useState();
  let url = process.env.REACT_APP_BACKEND_BASE_URL;
  let token = sessionStorage.getItem("authToken");

  let navigate = useNavigate();
  // console.log("token aa raha hai ki nhi", token);
  const handleChange = (e) => {
    e.preventDefault();
    setOtp((prevOtp) => ({
      ...prevOtp,
      // Update the otp with the new value
      [e.target.name]: e.targe.value,
    }));
  };
  console.log("otp ki value", otp);

  const handleOtp = async () => {
    try {
      const OtpValidate = await axios.put(
        `${url}/verify`,
        {
          otp: otp,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (OtpValidate.data.success) {
        setValue(1);

        // navigate("/");
        window.location.href = OtpValidate.data.payment_link;
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {}
  };

  const handleProp = () => {
    console.log(handleCancel(false));
  };

  return (
    <>
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
            <MuiOtpInput value={otp} onChange={setOtp} />
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
    </>
  );
};
export default Otp;
