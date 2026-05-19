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
      <h2>Login</h2>

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

      <button onClick={login}>Login</button>

      {/* 👇 LINK TO REGISTER */}
      <p style={{ marginTop: "15px" }}>
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
