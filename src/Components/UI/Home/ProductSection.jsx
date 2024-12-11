import React, { useContext, useEffect, useState } from "react";
import { ValueContext } from "../../Context/Context_Hook";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductSection = () => {
  let token = sessionStorage.getItem("token");
  const context = useContext(ValueContext);
  const [dataProduct, setdataProduct] = useState([]);
  const url = process.env.REACT_APP_BACKEND_BASE_URL;

  useEffect(() => {
    const productData = () => {
      try {
        axios
          .get(`${url}/product/1`)
          .then((res) => setdataProduct(res.data.data))
          .catch((err) => console.error(err));
      } catch (error) {
        console.error(error);
      }
    };

    productData();
  }, []);

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
    // context.setCart_num(quantity);
    context.setSubproduct_data(array);
  };

  const handlewishlist_Value = async (product) => {
    if (token) {
      try {
        const wishlistvalue_api = await axios.post(
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

        if (wishlistvalue_api.status === 200) {
          toast.success("Inserted into the cart successfully!", {
            autoClose: 1000,
          });

          context.setWishlist_Data((prev) => [...prev, product]);
        }
        console.log("cartvalue_api", wishlistvalue_api);
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

    // Increment cart number
    context.setWishlist_count(context.wishlist_count + 1);
  };

  console.log("44444", context.wishlist_data, "count", context.wishlist_count);

  return (
    <div>
      <section
        class="gap section-healthy-product"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div class="container">
          <div class="heading mb-5">
            <h2>Productos Saludables</h2>
          </div>
          <div class="row">
            {dataProduct.slice(0, 4).map((items, index) => (
              <div class="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div class="healthy-product">
                  <div class="healthy-product-img">
                    <img src={items.product_img} alt="food" />
                    <ul class="star">
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                    </ul>
                    <div class="add-to-cart">
                      <Link onClick={() => handleAddCartValue(items)}>
                        Add to Cart
                      </Link>
                      <Link to="" class="heart-wishlist">
                        <i
                          class="fa-regular fa-heart"
                          onClick={() => handlewishlist_Value(items)}
                        ></i>
                      </Link>
                    </div>
                  </div>
                  <span>{items.title}</span>
                  <Link
                    to={`/our-products/${items.description}`}
                    onClick={() => handleProps(items)}
                  >
                    {items.description}
                  </Link>
                  <h6>{items.price}</h6>
                </div>
              </div>
            ))}

            <div class="col-lg-12 ">
              <div class="deal-of-the-week">
                <div className="row">
                  {dataProduct?.slice(0, 1).map((items, index) => (
                    <>
                      <div className="col-md-4">
                        <div class="healthy-product-img">
                          <h6>Oferta de la semana</h6>

                          <img src={items?.product_img} alt="food" />
                          <ul class="star">
                            <li>
                              <i class="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-solid fa-star"></i>
                            </li>
                          </ul>
                        </div>{" "}
                      </div>
                      <div className="col-md-8">
                        <div class="healthy-product">
                          <span>alimento para animales</span>
                          <a href="our-products.html">
                            Comida Saludable Para Perros Pollo Asado
                          </a>
                          <h6>
                            <del>$32.00</del>$22.00
                          </h6>
                          <h5>up to 14% off</h5>
                          <div class="add-to-cart">
                            <Link
                              class="button"
                              onClick={() => handleAddCartValue(items)}
                            >
                              Add to Cart
                            </Link>
                            <Link class="heart-wishlist">
                              <i
                                class="fa-regular fa-heart"
                                onClick={() => handlewishlist_Value(items)}
                              ></i>
                            </Link>
                          </div>
                          <div id="countdown">
                            <ul>
                              <li>
                                <span id="days"></span>days
                              </li>
                              <li>
                                <span id="hours"></span>Hour
                              </li>
                              <li>
                                <span id="minutes"></span>Min
                              </li>
                              <li class="mb-0">
                                <span id="seconds"></span>Sec
                              </li>
                            </ul>
                          </div>
                        </div>{" "}
                      </div>{" "}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
