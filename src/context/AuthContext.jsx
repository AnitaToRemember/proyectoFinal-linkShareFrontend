import { createContext, useEffect, useState } from "react";
import { userServices } from "../services";

export const AuthContext = createContext();

export const AuthProvideComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
  localStorage.setItem("token", token)
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await userServices.getMyUserDataService({token})
        setUser(data.user)
      } catch (error) {
        logout();
        
      }
      
    }
    if(token) getUserData()
  
  }, [token])

  const login = (token) => {
    setToken(token);
  }

  const logout = () => {
    setToken("");
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
