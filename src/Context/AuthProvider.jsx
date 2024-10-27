import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('isLoggedIn');
        if (storedUser) {
          setIsLoggedIn(JSON.parse(storedUser));
        }
      }, []);

    const login = (userData) => {
        sessionStorage.setItem('isLoggedIn', JSON.stringify(userData));
        setIsLoggedIn(userData);
      };

      const logout = () => {
        sessionStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      };

    const value = {
        isLoggedIn,
        login,
        logout
    }

    return(
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    
)}