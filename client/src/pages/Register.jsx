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
      <h2>Register</h2>

      <input
        name="username"
        placeholder="username"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="email"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
      />

      <button onClick={register}>Register</button>

      {/* 👇 LINK TO LOGIN */}
      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/")}
          style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
