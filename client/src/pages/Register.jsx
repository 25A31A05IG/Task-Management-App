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
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const register = async () => {
    try {
      console.log("DATA:", data);

      const res = await axios.post(
        "https://task-management-app-77tz.onrender.com/api/users/register",
        data
      );

      console.log("SUCCESS:", res.data);

      alert("Registration successful");

      navigate("/");
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);

      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <input
        name="username"
        placeholder="username"
        value={data.username}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="email"
        value={data.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="password"
        value={data.password}
        onChange={handleChange}
      />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
