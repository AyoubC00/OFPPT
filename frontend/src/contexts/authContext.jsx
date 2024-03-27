import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "../utils/getToken";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) =>
{
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || {});
    const headers = new Headers({ 
        "Content-Type": "application/json",
        "Accept": "application/json",
    });
    
    const auth = async ( userCredentials ) =>
    {
        const response = await fetch(`${ import.meta.env.VITE_API }/login`, {
            method: "POST",
            headers,
            body: JSON.stringify(userCredentials)
        });
        if (!response.ok) return "Invalid credentials"

        const userData = await response.json();
        sessionStorage.setItem("user", JSON.stringify(userData));
        setUser( { ...userData } );

    }

    const logout = async () =>
    {
        const headers = new Headers({ 
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": getToken()
        });
        const response = await fetch(`${ import.meta.env.VITE_API }/logout`, {
            method: "POST",
            headers
        });
        if (response.ok) {
            sessionStorage.removeItem("user");
            setUser({})
            navigate("/");
        }
    }

    const values = {
        auth,
        logout,
        user
    }

    return (
        <AuthContext.Provider value={ { ...values } }>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
