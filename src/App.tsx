import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';



function App(): any {

  /*if(!getAllLocalStorage()){
    createLocalStorage();
  }*/

  !getAllLocalStorage() && createLocalStorage()
  
  
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
