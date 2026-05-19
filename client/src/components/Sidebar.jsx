import { useEffect, useState } from "react";

function Sidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const stored = localStorage.getItem("user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    };

    loadUser();

    // updates when localStorage changes in other tabs/pages
    window.addEventListener("storage", loadUser);

    return () => window.removeEventListener("storage", loadUser);
  }, []);

  return (
    <div className="sidebar">

      <div className="profile">
        <img src="https://i.pravatar.cc/100" alt="profile" />

        {/* DYNAMIC USER */}
        <h3>{user?.username || "Guest"}</h3>

        <p>Full Stack Developer</p>
      </div>

      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/create">Create Task</a>
        <a href="/manage">Manage Tasks</a>
      </nav>

    </div>
  );
}

export default Sidebar;
