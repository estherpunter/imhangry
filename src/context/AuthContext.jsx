import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            void login(token);
        } else {
            setIsAuth({
                ...isAuth,
                status: 'done',
            });
        }
    }, []);

    const navigate = useNavigate();

    async function login(token) {
        localStorage.setItem('token', token);

        const userInfo = jwtDecode(token);
        const userId = userInfo.sub;

        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response);

            setIsAuth({
                isAuthenticated: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                },
                status: 'done',
            })
        } catch (e) {
            console.error(e);
            setIsAuth({
                ...isAuth,
                status: 'done',
            })
        }
        console.log('gebruiker is ingelogd')

        navigate('/profile');
    }

    function logout() {
        localStorage.clear();
        setIsAuth({
            isAuthenticated: false,
            user: null,
            status: 'done',
        });
        console.log('Je bent nu uitgelogd');
        navigate('/');
    }

    const data = {
        ...isAuth,
        login: login,
        logout: logout,
        navigate: navigate,
    };

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;