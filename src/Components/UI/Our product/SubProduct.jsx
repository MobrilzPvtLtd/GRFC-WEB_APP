import React, { useContext, useState } from "react";

import tshirt from "../../../assets/images_new/tshirt_front.png";
import { ValueContext } from "../../Context/Context_Hook";

const SubProduct = () => {
  const context = useContext(ValueContext);
  const [quantity, setQuantity] = useState(1);
  const name = 'Tshirt';
  const [price, setPrice] = useState(19);

  const prodata = context.dataArray
  

  console.log("count11", quantity, "jdhakd", context.Cart_num, "naam",prodata);

  const handlecart = (array) => {
    context.setCart_num(quantity);
    context.setDataArray((prev) => [...prev, array]);
  };
  
  
  return (
    <>
      <div className="container mt-64">
        <div className="row">
          <div className="col-md-4">
            <img src={tshirt} alt="product" />
          </div>
          <div className="col-md-8">
            <h2 className="text-3xl font-semibold mb-3">{name}</h2>
            <p className="my-3 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="bg-green-400 rounded-full px-4 py-2 text-white font-medium"
              >
                4.3{" "}
              </button>
              <span className="text-gray-600">2367 ratings and 45 reviews</span>
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
                  setQuantity(quantity - 1), setPrice(price - 19)
                )}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="text-2xl font-semibold">{quantity}</span>
              <button
                className="bg-gray-300 rounded-2xl px-6 py-2 text-2xl text-white"
                onClick={() => (
                  setQuantity(quantity + 1), setPrice((quantity + 1) * 19)
                )}
              >
                +
              </button>
              <span className="mx-2 px-3 text-2xl">
                <b>${price}</b>
              </span>
            </div>

            <div className="flex mt-6 space-x-4">
              <button
                onClick={() => handlecart(prodata)}
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
      </div>
    </>
  );
};

export default SubProduct;
