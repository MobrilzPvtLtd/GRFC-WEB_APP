import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";


const Forgotpassword = () => {
  const [email, setemail] = useState("");
  let url = process.env.REACT_APP_BACKEND_BASE_URL;
  const id = sessionStorage.getItem("id")
  const handleSubmitForm = async(e) => {
    e.preventDefault();
    console.log("object", email);

    try {
        e.preventDefault();
        const appointment_data = await axios.put(
          `${url}/forgot/${id}`,
          {
           email:email
          },
  
         
        );
        if (appointment_data.status == 200) {
          toast.success("Link Send Successfully");
        //   navigate("/");
          setemail(' ')
        }
  
        
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <>
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
      </div>
    </>
  );
};

export default Forgotpassword;
