import { Box, Center, Heading, Input, Text } from "@chakra-ui/react";
import { sign } from "crypto";
import { stringify } from "querystring";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Botão } from "../components/Button";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { Sign} from "../services/sign"
import { changeLocalStorage } from "../services/storage";
import { validateEmail } from "../services/validateEmail";

const SignUp = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')    
    
    const { setIsLoggedIn } = useContext(AppContext)
    const {setToken} = useContext(AppContext)
    const {setUserId} = useContext(AppContext)
    const navigate = useNavigate()
   

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
      }
  

const createUser = async (name: string, email: string, senha: string) => {

    const EmailValid = await isValidEmail(email)

    if(!EmailValid){
        alert('email invalido')
    }else{

    if(!name || !email || !senha){

        alert('Preencha todos os dados!')

    }else{

    const loggedIn = await validateEmail(email)

    if (Object.keys(loggedIn).length === 0) {
        Sign(name, email, senha)
        alert('Usuário Criado!')
        navigate('/')
        
    }else {
        alert('O email informado já existe!')
    }
}
}
}
    return (
        <Card>
            <Center padding='30px'>
                <Box backgroundColor='white' borderRadius='25px' padding='25px'>
                    <Box padding='10px'> <Text as='b' color='black'>Faça o seu cadastro:</Text></Box>
                    <Input borderRadius='25px' placeholder="name" value={name} onChange={(event) => setName(event.target.value)} />
                    <Input borderRadius='25px' placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Input borderRadius='25px' placeholder="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
                    <Center paddingTop='15px'>
                        {/*<Botão onClick={() => login(email)} />*/}
                        <Botão onClick={() => createUser(name, email, senha)}> Criar </Botão>
                    </Center>
                </Box>
            </Center>
        </Card>
    )
}

export default SignUp;