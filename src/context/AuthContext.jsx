import { createContext, useState, useEffect } from "react";
import { getUser, logoutUser, registerUser, loginUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleRegister = async (userData) => {
        try {
            await registerUser(userData);
            return { success: true };
        } catch (error) {
            console.error("Registration Error:", error);
            return { success: false, message: error.response?.data?.message || "Registration failed" };
        }
    };

    const handleLogin = async (userData) => {
        try {
            const response = await loginUser(userData);
            setUser(response);
            return { success: true };
        } catch (error) {
            console.error("Login Error:", error);
            return { success: false, message: error.response?.data?.message || "Login failed" };
        }
    };

    const handleLogout = async () => {
        try {
            await logoutUser();
            setUser(null);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <AuthContext.Provider value={{ user, setUser, handleRegister, handleLogout, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
