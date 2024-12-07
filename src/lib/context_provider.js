import React, { useEffect } from 'react'
import { useState } from "react";


export const Context = React.createContext({
    user: null,
    setUser: ()=>{},
    loading: false,
});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
    
    return (
        <Context.Provider value={{
            user,
            setUser,
            loading,
        }}>
            {children}
          
        </Context.Provider>
    );
}

export default ContextProvider;