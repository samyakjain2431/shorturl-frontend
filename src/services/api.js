import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://shorturl-backend-uzg1.onrender.com",
    withCredentials: true,  // ✅ Enables cookies to be sent with requests to the backend (JWT)
});

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await API.post(`/api/auth/register`, userData);
        console.log("frontend-register-api.js\n",response);
        return response.data;  // ✅ Explicitly return the response data
    } catch (error) {
        console.error("Registration Error:", error);
        throw error || { message: "An error occurred" };  // ✅ Ensure an error response is returned
    }
};


// Login User
export const loginUser = async (userData) => {
    try {
        const response = await API.post(`/api/auth/login`, userData);
        console.log("frontend-login-api.js\n",response);
        return response.data;  // ✅ Explicitly return the response data
    } catch (error) {
        console.error("Login Error:", error);
        throw error || { message: "An error occurred" };  // ✅ Ensure an error response is returned
    }
};


// Get Logged-in User
export const getUser = async () => {
    try{
        const response = await API.get("/api/auth/me");
        console.log("frontend-getUser-api.js\n",response);
        return response.data;
    }catch(error){
        console.error("Get User Error:", error);
        throw error;
    }
};

// Logout User
export const logoutUser = async () => {
    try{
        const response = await API.post("/api/auth/logout");
        console.log("frontend-logout-api.js\n",response);
        return response.data;
    }
    catch(error){
        console.error("Logout Error:", error);
        throw error;
    }
};
