import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const res = await axios.post(
        "https://task-management-app-77tz.onrender.com/api/users/login",
        data
      );

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <div className="login-box">

          <h1>Login</h1>
          <p>Welcome back</p>

          <input
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
          />

          <button onClick={login}>Login</button>

          <p style={{ marginTop: "20px" }}>
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Register
            </span>
          </p>

        </div>
      </div>

      <div className="login-right">
        <div className="floating-card">
          <h2>Stay Organized 📋</h2>
          <p>Manage tasks easily and stay productive.</p>
        </div>
      </div>

    </div>
  );
}

export default Login;
