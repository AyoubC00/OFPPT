import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) =>
{
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || {});

    const headers = new Headers({ 
        "Content-Type": "application/json",
        "Access-Allow-Origin": "*",
        "Accept": "application/json",
        "Authorization": `Bearer ${ user.token }`
    });
    
    const auth = async ( userCredintials ) =>
    {
        const response = await fetch(`${ import.meta.env.VITE_API }/login`, {
            method: "POST",
            headers,
            body: JSON.stringify(userCredintials)
        });

        if (response.ok) {
            const userData = await response.json();
            sessionStorage.setItem("user", JSON.stringify(userData));
            setUser( { ...userData } );
        } else return "Invalid Credentials"
    }

    const logout = async () =>
    {
        const response = await fetch(`${ import.meta.env.VITE_API }/logout`, {
            method: "POST",
            headers
        });
        console.log("Logged out", response)
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
