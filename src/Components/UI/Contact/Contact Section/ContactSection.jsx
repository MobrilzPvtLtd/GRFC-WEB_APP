import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
    email: '',
    service: '',
    message: '',
    petType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      petType: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className='mt-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="find-a-dog contact">
              <h2>Find a dog walker or pet care</h2>
              <p>Place your trust in We Love Pets, an award-winning dog walking and pet care</p>
              <form onSubmit={handleSubmit}>
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
              </form>
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
                <ul>
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
                </ul>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Complete Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Complete Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <select
                      className="nice-select Advice"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select Service</option>
                      <option value="service1">Services 1</option>
                      <option value="service2">Services 2</option>
                      <option value="service3">Services 3</option>
                      <option value="service4">Services 4</option>
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Complete Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Please let us know which day package you're interested"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="button">
                  Submit Now
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
