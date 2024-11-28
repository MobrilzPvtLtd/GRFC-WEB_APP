import React, { useContext, useEffect, useState } from "react";
import product from "../../../../images_new/product1-min-305x350 (1)vngearhbwfjevaibhwefnj.png";
import product2 from "../../../../images_new/p53x73.png";
import axios from "axios";
import { ValueContext } from "../../../Context/Context_Hook";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import InputRange from "react-input-range";

const ProductSection = () => {
  const context = useContext(ValueContext);

  const [productvalue, setProductvalue] = useState(0);
  const[loader, setLoader]= useState(true)

  let token = localStorage.getItem("token");
   
  // console.log("kkkkkkkkkk", token);
  const url = process.env.REACT_APP_BACKEND_BASE_URL;

  useEffect(() => {
    const productData = () => {
      try {
        axios
          .get(`${url}/product/${productvalue}`)
          .then((res) => context.setdataProduct(res.data.data))
          .catch((err) => console.error(err));
          setLoader(false)
      } catch (error) {
        console.error(error);
      }
    };

    productData();
  }, [productvalue]);

  const handleAddCartValue = (array) => {
    context.setCart_num(context.Cart_num + 1);

    context.setDataArray((prev) => [...prev, array]);
  };
  const handleProps = (array) => {
    // context.setCart_num(quantity);
    context.setSubproduct_data(array);
  };


   const Data_Product = context.dataProduct;
 
const Prod_price = (tabledata) => {
  // Filter products based on price range (lower: 1235, upper: 2000)
  return tabledata.filter((item) => {
    const price = parseFloat(item.price); // Use parseFloat for proper comparison
    return price >= 1235 && price <= 2000;
  });
};

// Only filter products if data is available
const checkValue = Data_Product ? Prod_price(context.dataProduct) : [];

const dataSort = context.dataProduct ? context.dataProduct.sort((a, b) => a.price - b.price) : [];
const largestArray = [...dataSort];
const largestNum = largestArray[largestArray.length - 1]?.price || 0;
const smallestNum = largestArray[0]?.price || 0;
  
  console.log("kjhgf", context.Cart_num, "all product24", productvalue,'adf',context.dataProduct,'ads', context.dataArray ,'99999999',Data_Product ,'2222', checkValue);
  const [lowerValue, setLowerValue] = useState(smallestNum);
  const [upperValue, setUpperValue] = useState(largestNum);

  const handleLowerChange = (event) => {
    const value = Math.min(event.target.value, upperValue); 
    setLowerValue(value)
  };

  const handleUpperChange = (event) => {
    const value = Math.max(event.target.value, lowerValue);
    setUpperValue(value);
  };
  return (
    <section className="gap products-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="sidebar">
              <h3>Category</h3>
              <div className="boder-bar"></div>
              <ul className="category">
                <li>
                  <a onClick={() => setProductvalue(0)}>
                    All Product<span>7</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setProductvalue(2)}>
                    Dog Supplies<span>1</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setProductvalue(1)}>
                    Medicine<span>6</span>
                  </a>
                </li>
                <li className="end">
                  <a onClick={() => setProductvalue(3)}>
                    Accessories<span>0</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar">
              <h3>Price range</h3>
              <div className="boder-bar"></div>
              <div className="wrapper">
              {/* <fieldset className="filter-price">
      <div className=" d-flex justify-between">
        <div className=" price-wrap">
         
          <label htmlFor="one">${smallestNum}</label>
        </div>

       

        <div className=" price-wrap">
       
          <label htmlFor="two">${largestNum}</label>
        </div>
      </div>

    
    
      <div className="price-field">
        <input
          type="range"
          min='20'
          max='200'
          value=''
          id="lower"
          // onChange={handleLowerChange}
        />
        <input
          type="range"
           min='20'
          max='200'
          value=''
          id="upper"
          // onChange={handleUpperChange}
        />
      </div>

      <button className="w-100 button" >
        Filter
      </button>
    </fieldset> */}

<fieldset className="filter-price">
        <div className="d-flex justify-between">
          <div className="price-wrap">
            <label htmlFor="one">${lowerValue}</label>
          </div>
          <div className="price-wrap">
            <label htmlFor="two">${upperValue}</label>
          </div>
        </div>

        {/* Range input to adjust the lower and upper values */}
        <div className="price-field">
          <input
            type="range"
            min='1234'
            max='5000'
            value={lowerValue}
            id="lower"
            onChange={handleLowerChange}
          />
          <input
            type="range"
           min='1234'
            max='5000'
            value={upperValue}
            id="upper"
            onChange={handleUpperChange}
          />
        </div>

        <button className="w-100 button">
          Filter
        </button>
      </fieldset>
              </div>
            </div>
            <div className="sidebar">
              <h3>Top Products</h3>
              <div className="boder-bar"></div>
              <ul className="top-products">
                {context.dataProduct.slice(0,3).map((item, index) => (
                  <li key={index}>
                    <img src={item.product_img} alt="top-products" className="w-25"/>
                    <div>
                      <a href="#">Procan Adult Dog Food</a>
                      <span>$32.00</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {loader? <Skeleton active/>:
          <div className="col-lg-9">
            <div className="items-number">
              <span>Items 1-25 of 6133</span>
              <div className="d-flex align-items-center">
                <span>Sort By</span>
                <select className="nice-select Advice">
                  <option>Recently Added</option>
                  <option>Services 1</option>
                  <option>Services 2</option>
                  <option>Services 3</option>
                  <option>Services 4</option>
                </select>
              </div>
            </div>
            <div className="row">
              {context.dataProduct.map((items, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <div className="healthy-product">
                    <div className="healthy-product-img">
                      <Link  to={`/our-products/${items.description}`}  onClick={() => handleProps(items)}>
                        {" "}
                        <img
                          src={items.product_img}
                          className="w-fit h-fit aspect-square"
                          alt="food"
                        />{" "}
                      </Link>

                      <div className="add-to-cart">
                        <Link  onClick={() => handleAddCartValue(items)}>
                          Add to Cart
                        </Link>
                        <a href="#" className="heart-wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <span>{items.title}</span>
                    <Link
                      to={`/our-products/${items.description}`}
                      onClick={() => handleProps(items)}
                    >
                      {" "}
                      {items.description}{" "}
                    </Link>
                    <h6>{items.price}</h6>
                  </div>
                </div>
              ))}

              {/* <ul className="pagination m-auto">
                <li className="prev">
                  <a href="#">
                    <i className="fa-solid fa-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">......</a>
                </li>
                <li>
                  <a href="#">18</a>
                </li>
                <li className="next">
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
