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
      const res = await axios.post(
        "https://task-management-app-77tz.onrender.com/api/users/register",
        data
      );

      // IMPORTANT: overwrite old user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Registration successful");
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
