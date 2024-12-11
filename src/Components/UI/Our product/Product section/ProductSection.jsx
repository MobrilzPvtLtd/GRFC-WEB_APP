// import React, { useContext, useEffect, useState } from "react";
// import product from "../../../../images_new/product1-min-305x350 (1)vngearhbwfjevaibhwefnj.png";
// import product2 from "../../../../images_new/p53x73.png";
// import axios from "axios";
// import { ValueContext } from "../../../Context/Context_Hook";
// import { Link } from "react-router-dom";
// import { Skeleton } from "antd";
// import InputRange from "react-input-range";

// const ProductSection = () => {
//   const context = useContext(ValueContext);

//   const [productvalue, setProductvalue] = useState(0);
//   const [loader, setLoader] = useState(true);

//   let token = localStorage.getItem("token");

//   // console.log("kkkkkkkkkk", token);
//   const url = process.env.REACT_APP_BACKEND_BASE_URL;

//   useEffect(() => {
//     const productData = () => {
//       try {
//         axios
//           .get(`${url}/product/${productvalue}`)
//           .then((res) => context.setdataProduct(res.data.data))
//           .catch((err) => console.error(err));
//         setLoader(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     productData();
//   }, [productvalue]);

//   const handleAddCartValue = (array) => {
//     context.setCart_num(context.Cart_num + 1);

//     context.setDataArray((prev) => [...prev, array]);
//   };
//   const handleProps = (array) => {
//     // context.setCart_num(quantity);
//     context.setSubproduct_data(array);
//   };

//   const Data_Product = context.dataProduct;

//   const Prod_price = (tabledata) => {
//     // Filter products based on price range (lower: 1235, upper: 2000)
//     return tabledata.filter((item) => {
//       const price = parseFloat(item.price); // Use parseFloat for proper comparison
//       return price >= 1235 && price <= 2000;
//     });
//   };

//   // Only filter products if data is available
//   const checkValue = Data_Product ? Prod_price(context.dataProduct) : [];

//   const dataSort = context.dataProduct
//     ? context.dataProduct.sort((a, b) => a.price - b.price)
//     : [];
//   const largestArray = [...dataSort];
//   const largestNum = largestArray[largestArray.length - 1]?.price || 0;
//   const smallestNum = largestArray[0]?.price || 0;

//   console.log(
//     "kjhgf",
//     context.Cart_num,
//     "all product24",
//     productvalue,
//     "adf",
//     context.dataProduct,
//     "ads",
//     context.dataArray,
//     "99999999",
//     Data_Product,
//     "2222",
//     checkValue
//   );
//   const [lowerValue, setLowerValue] = useState(smallestNum);
//   const [upperValue, setUpperValue] = useState(largestNum);

//   const handleLowerChange = (event) => {
//     const value = Math.min(event.target.value, upperValue);
//     setLowerValue(value);
//   };

//   const handleUpperChange = (event) => {
//     const value = Math.max(event.target.value, lowerValue);
//     setUpperValue(value);
//   };
//   return (
//     <section className="gap products-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3">
//             <div className="sidebar">
//               <h3>Category</h3>
//               <div className="boder-bar"></div>
//               <ul className="category">
//                 <li>
//                   <a onClick={() => setProductvalue(0)}>
//                     All Product<span>7</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a onClick={() => setProductvalue(2)}>
//                     Dog Supplies<span>1</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a onClick={() => setProductvalue(1)}>
//                     Medicine<span>6</span>
//                   </a>
//                 </li>
//                 <li className="end">
//                   <a onClick={() => setProductvalue(3)}>
//                     Accessories<span>0</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="sidebar">
//               <h3>Price range</h3>
//               <div className="boder-bar"></div>
//               <div className="wrapper">
//                 <fieldset className="filter-price">
//                   <div className="d-flex justify-between">
//                     <div className="price-wrap">
//                       <label htmlFor="one">${lowerValue}</label>
//                     </div>
//                     <div className="price-wrap">
//                       <label htmlFor="two">${upperValue}</label>
//                     </div>
//                   </div>

//                   {/* Range input to adjust the lower and upper values */}
//                   <div className="price-field">
//                     <input
//                       type="range"
//                       min="1234"
//                       max="5000"
//                       value={lowerValue}
//                       id="lower"
//                       onChange={handleLowerChange}
//                     />
//                     <input
//                       type="range"
//                       min="1234"
//                       max="5000"
//                       value={upperValue}
//                       id="upper"
//                       onChange={handleUpperChange}
//                     />
//                   </div>

