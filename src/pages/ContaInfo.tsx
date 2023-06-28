import { Box, Center, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { Botão } from "../components/Button"
import { Card } from "../components/Card"
import CardInfo from "../components/CardInfo"
import { DeleteUser } from "../services/deleteUser"
import { login } from "../services/login"
import { changeLocalStorage, createLocalStorage } from "../services/storage"
import { UpdateUser } from "../services/updateUser"

interface User {
    userId: string,
    name: string | any,
    email: string | any,
    password: string | any
}

const ContaInfo = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const { userId } = useContext(AppContext)
    const { token } = useContext(AppContext)

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)

    const navigate = useNavigate()

    !isLoggedIn && navigate('/')

    const [buttonPress1, setButtonPress1] = useState<boolean>()
    const [buttonPress2, setButtonPress2] = useState<boolean>()

    const validateUser = async (email: string, senha: string): Promise<boolean | any> => {

        const loggedIn: string[] = await login(email, senha)
        if (!loggedIn) {
            alert('Email ou senha inválidos!') //ou uso else ou defino retorno
        }
        else {
            DeleteUser(userId, token)
            alert('Usuário Deletado!')
            changeLocalStorage({ login: false, userId: '', token: '' })
            setIsLoggedIn(false)
            navigate('/')
        }
    }

    const updateUser = async (name:string, email: string, senha: string): Promise<boolean | any> => {

            let user: User = {
                userId: userId,
                name: "empty",
                email: "empty",
                password: "empty"
            }



            if(name){
                user.name = name
            }
            if(email){
                user.email = email
            }
            if(senha){
                user.password=senha
            }

            UpdateUser(token, user)
            alert('Dados Alterados!')
            setButtonPress2(false)
            navigate('/conta/1')
    }

    return (

        (buttonPress1 === undefined || buttonPress1 === null) && (buttonPress2 === undefined || buttonPress2 === null)
            ? (
                <Center>
                    <SimpleGrid columns={2} spacing={8} padding='50px'>
                        <>
                            <CardInfo mainContent={'ID:'} content={`${userId}`} />
                            <CardInfo mainContent={'Token:'} content={`${token}`} />
                            <Botão onClick={() => { setButtonPress1(true) }}> Deletar Conta </Botão>
                            <Botão onClick={() => { setButtonPress2(true) }}> Alterar Dados </Botão>
                        </>
                    </SimpleGrid>
                </Center>
            ) 
            :buttonPress1 === undefined
            ? (
                <Card>
                <Center padding='30px'>
                    <Box backgroundColor='white' borderRadius='25px' padding='25px'>
                        <Box padding='10px'> <Text as='b' color='black'>Altere o seu cadastro:</Text></Box>
                        <Input borderRadius='25px' placeholder="name" value={name} onChange={(event) => setName(event.target.value)} />
                        <Input borderRadius='25px' placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <Input borderRadius='25px' placeholder="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
                        <Center paddingTop='15px'>
                            {/*<Botão onClick={() => login(email)} />*/}
                            <Botão onClick={() => updateUser(name, email, senha)}> Alterar </Botão>
                        </Center>
                    </Box>
                </Center>
            </Card>
            ):
            <Card>
                <Center padding='30px'>
                    <Box backgroundColor='white' borderRadius='25px' padding='25px'>
                        <Box padding='10px'> <Text as='b' color='black'>Por favor, confirme seus dados:</Text></Box>

                        <Input borderRadius='25px' placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <Input borderRadius='25px' placeholder="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
                        <Center paddingTop='15px'>
                            {/*<Botão onClick={() => login(email)} />*/}
                            <Botão onClick={() => validateUser(email, senha)}> Validar Dados </Botão>
                        </Center>
                    </Box>
                </Center>
            </Card>

    )
}

export default ContaInfo