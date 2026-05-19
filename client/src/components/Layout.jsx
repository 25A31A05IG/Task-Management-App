import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          background: "#111827",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Task Manager</h2>

        <button onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/create")}>
          Create Task
        </button>

        <button onClick={() => navigate("/manage")}>
          Manage Tasks
        </button>

        <button onClick={logout} style={{ marginTop: "10px" }}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", background: "#f3f4f6" }}>
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
