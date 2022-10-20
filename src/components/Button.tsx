import { login } from '../services/login';

import { 
    Button,
    ChakraProvider,
    Center
} from '@chakra-ui/react'


export const Botão = () =>{
    return(
        <ChakraProvider>
            <Center paddingTop='15px'>
        <Button onClick={login} colorScheme='purple' size='lg'>
            Enviar
          </Button>
          </Center>
        </ChakraProvider>
    )
}