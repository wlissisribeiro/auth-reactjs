import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

type User = {
    name: string
    email: string
    id: string

}

type ContextType = {
    SignIn: (email: string, password: string) => Promise<void>
    SignOut: () => void
    user: User | null | Function
    isAuthenticate: boolean
}


export const Context = createContext({} as ContextType);



export function ContextProvider({ children }: { children: JSX.Element }) {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);

    const [token, setToken] = useState(() => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            return token
        } else {
            return null
        }
    });

    //faz a persistencia dos dados do usuário quando atualizar a página
    useEffect(()=>{
        const user = localStorage.getItem("dataUser");
        setUser(user ? JSON.parse(user): null)
    },[])

    let isAuthenticate = !!user

    async function SignIn(email: string, password: string) {
        const result = await api.post("/login", { email, password });

        //salva o token no headers da aplicação
        api.defaults.headers.authorization = `Bearer ${result.data.token}`

        //se nao tiver um token nao envia nada para o localstorage
        if (result.data.token == undefined) {
            localStorage.clear()
            return;
        }

        //salva o token e do usuário no localstorage
        localStorage.setItem("accessToken", result.data.token)
        localStorage.setItem("dataUser", JSON.stringify(result.data.dataUser))

        setUser(result.data.dataUser);
        setToken(result.data.token);

        //redireciona a rota
        navigate("/home");
    }

    function SignOut() {
        //desloga o usuário
        setUser(null);
        navigate("/")

    }

    return (
        <Context.Provider value={{ user, SignIn, SignOut, isAuthenticate }}>
            {children}
        </Context.Provider>
    )
}