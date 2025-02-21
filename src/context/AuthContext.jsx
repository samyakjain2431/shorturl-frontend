import { createContext, useState, useEffect, useCallback } from "react";
import { getUser, logoutUser, registerUser, loginUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);  // ✅ Prevent flickering

    // ✅ Higher-level function to get the user
    const handleGetUser = useCallback( async () => {
        try {
            const data = await getUser();
            console.log("frontend-getUser-context.js\n",data);
            setUser(data);
            console.log("New user is \n",user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false); // ✅ Stop loading once user check is done
        }
    }, []);

    useEffect(() => {
        handleGetUser(); // ✅ Call on app load
    }, [handleGetUser]);

    const handleRegister = async (userData) => {
        try {
            await registerUser(userData);
        } catch (error) {
            console.error("Registration Error:", error);
        }
    };

    const handleLogin = async (userData) => {
        try {
            const response = await loginUser(userData);
            setUser(response);  // ✅ Update user state after login
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    const handleLogout = async () => {
        await logoutUser();
        setUser(null);
        
    };

    // ✅ Show loading state before checking authentication
    if (loading) return <p>Loading...</p>;

    return (
        <AuthContext.Provider value={{ user, setUser, handleRegister, handleLogout, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
