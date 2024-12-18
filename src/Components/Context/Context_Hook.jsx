import { React, createContext, useState } from "react";
export const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  // const [theme, setTheme] = useState('light');

  const [Cart_num, setCart_num] = useState(0);
  const [dataProduct, setdataProduct] = useState([]);
  const [id, setId] = useState([]);
  const [titlename, setTitle_name] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    cpassword: "",
    dob: "",
    identif: "",
    name: "",
    address: "",
    phone: "",
  });
  const [subproduct_data, setSubproduct_data] = useState([]);
  const [wishlist_value,setWishlist_value] =useState(0)
  const [wishlist_count,setWishlist_count] =useState(0)
  const [wishlist_data,setWishlist_Data] =useState([])
  const [total_sum,setTotal_Sum] =useState()
   const [api_cartitems, setApi_cartitems] = useState();
    const [userData, setUserData] = useState();
     const [cartItems, setCartItems] = useState([]);
  

  return (
    <ValueContext.Provider
      value={{
        Cart_num,
        setCart_num,
        dataProduct,
        setdataProduct,
        id,
        setId,
        dataArray,
        setDataArray,
        credentials,
        setCredentials,
        setTitle_name,
        titlename,
        setSubproduct_data,
        subproduct_data,
        wishlist_value,
        setWishlist_value,
        wishlist_data,
        setWishlist_Data,
        wishlist_count,
        setWishlist_count,
        total_sum, 
        setTotal_Sum,
        api_cartitems, 
        setApi_cartitems,
        userData, 
        setUserData,
        cartItems, setCartItems
       
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
