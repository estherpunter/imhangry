import {createContext, useEffect, useState} from "react";
// import {jwtDecode} from "jwt-decode";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            void login(token);
        } else {
            setIsAuth(prevState => ({
                ...prevState,
                status: 'done',
            }));
        }
    }, []);

    async function login(token) {
        localStorage.setItem('token', token);

        const userInfo = jwtDecode(token);
        const user = userInfo.sub;

        try {
            const response = await axios.get("https://frontend-educational-backend.herokuapp.com/api/user", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            setIsAuth({
                ...isAuth,
                isAuthenticated: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                },
                status: 'done',
            });
            navigate('/profile');
        } catch (e) {
            console.error(e);
            setIsAuth({
                isAuthenticated: false,
                user: null,
                status: 'done',
            })
        }
    }

    function logout() {
        localStorage.clear();
        setIsAuth({
            isAuthenticated: false,
            user: null,
            status: 'done',
        });
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