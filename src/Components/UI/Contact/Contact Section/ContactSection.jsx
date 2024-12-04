import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";


const ContactSection = () => {
  const url = process.env.REACT_APP_BACKEND_BASE_URL;
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    console.log(formData);
    try {
      const Contact_form = await axios.post(
        `${url}/contactus`,
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          description: formData.description,
         
        }
      );

      if (Contact_form.status === 200) {
        toast.success("Submit successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          description: "",
        })
       
      }
    } catch (error) {
      toast.error("Failed: " );
    }
  };
 
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="find-a-dog contact">
              <h2>Find a dog walker or pet care</h2>
              <p>
                Place your trust in We Love Pets, an award-winning dog walking
                and pet care
              </p>
              {/* <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter address or postcode..."
                  value={formData.address}
                  onChange={handleChange}
                />
                <button type="submit" className="button">
                  Find Branch
                </button>
              </form> */}
              <div className="head-office">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-location-dot"></i>
                  <h6>Head Office United State:</h6>
                </div>
                <p>#201 1218 9th Avenue SE, Calgary, AB T2G 0T1</p>
              </div>
              <div className="head-office mb-lg-0">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-location-dot"></i>
                  <h6>Head Office United State:</h6>
                </div>
                <p>#201 1218 9th Avenue SE, Calgary, AB T2G 0T1</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="looking position-relative contact">
              <form className="looking-form" onSubmit={handleSubmit}>
                <h3>Book Your Place or Find out More</h3>
                {/* <ul>
                  <li>
                    <input
                      type="radio"
                      id="f-option"
                      name="petType"
                      value="dog"
                      checked={formData.petType === 'dog'}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="f-option">Dog</label>
                    <div className="check"></div>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="s-option"
                      name="petType"
                      value="cat"
                      checked={formData.petType === 'cat'}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="s-option">Cat</label>
                    <div className="check">
                      <div className="inside"></div>
                    </div>
                  </li>
                </ul> */}
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-12 mt-3">
                    <textarea
                      name="description"
                      placeholder="Write from here............"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
