import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    user: string,
    senha: string,
    isLoggedIn: boolean, //estado global
    setIsLoggedIn: (isLoggedIn: boolean) => void
  }
  
  export const AppContext = createContext({} as IAppContext)
  
  
  export const AppContextProvider = ({children}: any) =>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [user, setUser] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    
    const storage = getAllLocalStorage()

    

    useEffect(() => { 

      if(storage){
        const {login} =  JSON.parse(storage)  //converte uma string para um objeto
        setIsLoggedIn(login)
        const {email} = JSON.parse(storage)      
        setUser(email)  
        const {senha} = JSON.parse(storage)      
        setSenha(senha)  
       }

    }, [])



    

    return(
      <AppContext.Provider value={{user, senha, isLoggedIn, setIsLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }