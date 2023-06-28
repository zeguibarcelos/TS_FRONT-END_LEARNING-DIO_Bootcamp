import { 
    Button,
} from '@chakra-ui/react'
import { MouseEventHandler } from 'react';

interface IDButton{
    onClick: MouseEventHandler,
    children: any
}
export const Botão = ({ onClick, children}: IDButton) =>{
    return(            
        <Button borderRadius='25px' onClick={onClick} colorScheme='purple' size='lg'>
            {children}
          </Button>
    )
}