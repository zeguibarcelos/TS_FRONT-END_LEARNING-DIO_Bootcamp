const conta = {
    email: 'test@dio.bank.com',
    password: '1234',
    name: 'Name',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((retorno) => {
    setTimeout(() =>{
        retorno(conta)
    }, 1000)
})