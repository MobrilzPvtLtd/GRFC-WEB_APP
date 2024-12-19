import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import food1 from "../../../images_new/img/food-categorie-1.png";
import food2 from "../../../images_new/img/food-categorie-2.png";
import { Link } from "react-router-dom";
import { ValueContext } from "../../Context/Context_Hook";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaTrash
} from "react-icons/fa";

const SidebarCart = ({ visible }) => {
  const [isVisible, setIsVisible] = useState(true);
 
   const [localCartItems, setLocalCartItems] = useState([]);
  let token = sessionStorage.getItem("token");
  const url = process.env.REACT_APP_BACKEND_BASE_URL;
  const sidebarRef = useRef(null); // Ref for sidebar element

  const context = useContext(ValueContext);

  const closePopup = () => setIsVisible(false);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const subProductData = context.subproduct_data;

  useEffect(() => {
    // Transform context data to cartItems format
    const transformedItems = context.dataArray.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    context.setCartItems(transformedItems);
  }, [context.dataArray, context.subproduct_data]);

  useEffect(() => {
    if (token && isVisible) {
      Fetch_cartdata();
    }
  }, [token, isVisible]);

  // Fetch cart data from the API
  const Fetch_cartdata = async() => {
    try {
      const data_api = await axios.get(`${url}/cart`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      if(data_api.status===200){

        context.setApi_cartitems(data_api.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  
  const total = token
    ? context.api_cartitems?.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    : context.cartItems?.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

  useEffect(()=>{
    context.setTotal_Sum(total)
  },[total])
  const handleCartRemove = async (id) => {
    if (token) {
      try {
        const response = await axios.delete(`${url}/cart/${id}`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          toast.success('Removed successfully', { autoClose: 1000 });
          const updatedItems = context.api_cartitems.filter((item) => item.id !== id);
          context.setApi_cartitems(updatedItems);
          
          if (context.Cart_num > 0) {
            context.setCart_num(context.Cart_num - 1);
          }
  
          
          await Fetch_cartdata();
        }
      } catch (error) {
        console.error("Error removing item from cart via API:", error);
      }
    } else {
      
      const updatedCart = context.cartItems.filter((item) => item.id !== id);
      context.setCartItems(updatedCart);
  
      
      if (context.Cart_num > 0) {
        context.setCart_num(context.Cart_num - 1);
      }
    }
  };
  

  

  // Close the sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isVisible) return null;
  console.log(
    "123456",
    context.dataArray,
    "cartuiop locally",
    context.cartItems,
    "api dataa",
    context.api_cartitems
  );
  return (
 
      <div id="lightbox" className="lightbox clearfix">
        <div className="white_content" ref={sidebarRef}>
          <button className="textright" onClick={closePopup}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <div className="cart-popup">
            {((token ? context.api_cartitems : context.cartItems)?.length === 0) ? (
              <p className="empty-cart-message">Tu carrito está vacío.</p>
            ) : (
              <>
                <ul>
                  {(token ? context.api_cartitems : context.cartItems)?.map((item) => (
                    <li
                      key={item.id}
                      className="d-flex align-items-center position-relative"
                    >
                      <div className="p-img light-bg">
                        <img src={item?.product_img_url || item?.product_img} alt="Product Image" />
                      </div>
                      <div className="p-data">
                        <h3 className="font-semi-bold">{item?.title}</h3>
                        <p className="theme-clr font-semi-bold">
                          ({item.quantity} x ${parseFloat(item.price)?.toFixed(2)})
                        </p>
                      </div>
                      <button
                        onClick={() => handleCartRemove(item.id)}
                        className="remove-btn ms-4"
                      >
                        <FaTrash icon={faCircleXmark} />
                      </button>
                    </li>
                  ))}
                </ul>
    
                <div className="cart-total d-flex align-items-center justify-content-between">
                  <span className="font-semi-bold">Total:</span>
                  <span className="font-semi-bold">${context.total_sum?.toFixed(2)}</span>
                </div>
    
                <div className="cart-btns d-flex align-items-center justify-content-between">
                  <Link to="#" className="font-bold">
                  Ver carrito
                  </Link>
                  <Link
                    to="/checkout"
                    className="font-bold theme-bg-clr text-white checkout"
                  >
                    Verificar
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    
    
  );
};

export default SidebarCart;
