import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="sidebar">

      <div className="profile">
        <img src="https://i.pravatar.cc/100" alt="profile" />

        <h3>{user?.username || "Guest"}</h3>
        <p>Full Stack Developer</p>
      </div>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create">Create Task</Link>
        <Link to="/manage">Manage Tasks</Link>
      </nav>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Sidebar;
