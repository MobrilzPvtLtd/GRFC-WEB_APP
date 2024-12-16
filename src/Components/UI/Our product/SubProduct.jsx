import React, { useContext, useState } from "react";

import { ValueContext } from "../../Context/Context_Hook";
import axios from "axios";
import { toast } from "react-toastify";



const SubProduct = () => {
  const context = useContext(ValueContext);
  let token = sessionStorage.getItem("token");
  const [quantity, setQuantity] = useState(1);
  const url = process.env.REACT_APP_BACKEND_BASE_URL;
  let data_subproduct = sessionStorage.getItem("data_subproduct")
 console.log('object222222222',data_subproduct)
  const subproddata = [context.subproduct_data];
  const [price, setPrice] = useState(0);
 
  console.log(
    "count11",
    quantity,
    "jdhakd",
    context.Cart_num,
    "naam",
    "ads",
    context.dataArray,
    context.subproduct_data
  );

  const handlecart = async(array) => {
    if (token) {
      try {
        const cartvalue_api = await axios.post(
          `${url}/cart`,
          {
            product_id: array.id,
            quantity: quantity,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (cartvalue_api.status === 200) {
          toast.success("Added successfully!", {
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
  

  console.log("context ka data", context.Cart_num ,quantity,'gggggggggggg',subproddata);

  return (
    <>
      <div className="container mt-64">
        {subproddata?.map((item, index, array) => (
          <div className="row" key={index}>
            <div className="col-md-4">
              <img src={item?.product_img} alt="product" />
            </div>
            <div className="col-md-8">
              <h2 className="text-3xl font-semibold mb-3">{item?.title}</h2>
              <p className="my-3 text-gray-600">{item?.description}</p>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="bg-green-400 rounded-full px-4 py-2 text-white font-medium"
                >
                  4.3{" "}
                </button>
                <span className="text-gray-600">
                2367 calificaciones y 45 reseñas
                </span>
              </div>

              <div className="flex justify-start mt-6 space-x-2">
                <span className="text-xl font-medium pt-2">Size:</span>
                <button className="bg-gray-300 rounded-full px-4 py-2 text-white">
                  S
                </button>
                <button className="bg-gray-300 rounded-full px-4 py-2 text-white">
                  M
                </button>
                <button className="bg-gray-300 rounded-full px-4 py-2 text-white">
                  L
                </button>
                <button className="bg-gray-300 rounded-full px-4 py-2 text-white">
                  XL
                </button>
                <button className="bg-gray-300 rounded-full px-4 py-2 text-white">
                  XXL
                </button>
              </div>

              <div className="flex items-center mt-6 space-x-4">
                <button
                  className="bg-gray-300 rounded-2xl px-6 py-2 text-2xl text-white"
                  onClick={() => (
                    setQuantity(quantity - 1), setPrice(price - item.price)
                  )}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="text-2xl font-semibold">{quantity}</span>
                <button
                  className="bg-gray-300 rounded-2xl px-6 py-2 text-2xl text-white"
                  onClick={() => (
                    setQuantity(quantity + 1),
                    setPrice((quantity + 1) * item.price)
                  )}
                >
                  +
                </button>
                {/* <span className="mx-2 px-3 text-2xl">
                  <b>${price}</b>
                </span> */}
              </div>

              <div className="flex mt-6 space-x-4">
                <button
                  onClick={()=>handlecart(item)}
                  className="bg-orange-600 rounded-full px-8 py-3 text-white font-semibold  transition duration-200"
                >
                  Añadir a la cesta
                </button>
                <button className="bg-orange-600 rounded-full px-8 py-3 text-white font-semibold  transition duration-200">
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubProduct;
