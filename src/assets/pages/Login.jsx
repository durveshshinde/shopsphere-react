import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

function Login() {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        const success = login(email, password);

        if (success) {

            toast.success("Login Successful 🎉");
            navigate("/");

        } else {

            toast.error("Invalid Email or Password");
        }

    };

    return (

        <>
            <Navbar />

            <div className="login-page">

                <div className="login-card">

                    <h1>Welcome Back 👋</h1>

                    <p>Login to continue shopping</p>

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={handleLogin}>
                        Login
                    </button>

                    <div className="login-link">

                        Don't have an account?

                        <Link to="/signup">
                            Sign Up
                        </Link>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Login;