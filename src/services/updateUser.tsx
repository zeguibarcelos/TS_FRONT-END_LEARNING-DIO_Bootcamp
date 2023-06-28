import Api from "./index"

interface User {
  userId: string,
  name: string | any,
  email: string | any,
  password: string | any
}

export const UpdateUser = async (token:string, user: User) =>{
     try {
      // 👇️ const data: CreateUserResponse
      const { data } = await Api.put(
        `user/${user.userId}`,      
      { userId: user.userId, name: user.name, email: user.email, password: user.password }, {headers: { Authorization: `Bearer ${token}`} });

      console.log(JSON.stringify(data, null, 4));
  
      return data;

    } catch (error) {
        console.log('unexpected error: ', error);
        return false
      }
    }
  