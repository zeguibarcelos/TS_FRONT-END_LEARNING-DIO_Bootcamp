import { Header } from './components/Header'
import {
  Box
} from '@chakra-ui/react'
import { Card } from './components/Card';
import { Botão } from './components/Button';


function App(): any {
  return (
    <>    
    <Box minHeight='100vh' backgroundColor='#8d9c98'>
    <Header/>
    <Card/>
    <Botão/>
    </Box>
    </>
  );
}

export default App;
