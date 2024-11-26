import React, { useContext, useEffect, useState } from 'react'
import { ValueContext } from '../../Context/Context_Hook';
import axios from 'axios';

const ProductSection = () => {

  const[dataProduct, setdataProduct]=useState([])
  const url = process.env.REACT_APP_BACKEND_BASE_URL;

  useEffect(() => {
    const productData = () => {
      try {
        axios
          .get(`${url}/product/1`, 
          
        )
          .then((res) =>
            
           setdataProduct(res.data.data) )
          .catch((err) => console.error(err));
       
      } catch (error) {
        console.error(error);
      }
    };

    productData();
  }, []);
  return (
    <div>
      <section class="gap section-healthy-product" style={{backgroundColor: "#f5f5f5"}}>
    <div class="container">
        <div class="heading">
            
            <h6>Find Healthy Product</h6>
            <h2>Healthy Products</h2>
        </div>
        <div class="row">
        { dataProduct.map((items, index) =>  ( 
           
            <div class="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div class="healthy-product">
                    <div class="healthy-product-img">
                        <img src={items.product_img}  alt="food"/>
                        <ul class="star">
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                        </ul>
                        <div class="add-to-cart">
                          <a href="#">Add to Cart</a>
                          <a href="#" class="heart-wishlist">
                            <i class="fa-regular fa-heart"></i>
                          </a>
                        </div>
                    </div>
                    <span>{items.title}</span>
                    <a href="our-products.html">{items.description}</a>
                    <h6>{items.price}</h6>
                </div>
            </div>  ))}
         
            <div class="col-lg-9">
                <div class="deal-of-the-week">
                    <div class="healthy-product-img">
                        <h6>Deal of the Week</h6>
                        <img src="assets/images_new/product1-min-305x350.png" alt="food"/>
                        <ul class="star">
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                    <div class="healthy-product">
                        <span>Animal Feed</span>
                        <a href="our-products.html">Healthy Dog Food Roaster Chicken</a>
                        <h6><del>$32.00</del>$22.00</h6>
                        <h5>up to 14% off</h5>
                        <div class="add-to-cart">
                          <a href="#" class="button">Add to Cart</a>
                          <a href="#" class="heart-wishlist">
                            <i class="fa-regular fa-heart"></i>
                          </a>
                        </div>
                        <div id="countdown">
                            <ul>
                              <li><span id="days"></span>days</li>
                              <li><span id="hours"></span>Hour</li>
                              <li><span id="minutes"></span>Min</li>
                              <li class="mb-0"><span id="seconds"></span>Sec</li>
                            </ul>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 
    </div>
  )
}

export default ProductSection
