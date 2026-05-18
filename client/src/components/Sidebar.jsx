import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";

function Sidebar() {

  const navigate = useNavigate();

  // LOGOUT
  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="sidebar">

      {/* LOGO */}
      <div className="logo">
        <h2>TaskManager</h2>
      </div>

      {/* PROFILE */}
      <div className="profile">

        <img
          src={profile}
          alt="profile"
        />

        <h3>Ramesh</h3>

        <p>Full Stack Developer</p>

      </div>

      {/* NAVIGATION */}
      <nav>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/create-task">
          Create Task
        </Link>

        <Link to="/manage-tasks">
          Manage Tasks
        </Link>

      </nav>

      {/* LOGOUT */}
      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;