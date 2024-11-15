import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import food1 from '../../../images_new/img/food-categorie-1.png';
import food2 from '../../../images_new/img/food-categorie-2.png';
import { Link } from 'react-router-dom';
import { ValueContext } from '../../Context/Context_Hook';

const SIdebarCart = ({visible}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [value , setValue] = useState([]);
    const [count , setCount] = useState(0); 
    const context = useContext(ValueContext);
    const cartItems = [
      { id: 1, name: 'Brown Sandwich', quantity: 1, price: 10.5, image: food1 },
      { id: 1, name: 'Brown Sandwich', quantity: 1, price: 10.5, image: food1 },
      { id: 1, name: 'Brown Sandwich', quantity: 1, price: 10.5, image: food1 },
      { id: 2, name: 'Banana Leaves', quantity: 1, price: 12.6, image: food2 },
    ];
   

  const closePopup = () => setIsVisible(false);
  useEffect(()=>{
    setIsVisible(visible);
  },[visible])
  // console.log("isvisible24 " , isVisible)


  



  useEffect(()=>{
    
    const filterFunc = (arr) => {
      const repeatedId = {};
      let idCount = 1;
      const newArray = arr.filter((item) => {
        if (!repeatedId[item.id]) {
          repeatedId[item.id] = true;
          return true;
        }
        else if(repeatedId[item.id]){
          idCount ++;
        }
        return false;
      });
      console.log('price kya h',newArray)
      setValue(newArray);
      setCount(idCount);
    }
   
    filterFunc(context.dataArray)
  },[context.dataArray])
 
  console.log('new array' ,  value , " repeat"  , count )
  console.log('data123', context.dataArray)



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
            {value.map((item , index) => (
              <li key={item.id} className="d-flex align-items-center position-relative">
                <div className="p-img light-bg">
                  <img src={item.image} alt="Product Image" />
                </div>
                <div className="p-data">
                  <h3 className="font-semi-bold">{item.name}</h3>
                  <p className="theme-clr font-semi-bold">
                {(index ==1)? 
                <div>(1 x ${parseInt(item.price).toFixed(2)}) </div> 
                  : <div>({count} x ${parseInt(item.price).toFixed(2)}) </div>}  
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
            <Link to="/view-cart" className="font-bold">View Cart</Link>
            <Link to="/checkout" className="font-bold theme-bg-clr text-white checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SIdebarCart;
