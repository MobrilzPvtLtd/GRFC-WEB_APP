import axios from "axios";
import React, { useEffect, useState } from "react";


const User_Profile = () => {
    let token = sessionStorage.getItem("token");
    let url = process.env.REACT_APP_BACKEND_BASE_URL;
    let id = sessionStorage.getItem("id");
  const [userData, setUserData] = useState();


    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const res = await axios.get(`${url}/user/${id}`, {
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            });
    
            setUserData([res.data.data]);
           
            console.log("object", res, );
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
        if (id && token) {
          fetchUserData();
        }
      }, [id, token]);
      console.log('888888',userData)
  return (
    <>
      <div className="container mt-48  mb-7">
        <div className="col-md-6 shadow-2xl rounded-xl p-4 mx-auto">
          <div className="d-flex justify-between">
            <h1 className="text-4xl py-4">Profile</h1>
            <div>
              {" "}
              <button
                className="bg-green-500 justify-end p-3 rounded-xl text-white "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit
              </button>
            </div>
          </div>{" "}
          <div className="row ">
            <div className="col-6">
              <label>
                <b>Name -</b>{" "}
              </label>{" "}
              <span>Noida</span>
            </div>
            <div className="col-6">
              <label>
                <b>Address -</b>{" "}
              </label>{" "}
              <span>Noida GN</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>
                <b>Mobile -</b>
              </label>{" "}
              <span>987654321</span>
            </div>
            <div className="col-6">
              <label>
                <b>Date of Birth -</b>
              </label>{" "}
              <span>1/12/2023</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>
                <b>identif -</b>
              </label>{" "}
              <span>jiii</span>
            </div>
          </div>
        </div>
      </div>

      {/* modal  */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Now
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body "  style={{
              backgroundColor: "#5badbdfa",
            }}>
              <form action="">
                <input
                  type="text"
                  placeholder="username"
                  className="form-control mb-3 txt-dg"
                  value={""}
                  name="name"
                  // onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control mb-3 "
                  value={""}
                  name="email"
                  // onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control mb-3 "
                  value={""}
                  name="phone"
                  // onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="identify"
                  className="form-control mb-3  "
                  name="time"
                  // onChange={handleChange}
                  required={true}
                />
                <input
                  type="date"
                  placeholder="DOB"
                  className="form-control mb-3 "
                  name="date"
                  // onChange={handleChange}
                  required={true}
                />
              </form>
            
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="bg-gray-500 p-3 rounded-lg text-lg text-white"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="bg-green-500 p-3 rounded-lg text-lg text-white"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_Profile;
