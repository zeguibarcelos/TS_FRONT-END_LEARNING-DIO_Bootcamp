import { Box, Center, Heading, Input, Text } from "@chakra-ui/react";
import { stringify } from "querystring";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Botão } from "../components/Button";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    
    const { setIsLoggedIn } = useContext(AppContext)
    const {setToken} = useContext(AppContext)
    const {setUserId} = useContext(AppContext)
    const navigate = useNavigate()
   
   /*
    const validateUser = async (email: string, senha: string) => {
        const loggedIn = await login(email, senha)

        if (!loggedIn) {
            alert('Email ou senha inválidos!') //ou uso else ou defino retorno
        }
        else {
            setIsLoggedIn(true)
            changeLocalStorage({login: true, email: email, senha: senha})
            navigate('/conta/1')
        }
    }

*/
const validateUser = async (email: string, senha: string) => {


    const loggedIn: string[] = await login(email, senha)

    if (!loggedIn) {
        alert('Email ou senha inválidos!') //ou uso else ou defino retorno
    }
    else {
        setIsLoggedIn(true)
        changeLocalStorage({login: true, userId: loggedIn[1], token: loggedIn[0]})
        setToken(loggedIn[0])
        setUserId(loggedIn[1])
        navigate('/conta/1')
        
    }
    
}

    return (
        <Card>
            <Center padding='30px'>
                <Box backgroundColor='white' borderRadius='25px' padding='25px'>
                    <Box padding='10px'> <Text as='b' color='black'>Faça o login:</Text></Box>

                    <Input borderRadius='25px' placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Input borderRadius='25px' placeholder="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
                    <Center paddingTop='15px'>
                        {/*<Botão onClick={() => login(email)} />*/}
                        <Botão onClick={() => validateUser(email, senha)}> Fazer Login </Botão>
                        <Botão onClick={() => {navigate('/signUp')}}> Criar Conta </Botão>
                    </Center>
                </Box>
            </Center>
        </Card>
    )
}

export default Home;