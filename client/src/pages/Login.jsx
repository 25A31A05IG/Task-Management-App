import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      await axios.post(
        "https://task-management-app-77tz.onrender.com/api/users/login",
        data
      );

      alert("Login successful");
      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-box">
          <h2>Login</h2>

          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} />

          <button onClick={login}>Login</button>

          <p style={{ marginTop: "15px" }}>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")} style={{ color: "blue", cursor: "pointer" }}>
              Register
            </span>
          </p>
        </div>
      </div>

      <div className="auth-right">
        <div className="floating-card">
          <h3>Stay Organized 📋</h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
