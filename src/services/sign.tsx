import Api from "./index"

interface User {
  name: string,
  email: string,
  password: string
}



export const Sign = async (name: string, email: string, senha: string): Promise<User| boolean> =>{
     try {
      // 👇️ const data: CreateUserResponse
      const { data } = await Api.post<User>(
        'user',
        { name: name, email: email, password: senha },
      );
      
      console.log(JSON.stringify(data, null, 4));
  
      return data;

    } catch (error) {
        console.log('unexpected error: ', error);
        return false
      }
    }
  
