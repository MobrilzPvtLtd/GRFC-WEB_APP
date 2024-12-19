import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ValueContext } from "../../Context/Context_Hook";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Wishlist = () => {
  const context = useContext(ValueContext);
  let token = sessionStorage.getItem("token");
  const [isVisible, setIsVisible] = useState(true);
  const [datawislist, set_datawishlist] = useState();
  const [datawishlist_api, set_datawishlist_api] = useState();
  const url = process.env.REACT_APP_BACKEND_BASE_URL;

  const closePopup = () => {
    setIsVisible(false);
    context.setWishlist_value(0);
  };

  useEffect(() => {
    const transformedItems = context.wishlist_data.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    set_datawishlist(transformedItems);
  }, [context.wishlist_data]);

  //  const total = datawislist?.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (token) {
      fetchWishlistData();
    }
  }, [token]);

  const fetchWishlistData = async () => {
    try {
      const res = await axios.get(`${url}/wishlist`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        set_datawishlist_api(res.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching  data:", error);
    }
  };
  if (!isVisible) return null;

  const handlewishlist_remove = async (id) => {
    if (token) {
      try {
        const response = await axios.delete(`${url}/wishlist/${id}`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          toast.success("Item removed successfully", {
            autoClose: 1000,
          });
            const updatedItems = datawishlist_api.filter((item) => item.id !== id);
            set_datawishlist_api(updatedItems);

          

          if (context.wishlist_count > 0) {
            context.setWishlist_count(context.wishlist_count - 1);
          }
         await fetchWishlistData();
        } else {
          console.error("Failed to remove the item");
        }
      } catch (error) {
        console.error("Error removing item from wishlist:", error);
      }
    } else {
      console.log("Removing wishlist item locally:", id);
      set_datawishlist((prev) => prev.filter((item) => item.id !== id));

      if (context.wishlist_count > 0) {
        context.setWishlist_count(context.wishlist_count - 1);
      }
    }
  };
console.log('ggggg',datawishlist_api  )
  return (
    <div id="lightbox" className="lightbox clearfix">
      <div className="white_content">
        <button className="textright" onClick={closePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="cart-popup">
          {(token ? datawishlist_api : datawislist)?.length === 0 ? (
            <p className="empty-cart-message">Tu carrito está vacío.</p>
          ) : (
            <>
              <ul>
                {" "}
                {/* <span className="text-3xl ">
                  Lista de deseos <i className="fa-regular fa-heart"></i>{" "}
                </span> */}
                {(token ? datawishlist_api : datawislist)?.map((item) => (
                  <li
                    key={item?.id}
                    className="d-flex align-items-center position-relative"
                  >
                    <div className="p-img light-bg">
                      <img
                        src={item?.product_img_url || item?.product_img}
                        alt="Product Image"
                      />
                    </div>
                    <div className="p-data">
                      <h3 className="font-semi-bold">{item?.title}</h3>
                      <p className="theme-clr font-semi-bold">
                        ${parseFloat(item.price)?.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        handlewishlist_remove(item.id);
                      }}
                      className="remove-btn ms-4"
                    >
                      <FaTrash icon={faCircleXmark} />
                    </button>
                  </li>
                ))}
              <div className="cart-btns d-flex align-items-center justify-content-between">
                {/* <Link to="/view-cart" className="font-bold">
              View Cart
            </Link> */}
                <Link
                  to="/checkout"
                  className="font-bold theme-bg-clr text-white checkout"
                >
                  Verificar
                </Link>
              </div>
              </ul>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
