import {React, createContext,useState} from 'react';
export const ValueContext= createContext();

export const ValueProvider = ({ children }) => {
    // const [theme, setTheme] = useState('light');

    const[Cart_num, setCart_num]=useState(0)

    return (
        <ValueContext.Provider value={{Cart_num, setCart_num }}>
            {children}
        </ValueContext.Provider>
    );
};