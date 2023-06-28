import axios from "axios";
import { useContext, useState } from "react";
import { api } from "../api"
import { AppContext } from "../components/AppContext";
import Api from "../services/index"

interface User {
  userId: string,
  name: string,
  email: string
}

export const getUserContent = async (userId: string, token: string): Promise<User> => {
  
  const retorno = await 
  Api.get(`/user/${userId}`, {headers: {
    Authorization: `Bearer ${token}`
  }})
      .then(function (response) {
        console.log(response);
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      });
      
      return retorno
    

}