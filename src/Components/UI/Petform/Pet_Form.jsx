import React, { useState } from 'react';
import bg from "../../../images_new/background_2.png"
import banner_1 from "../../../images_new/banner-img-1-1.jpg"
import banner_2 from "../../../images_new/banner-img-2.jpg"

const Pet_Form = () => {
  const [petdata,setPetdata] = useState()
  const handleChange = (e) => {
    setPetdata({ ...petdata, [e.target.name]: e.target.value });
  };

  const handlePetform = (e)=>{
        e.preventDefault()
        console.log('344567',petdata)
  }
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
            <h2 className="text-6xl font-bold">Pet Form</h2>
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

    <div className='container mt-4'>
        <div className="row">
            
            <div
            className="col-md-8  mx-auto rounded-xl"
            style={{
              backgroundColor: "#5badbdfa",
            }}
          >
           
            <h1 className="text-4xl py-4 text-center">Pet Form</h1>
            <form onSubmit={handlePetform} action="" className="p-3">
              <input
                type="text"
                placeholder="OnwerID"
                className="form-control mb-3 txt-dg"
                onChange={handleChange}
                name='ownerId'
              />
              
              <input
                type="text"
                placeholder="Pet Name"
                className="form-control mb-3 txt-dg"
                 onChange={handleChange}
                name='name'
              />
              <input
                type="text"
                placeholder="petCode"
                className="form-control mb-3 txt-dg"
                 onChange={handleChange}
                name='petCode'
              />
              <input
                type="text"
                placeholder="status"
                className="form-control mb-3 txt-dg"
                 onChange={handleChange}
                name='status'
              />
              <input
                type="text"
                placeholder="weight"
                className="form-control mb-3 txt-dg"
                 onChange={handleChange}
                name='weight'
              />
              
              <input
                type="text"
                placeholder="Species"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='species'
              />
              <input
                type="text"
                placeholder="Breeds"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='breeds'
              />
              <input
                type="text"
                placeholder="Sizes"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='size'
              />
              <input
                type="text"
                placeholder="Character"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='character'
              />
              <input
                type="text"
                placeholder="Sex"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='sex'
              /> 
              <input
                type="date"
                placeholder="dob"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='dob'
              /> 
              
              <input
                type="text"
                placeholder="Color"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='color'
              />
              <input
                type="text"
                placeholder="size_record_data"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='size_record_data'
              />
              <input
                type="text"
                placeholder="ownerSizeRecrd"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='ownerSizeRecrd'
              />
              <input
                type="file"
                placeholder="Photo"
                className="form-control mb-3 txt_dg"
                 onChange={handleChange}
                name='files'
              />
          
                <button className="btn btn-success" type='submit'>
                
                    Submit
                  
                </button>{" "}

                </form>
              </div>
           
          </div>
          
        </div>

      
    
    </>
  )
}

export default Pet_Form
