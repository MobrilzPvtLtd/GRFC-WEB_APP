import React, { useContext, useEffect, useState } from "react";
import ServiceBreadcrum from "../Service Breadcrum/ServiceBreadcrum";
import bg from "../../../../images_new/background_2.png";
import banner_1 from "../../../../images_new/banner-img-1-1.jpg";
import banner_2 from "../../../../images_new/banner-img-2.jpg";
import { ValueContext } from "../../../Context/Context_Hook";
import axios from "axios";

const Prescription_Form = () => {
  let token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);
  let id = localStorage.getItem("id");
  const context = useContext(ValueContext);
  let url = process.env.REACT_APP_BACKEND_BASE_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    pet_details: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
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
        setForm((prevForm) => ({
          ...prevForm,
          name: res.data.data[0].name,
          email: res.data.data[0].email,
          phone: res.data.data[0].phone,
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("form submitted", form);
  };

  return (
    <>
      <section
        className="banner"
        style={{ backgroundColor: "#fff", backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h2 className="text-6xl font-bold">Appointment Form</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img">
                <div className="banner-img-1">
                  <svg
                    width="260"
                    height="260"
                    viewBox="0 0 673 673"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                      fill="#fa441d"
                    ></path>
                  </svg>
                  <img src={banner_1} alt="banner" />
                </div>
                <div className="banner-img-2">
                  <svg
                    width="320"
                    height="320"
                    viewBox="0 0 673 673"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                      fill="#fa441d"
                    ></path>
                  </svg>
                  <img src={banner_2} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-4">
        <div className="row">
          <div
            className="col-md-8  mx-auto rounded-xl"
            style={{
              backgroundColor: "#5badbdfa",
            }}
          >
            <h1 className="text-4xl py-4">Fill out the Appointment Form</h1>
            {token ? (
              <div>
                {userData?.map((item, index) => (
                  <form
                    onSubmit={handleSubmitForm}
                    action=""
                    className="p-3"
                    key={index}
                  >
                    <input
                      type="text"
                      placeholder="username"
                      className="form-control mb-3 txt-dg"
                      value={item?.name}
                      // name = "name"
                      // onChange={handleChange}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control mb-3 txt_dg"
                      value={item?.email}
                      // name = "email"
                      // onChange={handleChange}
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      className="form-control mb-3 txt_dg"
                      value={item?.phone}
                      // name = "phone"
                      // onChange={handleChange}
                    />
                    <input
                      type="time"
                      placeholder="Pickup Time"
                      className="form-control mb-3 txt_dg "
                      name="time"
                      onChange={handleChange}
                    />
                    <input
                      type="date"
                      placeholder="Pickup Date"
                      className="form-control mb-3 txt_dg"
                      name="date"
                      onChange={handleChange}
                    />
                    <label>
                      <b>Pet Details </b>
                    </label>
                    <textarea
                      name="pet_details"
                      id=""
                      placeholder="Write Here"
                      className="form-control mb-3 "
                      onChange={handleChange}
                    ></textarea>

                    {/* <div className="flex justify-between mt-4">
                  <div>
                    {" "}
                    <b>Pet Details </b>
                  </div>{" "}
                  <div>
                    {" "}
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      type="button"
                      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Add Pets
                    </button>
                  </div>
                </div> */}
                    {/* <table class="table-responsive w-100 mx-auto" >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table> */}

                    <div className="flex justify-center">
                      {" "}
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>{" "}
                    </div>
                  </form>
                ))}
              </div>
            ) : (
              <form action="" className="p-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control mb-3 txt-dg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="time"
                  placeholder="Pickup Time"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="date"
                  placeholder="Pickup Date"
                  className="form-control mb-3 txt_dg"
                />
                <label>
                  <b>Pet Details </b>
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Write Here"
                  className="form-control mb-3 "
                ></textarea>

                <div className="flex justify-center">
                  {" "}
                  <button className="btn btn-success">
                    <a href="#" className="text-white">
                      Submit{" "}
                    </a>
                  </button>{" "}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Modal   */}

      {/* <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Pet Form
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="modal-body"
              style={{
                backgroundColor: "#5badbdfa",
              }}
            >
              <form action="" className="p-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-3 txt-dg"
                />
                <input
                  type="file"
                  placeholder="Photo"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="text"
                  placeholder="Species"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="text"
                  placeholder="Breeds"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="text"
                  placeholder="Sizes"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="text"
                  placeholder="Character"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="text"
                  placeholder="Sex"
                  className="form-control mb-3 txt_dg"
                />
                <input
                  type="text"
                  placeholder="Color"
                  className="form-control mb-3 txt_dg"
                />
                <button className="btn btn-success">
                  <a href="#" className="text-white">
                    Submit{" "}
                  </a>
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Prescription_Form;
