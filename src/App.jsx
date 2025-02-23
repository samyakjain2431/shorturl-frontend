import { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import NewUrl from "./components/NewUrl";
import AllUrls from "./components/AllUrls";

function App() {
  const loadingBarRef = useRef(null); // Ref for loading bar

  return (
    <AuthProvider>
      <Router>
        <LoadingBar color="#f11946" ref={loadingBarRef} />
        <AppContent loadingBarRef={loadingBarRef} />
      </Router>
    </AuthProvider>
  );
}

function AppContent({ loadingBarRef }) {
  const location = useLocation();
  const showNavbar = location.pathname !== "/login" && location.pathname !== "/register";

  // Show loading bar on route change
  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
      setTimeout(() => {
        loadingBarRef.current.complete();
      }, 50); // Simulate a slight delay for UX
    }
  }, [loadingBarRef, location]);

  return (
    <div className={showNavbar ? "grid grid-cols-[auto_1fr] bg-primary " : "App--no-navbar"}>
      {showNavbar && <Navbar />}
      <div className="max-w-[1000px] bg-primary text-primary w-full mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new" element={<NewUrl />} />
          <Route path="/all-urls" element={<AllUrls />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
