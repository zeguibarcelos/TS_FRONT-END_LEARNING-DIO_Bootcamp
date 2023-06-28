import {
    Heading,
    Box,
    Center,
    Image,
    Flex,
    Spacer,
    Button
} from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = (): void => {
        setIsLoggedIn(false)
        changeLocalStorage({ login: false, userId:'', token:'' })
        navigate('/')
    }

    return (
        <Flex backgroundColor='#22074C' padding='5px'>
            <Box>
                <Center>
                    <Heading as='h2' size='xl' color='white' padding='10px'>
                        Projeto Dio Bank
                    </Heading>
                    <Image
                        boxSize='50px'
                        src='https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png' alt='logo dio minimizada'
                    />

                </Center>
            </Box>
            { //validação condicional
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => {
                            logout()
                        }}>
                            Sair
                        </Button>
                    </>
                )
            }
        </Flex>

    )
}