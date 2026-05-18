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

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        res.data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login successful");

      navigate("/dashboard");

    } catch (err) {

      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="login-box">

          <h1>Task Manager</h1>

          <p>
            Welcome back! Login to continue
          </p>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={data.password}
            onChange={handleChange}
            style={{ marginTop: "15px" }}
          />

          {/* LOGIN BUTTON */}
          <button
            onClick={login}
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            Login
          </button>

          {/* REGISTER LINK */}
          <p style={{ marginTop: "20px" }}>

            Don’t have an account?{" "}

            <span
              onClick={() =>
                navigate("/register")
              }
              style={{
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Register
            </span>

          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="floating-card">

          <h2>Manage Tasks Efficiently 🚀</h2>

          <p style={{ marginTop: "10px" }}>
            Organize your workflow,
            track progress and boost
            productivity with your
            professional task manager.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;