import Api from "./index"

export const DeleteUser = async (userId:string, token: string): Promise<string| boolean> =>{
     try {
      // 👇️ const data: CreateUserResponse
      const { data } = await Api.delete(
        'user',      
      { data: { userId: userId}, headers: { Authorization: `Bearer ${token}`} });

      console.log(JSON.stringify(data, null, 4));
  
      return data;

    } catch (error) {
        console.log('unexpected error: ', error);
        return false
      }
    }
  
