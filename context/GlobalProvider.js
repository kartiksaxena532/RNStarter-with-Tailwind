import { useContext, useEffect, useState, createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {

  const [isLoggedin, setLoggedin] = useState(null);

  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

  },[]);

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
