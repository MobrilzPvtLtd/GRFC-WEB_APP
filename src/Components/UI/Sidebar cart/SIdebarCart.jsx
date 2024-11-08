import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import food1 from '../../../images_new/img/food-categorie-1.png';
import food2 from '../../../images_new/img/food-categorie-2.png';

const SIdebarCart = ({visible}) => {
    const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => setIsVisible(false);
  useEffect(()=>{
    setIsVisible(visible);
  },[visible])
  console.log("isvisible " , isVisible)
  const cartItems = [
    { id: 1, name: 'Brown Sandwich', quantity: 1, price: 10.5, image: food1 },
    { id: 2, name: 'Banana Leaves', quantity: 1, price: 12.6, image: food2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isVisible) return null;
  return (
    <div id="lightbox" className="lightbox clearfix">
      <div className="white_content">
        <button className="textright" onClick={closePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="cart-popup">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="d-flex align-items-center position-relative">
                <div className="p-img light-bg">
                  <img src={item.image} alt="Product Image" />
                </div>
                <div className="p-data">
                  <h3 className="font-semi-bold">{item.name}</h3>
                  <p className="theme-clr font-semi-bold">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <button onClick={() => alert(`Remove ${item.name} from cart`)} className="remove-btn">
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total d-flex align-items-center justify-content-between">
            <span className="font-semi-bold">Total:</span>
            <span className="font-semi-bold">${total.toFixed(2)}</span>
          </div>

          <div className="cart-btns d-flex align-items-center justify-content-between">
            <a href="/view-cart" className="font-bold">View Cart</a>
            <a href="/checkout" className="font-bold theme-bg-clr text-white checkout">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SIdebarCart
