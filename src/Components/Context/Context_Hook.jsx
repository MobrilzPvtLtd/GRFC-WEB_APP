import {React, createContext,useState} from 'react';
export const ValueContext= createContext();

export const ValueProvider = ({ children }) => {
    // const [theme, setTheme] = useState('light');

    const[Cart_num, setCart_num]=useState(0)
    const[dataProduct, setdataProduct] = useState([]);
    const[id, setId] = useState([ ]);

    return (
        <ValueContext.Provider value={{Cart_num, setCart_num ,dataProduct, setdataProduct,id, setId}}>
            {children}
        </ValueContext.Provider>
    );
};