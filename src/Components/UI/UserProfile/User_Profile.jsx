// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const User_Profile = () => {
//   let token = sessionStorage.getItem("token");
//   let url = process.env.REACT_APP_BACKEND_BASE_URL;
//   let id = sessionStorage.getItem("id");
//   const [userData, setUserData] = useState([]);
//   const [update_form, setUpdate_Form] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     dob: "",
//     identif: "",
//   });
//  const navigate= useNavigate()
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const res = await axios.get(`${url}/user/${id}`, {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         });

//         setUserData(res.data.data);

//         console.log("object", res);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };
//     if (id && token) {
//       fetchUserData();
//     }
//   }, [id, token]);
//   console.log("888888", userData);

//   const handleChange = (e) => {
//     setUpdate_Form({ ...update_form, [e.target.name]: e.target.value });
//   };
//   const handleupdateform = async (e) => {
//     e.preventDefault();
//     console.log("update data", update_form);
//     try {
//       e.preventDefault();
//       const Updated_user = await axios.patch(`${url}/updateuser`, {
//         dob: update_form.dob,
//         identif: update_form.identif,
//         name: update_form.name,
//         address: update_form.address,
//         phone: update_form.phone,
//       });
//       if (Updated_user.status == 200) {
//         toast.success(" Profile Update Successfully");
//         navigate('/userprofile')
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   return (
//     <>
//       <div className="container mt-48  mb-7">
//         <div className="col-md-6 shadow-2xl rounded-xl p-4 mx-auto">
//           <div className="d-flex justify-between">
//             <h1 className="text-4xl py-4">Profile</h1>
//             <div>
//               {" "}
//               <button
//                 className="bg-green-500 justify-end p-3 rounded-xl text-white "
//                 data-bs-toggle="modal"
//                 data-bs-target="#exampleModal"
//               >
//                 Edit
//               </button>
//             </div>
//           </div>{" "}
//           <div className="row ">
//             <div className="col-6">
//               <label>
//                 <b>Name -</b>{" "}
//               </label>{" "}
//               <span>{userData?.name}</span>
//             </div>
//             <div className="col-6">
//               <label>
//                 <b>Address -</b>{" "}
//               </label>{" "}
//               <span>{userData?.address}</span>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-6">
//               <label>
//                 <b>Mobile -</b>
//               </label>{" "}
//               <span>{userData?.phone}</span>
//             </div>
//             <div className="col-6">
//               <label>
//                 <b>Date of Birth -</b>
//               </label>{" "}
//               <span>{userData?.dob}</span>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-6">
//               <label>
//                 <b>identif -</b>
//               </label>{" "}
//               <span>{userData?.identif}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* modal  */}

//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-dialog-centered">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">
//                 Edit Now
//               </h1>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div
//               class="modal-body "
//               style={{
//                 backgroundColor: "#5badbdfa",
//               }}
//             >
//               <form onSubmit={handleupdateform}>
//                 <input
//                   type="text"
//                   placeholder="username"
//                   className="form-control mb-3 txt-dg"
//                   value={userData?.name}
//                   name="name"
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   className="form-control mb-3 "
//                   value={userData?.address}
//                   name="address"
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Phone"
//                   className="form-control mb-3 "
//                   value={userData?.phone}
//                   name="phone"
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="identify"
//                   className="form-control mb-3  "
//                   value={userData?.identif}
//                   name="identif"
//                   onChange={handleChange}
//                   required={true}
//                 />
//                 <input
//                   type="date"
//                   placeholder="DOB"
//                   className="form-control mb-3 "
//                   value={userData?.dob}
//                   name="dob"
//                   onChange={handleChange}
//                   required={true}
//                 />

//                 <div class="modal-footer">
//                   <button
//                     class="bg-gray-500 p-3 rounded-lg text-lg text-white"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                   <button
//                     type="submit"
//                     class="bg-green-500 p-3 rounded-lg text-lg text-white"
//                   >
//                     Update
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default User_Profile;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const User_Profile = () => {
  const token = sessionStorage.getItem("token");
  const url = process.env.REACT_APP_BACKEND_BASE_URL;
  const id = sessionStorage.getItem("id");

  const [userData, setUserData] = useState(null);
  const [update_form, setUpdate_Form] = useState({
    name: "",
    address: "",
    phone: "",
    dob: "",
    identif: "",
  });

  // Fetch user data on component load
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${url}/user/${id}`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        setUserData(res.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data.");
      }
    };

    if (id && token) {
      fetchUserData();
    }
  }, [id, token]);

  // Handle input changes in the form
  const handleChange = (e) => {
    setUpdate_Form({ ...update_form, [e.target.name]: e.target.value });
  };

  // Populate the update form with current data on modal open
  const handleEditClick = () => {
    if (userData) {
      setUpdate_Form({
        name: userData.owner_name,
        address: userData.address,
        phone: userData.phone,
        dob: userData.dob,
        identif: userData.identif,
      });
    }
  };

  // Handle profile update submission
  const handleUpdateForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${url}/updateuser`,
        {
          dob: update_form.dob,
          identif: update_form.identif,
          name: update_form.name,
          address: update_form.address,
          phone: update_form.phone,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Profile updated successfully!");

        // Update userData with the new values
        setUserData((prev) => ({
          ...prev,
          owner_name: update_form.name,
          address: update_form.address,
          phone: update_form.phone,
          dob: update_form.dob,
          identif: update_form.identif,
        }));

        // Close the modal programmatically
        document.getElementById("modalCloseButton").click();
      }
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    }
  };

  return (
    <>
      <div className="container mt-48 mb-7">
        <div className="col-md-6 shadow-2xl rounded-xl p-4 mx-auto">
          <div className="d-flex justify-between">
            <h1 className="text-4xl py-4">Profile</h1>
            <button
              className="bg-green-500 justify-end p-3 rounded-xl text-white"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
          <div className="row">
            <div className="col-6">
              <label>
                <b>Name -</b>{" "}
              </label>
              <span>{userData?.owner_name}</span>
            </div>
            <div className="col-6">
              <label>
                <b>Address -</b>{" "}
              </label>
              <span>{userData?.address}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>
                <b>Mobile -</b>
              </label>
              <span>{userData?.phone}</span>
            </div>
            <div className="col-6">
              <label>
                <b>Date of Birth -</b>
              </label>
              <span>{userData?.dob}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>
                <b>Identif -</b>
              </label>
              <span>{userData?.identif}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                id="modalCloseButton"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{ backgroundColor: "#5badbdfa" }}
            >
              <form onSubmit={handleUpdateForm}>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control mb-3"
                  value={update_form.name}
                  name="name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control mb-3"
                  value={update_form.address}
                  name="address"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control mb-3"
                  value={update_form.phone}
                  name="phone"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Identifier"
                  className="form-control mb-3"
                  value={update_form.identif}
                  name="identif"
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="form-control mb-3"
                  value={update_form.dob}
                  name="dob"
                  onChange={handleChange}
                  required
                />
                <div className="modal-footer">
                  <button
                    type="button"
                    className="bg-gray-500 p-3 rounded-lg text-lg text-white"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 p-3 rounded-lg text-lg text-white"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_Profile;


