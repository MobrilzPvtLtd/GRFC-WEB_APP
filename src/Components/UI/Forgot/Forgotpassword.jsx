import axios from "axios";
import { MuiOtpInput } from "mui-one-time-password-input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Forgotpassword = () => {
  const [email, setemail] = useState("");
  const [allpage, setALlpage] = useState(0);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  let url = process.env.REACT_APP_BACKEND_BASE_URL;
  const id = sessionStorage.getItem("id")

  const handleSubmitForm = async(e) => {
    console.log("object inside", email);
    e.preventDefault();

    try {
       
        const forget_data = await axios.put(
          `${url}/forget`,
          {
           email:email.toString()
          },
  
         
        );
        if (forget_data.status === 200) {
          toast.success("Link Send Successfully");
          setALlpage(1)
         
        //   navigate("/");
            
        }
  
        
      } catch (error) {
        console.log(error);
      }
  };
  
 const navigate = useNavigate()

  const handleOtp = async () => {
    console.log('222',otp)
    try {
      const OtpValidate = await axios.put(
        `${url}/verifyotp`,
        {
          email:email.toString(),
          otp: otp.toString(),
        },
       
      );
      if (OtpValidate.status===200) {
        toast.success("OTP Verify Successfully");
        setALlpage(2)

        
     
      } else {
        toast.error("Invalid OTP");
       
      }
    } catch (error) {}
  };
  const handleChange = (e) => {

    setOtp((prevOtp) => ({
      ...prevOtp,
     
    }));
  };
  const handleProp = () => {
    // console.log(handleCancel(false));
  };


  const handleConfirmpwd = async(e) => {
    e.preventDefault();
    console.log("object", );

    try {
        e.preventDefault();
        const Confirm_pwd = await axios.put(
          `${url}/resetpassword`,
          {
           email:email.toString(),
           newPassword:password.toString()

          },
  
         
        );
        if (Confirm_pwd.status == 200) {
          toast.success("Password update Successfully");
        
           navigate("/");
          
        }
  
        
      } catch (error) {
        console.log(error);
      }
  };

  console.log('object email ka ',email, password,confirm_password)
  return (
    <>
    {allpage===0?     
      <div className="container  mt-64">
        <div className="row">
          <div
            className="col-md-5  mx-auto rounded-xl shadow-lg"
            style={{
              backgroundColor: "#5badbdfa",
            }}
          >
            <h1 className="text-4xl py-4 text-center">Forget Password</h1>

            <form onSubmit={handleSubmitForm} action="" className="p-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3 txt_dg"
                name="email"
                onChange={(e) =>setemail( e.target.value)}
                value={email}
              />

              <div className="flex justify-center">
                {" "}
                <button className="btn btn-success" type="submit">
                  Send
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>:null
         }
      {
        allpage===1? <div className="d-flex  w-25 flex-column justify-content-center align-items-center py-5 bg-white container shadow rounded mt-48 mb-3 ">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex">
            {" "}
            <h3>OTP Verification</h3>{" "}
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
              onClick={''}
            >
              cancel
            </button>
          </div>
        </div>
      </div>:null
      }

{allpage===2?     
      <div className="container  mt-64">
        <div className="row">
          <div
            className="col-md-5  mx-auto rounded-xl shadow-lg"
            style={{
              backgroundColor: "#5badbdfa",
            }}
          >
            <h1 className="text-4xl py-4 text-center">Reset Password</h1>

            <form onSubmit={handleConfirmpwd} action="" className="p-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3 txt_dg"
                name="newPassword"
                onChange={(e) =>setPassword(e.target.value)}
                value={password}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control mb-3 txt_dg"
                name="confirm_password"
                onChange={(e) =>setConfirm_password(e.target.value)}
                value={confirm_password}
              />
             

              <div className="flex justify-center">
                {" "}
                <button className="btn btn-success" type="submit" disabled={(password===confirm_password) ?false:true}>
                  Submit
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>:null
         }
    </>
  );
};

export default Forgotpassword;
