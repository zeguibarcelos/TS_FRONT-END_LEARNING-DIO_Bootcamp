import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import CardInfo from "../components/CardInfo"

interface UserData {
    email: string
    password: string
    name: string,
    balance: number,
    id: string
}

const ContaInfo = () =>{
    const { user } = useContext(AppContext)
    const { senha } = useContext(AppContext)
    const [userData, setUserData] = useState<null | UserData>()
    useEffect(() =>{
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, []) //parar função async

    const {isLoggedIn} = useContext(AppContext)

    const navigate = useNavigate()

    !isLoggedIn && navigate('/')

    return(

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
                    <CardInfo mainContent={user} content={'Email salvo no localStorage'} />
                    <CardInfo mainContent = {senha} content = {`Senha salva no localStorage`}/>
                    </>
            }
        </SimpleGrid>
    </Center>
    )
}

export default ContaInfo