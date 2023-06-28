import axios from "axios";
import { useContext, useState } from "react";
import { api } from "../api"
import { AppContext } from "../components/AppContext";
import Api from "../services/index"


//export const login = async (email: string, senha: string): Promise<boolean> =>{

//    const data: any = await api
//    if(email !== data.email || senha !== data.password){
//        return false
//    }
//    return true
//}

interface User {
  //name: string,
  email: string,
  password: string
}



export const login = async (email: string, senha: string): Promise<string[]> =>{

    const user: User = {
      //name: "José",
      email: email,
      password: senha
    }
    const retorno = await 
    Api.post('login', user)
      .then(function (response) {
        console.log(response);
        return response.data.token
      })
      .catch(function (error) {
        console.log(error);
      });
      
      return retorno
    

}