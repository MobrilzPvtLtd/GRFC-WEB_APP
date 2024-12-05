import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import food1 from '../../../images_new/img/food-categorie-1.png';
import food2 from '../../../images_new/img/food-categorie-2.png';
import { Link } from 'react-router-dom';
import { ValueContext } from '../../Context/Context_Hook';
import axios from 'axios';

const SidebarCart = ({ visible }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const[api_cartitems, setApi_cartitems]= useState()
  let token = sessionStorage.getItem('token')
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

    setCartItems(transformedItems);
  }, [context.dataArray , context.subproduct_data]);

  useEffect(()=>{
    if(isVisible){

      Fetch_cartdata()
    }
   
  },[token,isVisible])

  const Fetch_cartdata = async()=> {  
    const data_api = await axios.get(`${url}/cart`,  {
      headers: {
         Authorization: token,
        "Content-Type": "application/json",
      },
    })
    // console.log('dasdad',data_api)
    setApi_cartitems(data_api.data.data)
  }

  //  console.log('dlkasjk')

  const total = api_cartitems?.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCartRemove = async(id)=>{
    console.log('remove cart item', id)
     
        const removedata= await axios.delete(`${url}/cart/${id}`,{
          headers: {
             Authorization: token,
            "Content-Type": "application/json",
          },
        })
        Fetch_cartdata()
       console.log('sdsd',removedata)
        // setCartItems(removedata)
       
      }
     
    // Close the sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  if (!isVisible) return null;
  console.log('123456',context.dataArray, 'cartuiop',cartItems , 'api dataa', api_cartitems)
  return (
    <div id="lightbox" className="lightbox clearfix" >
      <div className="white_content" ref={sidebarRef}>

        <button className="textright" onClick={closePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="cart-popup">
          <ul>
            {api_cartitems?.map((item) => (
              <li key={item.id} className="d-flex align-items-center position-relative">
                <div className="p-img light-bg">
                  <img src={item?.product_img} alt="Product Image" />
                </div>
                <div className="p-data">
                  <h3 className="font-semi-bold">{item?.title}</h3>
                  <p className="theme-clr font-semi-bold">
                    ({item.quantity} x ${parseFloat(item.price)?.toFixed(2)})
                  </p>
                </div>
                <button
                  onClick={() =>handleCartRemove(item.id) } 
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
            <Link to="/view-cart" className="font-bold">View Cart</Link>
            <Link to="/checkout" className="font-bold theme-bg-clr text-white checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCart;









// import React, { useContext, useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
// import food1 from '../../../images_new/img/food-categorie-1.png';
// import food2 from '../../../images_new/img/food-categorie-2.png';
// import { Link } from 'react-router-dom';
// import { ValueContext } from '../../Context/Context_Hook';

// const SIdebarCart = ({visible}) => {
//     const [isVisible, setIsVisible] = useState(true);
//     const [value , setValue] = useState([]);
//     const [count , setCount] = useState(0); 
//     const context = useContext(ValueContext);
//     const cartItems = [
//       { id: 1, name: 'Brown Sandwich', quantity: 1, price: 10.5, image: food1 },
//       { id: 1, name: 'Brown Sandwich', quantity: 1, price: 10.5, image: food1 },
//       { id: 1, name: 'Brown Sandwich', quantity: 1, price: 10.5, image: food1 },
//       { id: 2, name: 'Banana Leaves', quantity: 1, price: 12.6, image: food2 },
//     ];
   

//   const closePopup = () => setIsVisible(false);
//   useEffect(()=>{
//     setIsVisible(visible);
//   },[visible])
//   // console.log("isvisible24 " , isVisible)


  



//   useEffect(()=>{
    
//     const filterFunc = (arr) => {
//       const repeatedId = {};
//       let idCount = 1;
//       const newArray = arr.filter((item) => {
//         if (!repeatedId[item.id]) {
//           repeatedId[item.id] = true;
//           return true;
//         }
//         else if(repeatedId[item.id]){
//           idCount ++;
//         }
//         return false;
//       });
//       console.log('price kya h',newArray)
//       setValue(newArray);
//       setCount(idCount);
//     }
   
//     filterFunc(context.dataArray)
//   },[context.dataArray])
 
//   console.log('new array' ,  value , " repeat"  , count )
//   console.log('data123', context.dataArray)



//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (!isVisible) return null;
//   return (
//     <div id="lightbox" className="lightbox clearfix">
//       <div className="white_content">
//         <button className="textright" onClick={closePopup}>
//           <FontAwesomeIcon icon={faCircleXmark} />
//         </button>
//         <div className="cart-popup">
//           <ul>
//             {value.map((item , index) => (
//               <li key={item.id} className="d-flex align-items-center position-relative">
//                 <div className="p-img light-bg">
//                   <img src={item.image} alt="Product Image" />
//                 </div>
//                 <div className="p-data">
//                   <h3 className="font-semi-bold">{item.name}</h3>
//                   <p className="theme-clr font-semi-bold">
//                 {(index ==1)? 
//                 <div>(1 x ${parseInt(item.price).toFixed(2)}) </div> 
//                   : <div>({count} x ${parseInt(item.price).toFixed(2)}) </div>}  
//                   </p>
//                 </div>
//                 <button onClick={() => alert(`Remove ${item.name} from cart`)} className="remove-btn">
//                   <FontAwesomeIcon icon={faCircleXmark} />
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-total d-flex align-items-center justify-content-between">
//             <span className="font-semi-bold">Total:</span>
//             <span className="font-semi-bold">${total.toFixed(2)}</span>
//           </div>

//           <div className="cart-btns d-flex align-items-center justify-content-between">
//             <Link to="/view-cart" className="font-bold">View Cart</Link>
//             <Link to="/checkout" className="font-bold theme-bg-clr text-white checkout">Checkout</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SIdebarCart;
