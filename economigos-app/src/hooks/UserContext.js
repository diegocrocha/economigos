import React from 'react'
import api from '../services/api'
import { toast } from 'react-toastify';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const userLogout = React.useCallback(async function userLogout() {
        setDados(false)
        setLogin(false)
        setError(null)
        setLoading(false)
    }, [])

    async function userLogin(email, password) {
        try {
            setError(null);
            setLoading(true);
            const userData = await api
                .post("economigos/sessao/login", {
                    email: email,
                    senha: password
                })
            if (userData.status !== 200) throw new Error('Email e/ou senha inválidos!')
            const { data } = userData;
            setDados(data);
            setLogin(true);
            localStorage.setItem("email", email);
            localStorage.setItem("senha", password);
            // console.log(data);
        } catch (err) {
            setError(err.message)
            setLogin(false);
            toast.error("E-mail e/ou senha inválida!")
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        async function autoLogin() {
            const email = window.localStorage.getItem('email');
            const senha = window.localStorage.getItem('senha');

            if (email && senha) {
                try {
                    setError(null);
                    setLoading(true);
                    // const response = await user.get('/VALIDATE_JWT', {
                    //     headers: {
                    //         'Authorization': `Bearer ${token}`
                    //     }
                    // })
                    // if (response.status !== 200) throw new Error('Token inválido');
                    // getUser(email);
                    userLogin(email,senha);
                } catch (error) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin()
    }, [userLogout])

    return (
        <UserContext.Provider value={{ userLogin, dados, loading, login, error }}>
            {children}
        </UserContext.Provider>
    )
}
