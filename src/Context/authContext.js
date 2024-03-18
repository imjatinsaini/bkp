import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [auth,setAuth] = useState({
        userId: null,
        token: "",
    });

    // Used to maintain state
    useEffect(() => {
        const data = localStorage.getItem('auth');

        if(data){
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                userId: parseData._id,
                token: parseData.token
            })
        }

    }, [auth]);

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};