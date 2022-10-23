import { api } from "../api"

export const login = async (email: string, senha: string): Promise<boolean> =>{
    
    //const {setIsLoggedIn} = useContext(AppContext)
    //const navigate = useNavigate()
    
    const data: any = await api

    if(email !== data.email || senha !== data.password){
        return false
    }

    return true
    //setIsLoggedIn(true)
    //navigate(`/${data.id}`)
    //alert(`Bem vindo ${email}!`)
}