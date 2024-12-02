import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ValueContext } from '../../Context/Context_Hook';
import axios from 'axios';
import { toast } from 'react-toastify';

const Wishlist = () => {
    const context = useContext(ValueContext);
    let token = sessionStorage.getItem("token");
  const [isVisible, setIsVisible] = useState(true); // Popup is visible by default
  const[datawislist,set_datawishlist] =useState();
  const url = process.env.REACT_APP_BACKEND_BASE_URL;

  const closePopup = () => { setIsVisible(false)
    context.setWishlist_value(0)
                             
   } ;

  

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

   const total = datawislist?.reduce((sum, item) => sum + item.price * item.quantity, 0);

   useEffect(() => {
     const fetchWishlistData = async() => {
       try {
         const res = await axios.get(`${url}/wishlist`, {
           headers: {
             Authorization: token,
             "Content-Type": "application/json",
           },
         }).then((res)=> console.log('dta555555555',res))
           .catch((err)=>console.log(err));

           console.log('111111111111',res)
 
        
 
        
       } catch (error) {
         console.error("Error fetching user data:", error);
       }
     };
     if (token) {
         fetchWishlistData();
     }
   }, [token]);

  if (!isVisible) return null; // Render nothing if the popup is closed
 
 
  

  const handlewishlist_remove = async(id)=>{
    try {
        // Send DELETE request to the server
        const response = await axios.delete(`${url}/wishlist/${id}`,{
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
        });
        
        if (response.status === 200) {
          toast.success('Item removed successfully');
          
          // Update wishlist in the context after successful deletion
          context.setWishlist_Data((prev) => prev.filter((item) => item.id !== id));
          
          // Decrease the wishlist count
          context.setWishlist_count(context.wishlist_count - 1);
        } else {
          console.error('Failed to remove the item');
        }
      } catch (error) {
        console.error('Error removing item from wishlist:', error);
      }

  }

  return (
    <div id="lightbox" className="lightbox clearfix">
      <div className="white_content">
        <button className="textright" onClick={closePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="cart-popup">
          <ul>  <span className='text-3xl '>Wishlist <i className="fa-regular fa-heart"></i> </span>
            {datawislist?.map((item) => (
            
              <li key={item.id} className="d-flex align-items-center position-relative">
                <div className="p-img light-bg">
                  <img src={item.product_img} alt="Product Image" />
                </div>
                <div className="p-data">
                  <h3 className="font-semi-bold">{item.title}</h3>
                  <p className="theme-clr font-semi-bold">
                    ({item.quantity} x ${parseFloat(item.price).toFixed(2)})
                  </p>
                </div>
                <button
                  onClick={() => {handlewishlist_remove(item.id)}}
                  className="remove-btn"
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total d-flex align-items-center justify-content-between">
            <span className="font-semi-bold">Total:</span>
            <span className="font-semi-bold">${total?.toFixed(2)}</span>
          </div>

          <div className="cart-btns d-flex align-items-center justify-content-between">
            <Link to="/view-cart" className="font-bold">
              View Cart
            </Link>
            <Link to="/checkout" className="font-bold theme-bg-clr text-white checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
