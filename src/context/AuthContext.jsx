import { createContext, useState, useEffect } from "react";
import { getUser, logoutUser, registerUser, loginUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // ✅ Prevents flickering

    useEffect(() => {
        const handleGetUser = async () => {
            try {
                const data = await getUser();
                console.log("frontend-getUser-context.js\n", data);
                setUser(data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false); // ✅ Stops loading once user check is done
            }
        };

        handleGetUser(); // ✅ Fetch user on app load
    }, []); // ✅ Runs only once, no infinite loop

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
            setUser(response); // ✅ Update user state after login
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
