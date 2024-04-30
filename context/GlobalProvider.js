import { useContext, useEffect, useState, createContext } from "react";
import { getCurrentUser} from "../lib/appwrite";


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {

  const [isLoggedin, setLoggedin] = useState(null);

  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    getCurrentUser
    .then((res)=>{
      if(res){
        setUser(res);
        setLoggedin(true);
      }else{
        setLoggedin(false);
        setUser(null);
      }
    })
      .catch((err)=>{
        console.log(err);
      })
      .finally(()=>{
        setIsLoading(false);
      } )
    
  },[]);

  return <GlobalContext.Provider value={{
    isLoggedin,
    setLoggedin,
    user,
    setUser,
    isLoading,
    setIsLoading
  }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider