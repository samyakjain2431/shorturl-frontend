import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
      console.log("response from register.js front-end",res);
      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" 
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105">
            Register
          </button>
          <p className="text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <span onClick={(e)=>{e.preventDefault();navigate("/login")}}
            className="text-blue-500 font-medium hover:underline cursor-pointer"
          >
            Log In
          </span>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Register;