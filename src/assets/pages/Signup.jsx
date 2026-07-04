import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {

    return (

        <>
            <Navbar />

            <div className="signup-page">

                <div className="signup-card">

                    <h1>Create Account 🚀</h1>

                    <p>
                        Join ShopSphere and start shopping today.
                    </p>

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <button>
                        Create Account
                    </button>

                    <div className="login-link">

                        Already have an account?

                        <Link to="/login">
                            Login
                        </Link>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Signup;