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
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-box">
          <h2>Register</h2>

          <input name="username" placeholder="Username" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} />

          <button onClick={register}>Register</button>

          <p style={{ marginTop: "15px" }}>
            Already have an account?{" "}
            <span onClick={() => navigate("/")} style={{ color: "blue", cursor: "pointer" }}>
              Login
            </span>
          </p>
        </div>
      </div>

      <div className="auth-right">
        <div className="floating-card">
          <h3>Manage Tasks Easily 📌</h3>
        </div>
      </div>
    </div>
  );
}

export default Register;
