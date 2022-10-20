import { 
    ChakraProvider,
    Input,
    Box,
    Center
} from '@chakra-ui/react'

export const Card = () =>{
    return(
        <ChakraProvider>
            <Center paddingTop='30px'>
            <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
        Insira seus dados:
        <Input placeholder="email" />
        <Input placeholder="password" />
        </Box>
        </Center>
        </ChakraProvider>
    )
}