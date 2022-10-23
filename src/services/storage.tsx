interface IDioBank {
    login: boolean;
    email: string;
    senha: string;
}

const dioBank = {
    login: false,
    email: '',
    senha: ''
}

export const getAllLocalStorage = (): string | null =>{
    return localStorage.getItem('diobank')
}

export const createLocalStorage = ():void =>{
    localStorage.setItem('diobank', JSON.stringify(dioBank)) //converte objeto em string
}

export const changeLocalStorage = (dioBank: IDioBank): void =>{
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}