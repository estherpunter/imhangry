import {createContext, useEffect, useState} from "react";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');

    })
}
