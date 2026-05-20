import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const [data, setData] = useState({
    username: "",
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

  const register = async () => {

    try {

      const res = await axios.post(
        "https://task-management-app-77tz.onrender.com/api/users/register",
        data
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Registration successful");

      navigate("/");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="login-box">

          <h2 className="gradient-title">
            Create Account
          </h2>

          <p>
            Register to start managing your tasks
          </p>

          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
          />

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

          <button onClick={register}>
            Register
          </button>

          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#9ca3af" }}>
              Already have an account?
            </span>

            <Link
              to="/"
              style={{
                color: "#3b82f6",
                marginLeft: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Login
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
            Join Task Manager
          </h2>

          <p
            style={{
              color: "#4b5563",
              lineHeight: "1.7",
            }}
          >
            Create tasks, track progress,
            and boost productivity with a
            clean and modern task management
            experience.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
