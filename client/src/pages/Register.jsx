import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      await axios.post(
        "https://task-management-app-77tz.onrender.com/api/users/register",
        data
      );

      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <div className="login-box">

          <h1>Register</h1>
          <p>Create your account</p>

          <input
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
          />

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

          <button onClick={register}>Register</button>

          <p style={{ marginTop: "20px" }}>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Login
            </span>
          </p>

        </div>
      </div>

      <div className="login-right">
        <div className="floating-card">
          <h2>Stay Organized 📋</h2>
          <p>Track tasks and boost productivity.</p>
        </div>
      </div>

    </div>
  );
}

export default Register;
