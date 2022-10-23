import {
    ChakraProvider,

} from '@chakra-ui/react'

export const Card = ({children}: any) => {    
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}