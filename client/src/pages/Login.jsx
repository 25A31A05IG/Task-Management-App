import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {

    try {

      const res = await axios.post(
        "https://task-management-app-77tz.onrender.com/api/users/login",
        data
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="login-box">

          <h2 className="gradient-title">
            Welcome Back
          </h2>

          <p>
            Login to continue managing your tasks
          </p>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <button onClick={login}>
            Login
          </button>

          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#9ca3af" }}>
              Don’t have an account?
            </span>

            <Link
              to="/register"
              style={{
                color: "#3b82f6",
                marginLeft: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Register
            </Link>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="floating-card">

          <h2
            style={{
              color: "#111827",
              marginBottom: "15px",
            }}
          >
            Task Manager
          </h2>

          <p
            style={{
              color: "#4b5563",
              lineHeight: "1.7",
            }}
          >
            Organize tasks, track productivity,
            and manage your workflow efficiently
            with a modern task management system.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
