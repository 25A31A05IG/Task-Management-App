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

      alert("Login successful");

      // store user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input name="email" onChange={handleChange} placeholder="email" />
      <input name="password" type="password" onChange={handleChange} placeholder="password" />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