//                   <button className="w-100 button">Filter</button>
//                 </fieldset>
//               </div>
//             </div>
//             <div className="sidebar">
//               <h3>Top Products</h3>
//               <div className="boder-bar"></div>
//               <ul className="top-products">
//                 {context.dataProduct.slice(0, 3).map((item, index) => (
//                   <li key={index}>
//                     <img
//                       src={item.product_img}
//                       alt="top-products"
//                       className="w-25"
//                     />
//                     <div>
//                       <a href="#">Procan Adult Dog Food</a>
//                       <span>$32.00</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           {loader ? (
//             <Skeleton active />
//           ) : (
//             <div className="col-lg-9">
//               <div className="items-number">
//                 <span>Items 1-25 of 6133</span>
//                 <div className="d-flex align-items-center">
//                   <span>Sort By</span>
//                   <select className="nice-select Advice">
//                     <option>Recently Added</option>
//                     <option>Services 1</option>
//                     <option>Services 2</option>
//                     <option>Services 3</option>
//                     <option>Services 4</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="row">
//                 {context.dataProduct.map((items, index) => (
//                   <div className="col-md-4 col-sm-6" key={index}>
//                     <div className="healthy-product">
//                       <div className="healthy-product-img">
//                         <Link
//                           to={`/our-products/${items.description}`}
//                           onClick={() => handleProps(items)}
//                         >
//                           {" "}
//                           <img
//                             src={items.product_img}
//                             className="w-fit h-fit aspect-square"
//                             alt="food"
//                           />{" "}
//                         </Link>

//                         <div className="add-to-cart">
//                           <Link onClick={() => handleAddCartValue(items)}>
//                             Add to Cart
//                           </Link>
//                           <a href="#" className="heart-wishlist">
//                             <i className="fa-regular fa-heart"></i>
//                           </a>
//                         </div>
//                       </div>
//                       <span>{items.title}</span>
//                       <Link
//                         to={`/our-products/${items.description}`}
//                         onClick={() => handleProps(items)}
//                       >
//                         {" "}
//                         {items.description}{" "}
//                       </Link>
//                       <h6>{items.price}</h6>
//                     </div>
//                   </div>
//                 ))}

//                 {/* <ul className="pagination m-auto">
//                 <li className="prev">
//                   <a href="#">
//                     <i className="fa-solid fa-arrow-left"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">1</a>
//                 </li>
//                 <li>
//                   <a href="#">2</a>
//                 </li>
//                 <li>
//                   <a href="#">......</a>
//                 </li>
//                 <li>
//                   <a href="#">18</a>
//                 </li>
//                 <li className="next">
//                   <a href="#">
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </a>
//                 </li>
//               </ul> */}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

import React, { useContext, useEffect, useState } from "react";
import { ValueContext } from "../../../Context/Context_Hook";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import axios from "axios";
import { toast } from "react-toastify";

