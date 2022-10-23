import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = ({children}: any) =>{

    return(
        <Box minHeight='100vh' backgroundColor='#8d9c98'>
            <Header/>
            {children}
        </Box>
    )

}