import { Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import { getUserContent } from "../services/contentUser"


interface UserData {
    email: string
    password: string
    name: string,
    balance: number,
    id: string
}

interface User {
    userId: string,
    name: string,
    email: string
  }



const Conta = () =>{

    const [userData, setUserData] = useState<null | UserData>()
    const [userContent, setUserContent] = useState<User>()
    const {id} = useParams()
    const navigate = useNavigate()

    const {isLoggedIn} = useContext(AppContext)
    const {token} = useContext(AppContext)
    const {userId} = useContext(AppContext)
    

    const context = useContext(AppContext)
    console.log('retorno da página conta', isLoggedIn)

    useEffect(() => {
        getUserContent(userId, token).then((userContent) => setUserContent(userContent));
      }, [])

    const actualData = new Date()

    //console.log(userData?.name)


    !isLoggedIn && navigate('/')

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop='16px'>
                {  
                userContent === null
                    ? (
                        <Center>
                            <Spinner size='xl' color='white' />
                        </Center>
                    ) :
                        <>
                        <CardInfo mainContent={`Bem vindo ${userContent?.name}`} content={`${actualData?.getDay()} / ${actualData?.getMonth()} / ${actualData?.getFullYear()} / ${actualData?.getHours()}:${actualData?.getMinutes()}`} />
                        <CardInfo mainContent = 'Email Cadastrado' content = {`${userContent?.email}`}/>
                        <Button onClick={() => {
                            navigate('/')
                        }}>
                            Home
                        </Button>
                        <Button onClick={() => {
                            navigate('/infoconta')
                        }}>
                            Dados da conta
                        </Button>
                        </>
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta