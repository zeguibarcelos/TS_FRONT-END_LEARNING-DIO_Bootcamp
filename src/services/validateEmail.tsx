import Api from ".";

export const validateEmail = async (email: string): Promise<string | any> => {
  
    const retorno = await 
    Api.get(email)
      .then(function (response) {
        console.log(response.data);
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      });
      
      return retorno
    
}