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

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // REGISTER FUNCTION
  const register = async () => {

    try {

      console.log("REGISTER DATA:", data);

      const res = await axios.post(
        "https://task-management-app-77tz.onrender.com/api/users/register",
        data
      );

      console.log("REGISTER SUCCESS:", res.data);

      alert("Registration successful");

      navigate("/");

    } catch (err) {

      console.log(
        "REGISTER ERROR:",
        err.response?.data || err.message
      );

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

          <h1>Create Account</h1>

          <p>
            Register to continue
          </p>

          {/* USERNAME */}
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={data.username}
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

          {/* REGISTER BUTTON */}
          <button
            onClick={register}
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            Register
          </button>

          {/* LOGIN LINK */}
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

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="floating-card">

          <h2>Stay Organized 📋</h2>

          <p style={{ marginTop: "10px" }}>
            Create tasks, track progress,
            manage priorities and improve
            productivity every day.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;