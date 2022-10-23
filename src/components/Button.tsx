import { 
    Button,
} from '@chakra-ui/react'
import { MouseEventHandler } from 'react';

interface IDButton{
    onClick: MouseEventHandler
}
export const Botão = ({ onClick}: IDButton) =>{
    return(            
        <Button borderRadius='25px' onClick={onClick} colorScheme='purple' size='lg'>
            Enviar
          </Button>
    )
}