import React, { useContext, useState } from "react";

import { ValueContext } from "../../Context/Context_Hook";

const SubProduct = () => {
  const context = useContext(ValueContext);
  const [quantity, setQuantity] = useState(1);
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

  const handlecart = (array) => {
    context.setCart_num(context.Cart_num + quantity);
    context.setDataArray((prev) => [...prev, array]);
  };

  console.log("context ka data", context.Cart_num ,quantity);

  return (
    <>
      <div className="container mt-64">
        {[data_subproduct]?.map((item, index, array) => (
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
                  2367 ratings and 45 reviews
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
                  onClick={() => handlecart(array[0])}
                  className="bg-orange-600 rounded-full px-8 py-3 text-white font-semibold  transition duration-200"
                >
                  Add to Cart
                </button>
                <button className="bg-orange-600 rounded-full px-8 py-3 text-white font-semibold  transition duration-200">
                  Buy Now
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
