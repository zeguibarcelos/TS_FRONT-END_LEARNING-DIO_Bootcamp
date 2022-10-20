import { login } from "./login"

describe('login', () =>{

    const mockAlert = jest.fn()
    window.alert = mockAlert
    it('deve exibir um alert com boa vindas', () =>{
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
})