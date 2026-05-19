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
    <div>
      <h2>Register</h2>

      <input name="username" onChange={handleChange} placeholder="username" />
      <input name="email" onChange={handleChange} placeholder="email" />
      <input name="password" type="password" onChange={handleChange} placeholder="password" />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
