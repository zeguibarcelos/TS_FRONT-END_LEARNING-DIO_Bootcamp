
import { login } from "../src/services/login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

/*jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({     
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))*/

describe('login', () =>{

    
    const mockEmail = 'zezin@gmail.com'
    const mockSenha = '1234'
    
    //const mockAlert = jest.fn()
    //window.alert = mockAlert

    it('deve exibir um alert com boa vindas caso o email e senha sejam válido', async() =>{
        const response = await login(mockEmail, mockSenha)
        
        expect(response).toBeTruthy()
        //expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        //expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
        //expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

   /* it('não deve receber mensagem de boas vindas sem o email', async() =>{
        await login(mockEmail)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })*/

    it('Deve exibbir um erro caso o email ou a senha seja inválido', async()=>{
        const response = await login('email@invalido.com', 'senhainvalida')
        expect(response).toBeFalsy()
        //expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith(true)
        //expect(mockNavigate).not.toHaveBeenCalled()
        //expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })

})

