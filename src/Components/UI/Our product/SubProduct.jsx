import React from 'react';

import tshirt from '../../../images_new/product1416.png'
const SubProduct = () => {
  return (
    <>
    <div className="container mt-64">
        <div className="row">
            <div className="col-md-4">
                <img src={tshirt} alt="product" />
            </div>
            <div className="col-md-8">
                <h2>Product Title</h2>
                <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Read More..</p>
                <button  type="button" className='bg-green-400 rounded-full px-4 py-1 me-2 text-white'>4.3</button>      <span>  2367 ratings and 45 review</span>
                
                <div className='d-flex justify-start mt-4'>
                    <div className='text-2xl'>Size:</div>
                     <button className='bg-gray-400 mx-2 rounded-full px-4 text-white'>S</button>
                     <button  className='bg-gray-400 mx-2 rounded-full px-4 text-white'>M</button>
                     <button  className='bg-gray-400 mx-2 rounded-full px-4 text-white'>L</button>
                     <button  className='bg-gray-400 mx-2 rounded-full px-4 text-white'>XL</button>
                     <button  className='bg-gray-400 mx-2 rounded-full px-4 text-white'>XXl</button>
                </div>
                <div className='d-flex justify-start mt-4'>
                  
                    <button  className='bg-gray-400 mx-2 rounded-2xl px-4 text-2xl  text-white'>
                        -
                    </button><span className='py-3 text-2xl'> 1</span><button  className='bg-gray-400 mx-2 text-2xl rounded-2xl  px-4  text-white'>
                        +
                    </button>
                    <button  className='bg-indigo-400 mx-2 rounded-full px-4 py-2 text-white'>Add to Cart</button>
                    <button  className='bg-indigo-400 mx-2 rounded-full px-4 py-3 text-white'>Buy Now</button>
                </div>
                
                 
            </div>
        </div>
    </div>

      
    </>
  )
}

export default SubProduct
