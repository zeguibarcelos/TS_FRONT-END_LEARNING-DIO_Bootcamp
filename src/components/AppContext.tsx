import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    token: string,
    setToken: (token: string) => void,
    isLoggedIn: boolean, //estado global
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    userId: string,
    setUserId: (userId: string) => void
  }
  
  export const AppContext = createContext({} as IAppContext)
  
  
  export const AppContextProvider = ({children}: any) =>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const [token, setToken] = useState<string>('')

    const [userId, setUserId] = useState<string>('')
    
    const storage = getAllLocalStorage()

    

    useEffect(() => { 

      if(storage){
        const {login} =  JSON.parse(storage)  //converte uma string para um objeto
        setIsLoggedIn(login)
        const {userId} = JSON.parse(storage)      
        setUserId(userId) 
        const {token} = JSON.parse(storage)      
        setToken(token)  
       }

    }, [])



    

    return(
      <AppContext.Provider value={{isLoggedIn, token, userId, setIsLoggedIn, setToken, setUserId}}>
        {children}
      </AppContext.Provider>
    )
  }