const ProductSection = () => {
  const context = useContext(ValueContext);

  const [productvalue, setProductvalue] = useState(0);
  const [loader, setLoader] = useState(true);

  let token = sessionStorage.getItem("token");
  const url = process.env.REACT_APP_BACKEND_BASE_URL;

  const dataSort = context.dataProduct
    ? context.dataProduct.sort((a, b) => a.price - b.price)
    : [];
  const largestArray = [...dataSort];
  const largestNum = largestArray[largestArray.length - 1]?.price || 0;
  const smallestNum = largestArray[0]?.price || 0;

  const [priceRange, setPriceRange] = useState({
    min: smallestNum,
    max: largestNum,
  });
  useEffect(() => {
    const productData = async () => {
      try {
        const res = await axios.get(`${url}/product/${productvalue}`);
        context.setdataProduct(res.data.data);

        // Set the price range based on fetched data
        const sortedData = res.data.data.sort((a, b) => a.price - b.price);
        const smallestNum = sortedData[0]?.price || 0;
        const largestNum = sortedData[sortedData.length - 1]?.price || 0;

        setPriceRange({ min: smallestNum, max: largestNum });
        setLoader(false);
      } catch (error) {
        console.error(error);
      }
    };

    productData();
  }, [productvalue]);

  // Filter products based on price range
  const filterByPrice = (products) => {
    return products.filter(
      (item) =>
        parseFloat(item.price) >= priceRange.min &&
        parseFloat(item.price) <= priceRange.max
    );
  };

  const handleAddCartValue = async (array) => {
    if (token) {
      try {
        const cartvalue_api = await axios.post(
          `${url}/cart`,
          {
            product_id: array.id,
            quantity: context.Cart_num + 1,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (cartvalue_api.status === 200) {
          toast.success("Inserted into the cart successfully!", {
            autoClose: 1000,
          });

          context.setDataArray((prev) => [...prev, array]);
        }
        console.log("cartvalue_api", cartvalue_api);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    } else {
      console.warn("No token provided. Updating cart locally.");

      // Update cart locally
      context.setCart_num(context.Cart_num + 1);
      context.setDataArray((prev) => [...prev, array]);
    }

    // Increment cart number
    context.setCart_num(context.Cart_num + 1);
  };

  const handleProps = (array) => {
    context.setSubproduct_data(array);
  };

  const Data_Product = context.dataProduct;

  sessionStorage.setItem("data_subproduct", JSON.stringify(Data_Product));
  // If there are products available, filter them by price range
  const filteredProducts = Data_Product ? filterByPrice(Data_Product) : [];

  const handlewishlist_count = async (product) => {
    if (token) {
      try {
        const wislistvalue_api = await axios.post(
          `${url}/wishlist`,
          {
            product_id: product.id,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (wislistvalue_api.status === 200) {
          toast.success("Added Successfully", {
            autoClose: 1000,
          });

          context.setWishlist_Data((prev) => [...prev, product]);
        }
        console.log("cartvalue_api", wislistvalue_api);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    } else {
      console.warn("No token provided. Updating cart locally.");
      if (!context.wishlist_data.some((item) => item.id === product.id)) {
        // Update cart locally
        context.setWishlist_count(context.wishlist_count + 1);
        context.setWishlist_Data((prev) => [...prev, product]);
      } else {
        toast.warn("Product already in wishlist!");
      }
    }
    context.setWishlist_count(context.wishlist_count + 1);

    console.log(
      "44444",
      context.wishlist_data,
      "count",
      context.wishlist_count
    );
  };

  return (
    <section className="gap products-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="sidebar">
              <h3>Categoría</h3>
              <div className="boder-bar"></div>
              <ul className="category">
                <li>
                  <Link onClick={() => setProductvalue(0)}>
                    Todos los productos<span>7</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setProductvalue(2)}>
                    Suministros para perros<span>1</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setProductvalue(1)}>
                    Medicamento<span>6</span>
                  </Link>
                </li>
                <li className="end">
                  <Link onClick={() => setProductvalue(3)}>
                    Accesorios<span>0</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar">
              <h3>Gama de precios</h3>
              <div className="boder-bar"></div>
              <div className="wrapper">
                <fieldset className="filter-price">
                  <div className="d-flex justify-between mb-3">
                    <div className="price-wrap">
                      <label htmlFor="one">${priceRange.min}</label>
                    </div>
                    <div className="price-wrap">
                      <label htmlFor="two">${priceRange.max}</label>
                    </div>
                  </div>

                  <InputRange
                    maxValue={5000}
                    minValue={1000}
                    value={priceRange}
                    onChange={setPriceRange}
                    formatLabel={() => ""}
                  />
                  <button className="w-100 button mt-3">Filter</button>
                </fieldset>
              </div>
            </div>
            <div className="sidebar">
              <h3>Productos principales</h3>
              <div className="boder-bar"></div>
              <ul className="top-products">
                {context.dataProduct.slice(0, 3)?.map((item, index) => (
                  <li key={index}>
                    <img
                      src={item.product_img}
                      alt="top-products"
                      className="w-25"
                    />
                    <div>
                      <a href="#">Procan Adult Dog Food</a>
                      <span>$32.00</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {loader ? (
            <Skeleton active />
          ) : (
            <div className="col-lg-9">
              <div className="items-number">
                <span>
                  Items {filteredProducts.length} of{" "}
                  {context.dataProduct.length}
                </span>
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
                {filteredProducts.map((item, index) => (
                  <div className="col-md-4 col-sm-6" key={index}>
                    <div className="healthy-product">
                      <div className="healthy-product-img">
                        <Link
                          to={`/our-products/${item.description}`}
                          onClick={() => handleProps(item)}
                        >
                          <img
                            src={item.product_img || item.product_img_url}
                            className="w-fit h-fit aspect-square"
                            alt="food"
                          />
                        </Link>
                        <div className="add-to-cart">
                          <Link onClick={() => handleAddCartValue(item)}>
                            Add to Cart
                          </Link>
                          <Link to="" className="heart-wishlist">
                            <i
                              className="fa-regular fa-heart"
                              onClick={() => handlewishlist_count(item)}
                            ></i>
                          </Link>
                        </div>
                      </div>
                      <span>{item.title}</span>
                      <Link
                        to={`/our-products/${item.description}`}
                        onClick={() => handleProps(item)}
                      >
                        {item.description}
                      </Link>
                      <h6>${item.price}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
