import { Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"

interface UserData {
    email: string
    password: string
    name: string,
    balance: number,
    id: string
}

const Conta = () =>{
    const [userData, setUserData] = useState<null | UserData>()
    const {id} = useParams()
    const navigate = useNavigate()

    const {isLoggedIn} = useContext(AppContext)

    const context = useContext(AppContext)
    console.log('retorno da página conta', isLoggedIn)
    
    

    useEffect(() =>{
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, []) //parar função async

    const actualData = new Date()

    //console.log(userData?.name)

    


    if(userData && id !== userData.id){ // se userData for carregado corretamente (diferente de null) e o id inserido for diferente do userData.id definido pelo api, então será redirecionado para a página inicial
        navigate('/')
    }
    !isLoggedIn && navigate('/')
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop='16px'>
                {
                    userData === null || userData === undefined
                        ? (
                            <Center>
                                <Spinner size='xl' color='white' />
                            </Center>
                        ) :
                        <>
                        <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData?.getDay()} / ${actualData?.getMonth()} / ${actualData?.getFullYear()} / ${actualData?.getHours()}:${actualData?.getMinutes()}`} />
                        <CardInfo mainContent = 'Saldo' content = {`R$ ${userData?.balance}`}/>
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