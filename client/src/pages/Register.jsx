import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    name: "",
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
      console.log("REGISTER DATA:", data);

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
    <div className="login-page">

      <div className="login-left">
        <div className="login-box">

          <h1>Create Account</h1>
          <p>Register to continue</p>

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={data.name}
            onChange={handleChange}
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
            style={{ marginTop: "15px" }}
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

          {/* BUTTON */}
          <button
            onClick={register}
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            Register
          </button>

          <p style={{ marginTop: "20px" }}>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              style={{
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Login
            </span>
          </p>

        </div>
      </div>

      <div className="login-right">
        <div className="floating-card">
          <h2>Stay Organized 📋</h2>
          <p style={{ marginTop: "10px" }}>
            Create tasks, track progress,
            manage priorities and improve productivity.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Register;
