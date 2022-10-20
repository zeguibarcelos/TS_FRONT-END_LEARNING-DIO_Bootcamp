import { 
    ChakraProvider,
    Heading,
    Box,
    Center,
    Image
} from '@chakra-ui/react'

export const Header = () =>{
    return(
        
        <Box backgroundColor='#22074C' padding='15px'>
            <Center>
            <Heading as='h2' size='xl' color='white' paddingRight='10px'>
            Projeto Dio Bank
            </Heading>
                <Image
                boxSize='50px' 
                src='https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png' alt='logo dio minimizada'
                />

            </Center>
        </Box>
        
    )
}