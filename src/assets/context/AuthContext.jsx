import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const login = (email, password) => {

        if (
            email === "admin@gmail.com" &&
            password === "123456"
        ) {

            setUser({
                name: "Durvesh",
                email
            });

            return true;
        }

        return false;

    };

    const logout = () => {

        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;