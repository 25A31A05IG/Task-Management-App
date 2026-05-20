import { useNavigate, Outlet } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >

      {/* SIDEBAR */}
      <div
        style={{
          width: "250px",
          background: "#111827",
          padding: "25px",
          borderRight: "1px solid #1e293b",
        }}
      >

        {/* LOGO */}
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              background:
                "linear-gradient(to right, #8b5cf6, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Task Manager
          </h2>
        </div>

        {/* PROFILE */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #3b82f6",
            }}
          />

          <h3 style={{ marginTop: "12px" }}>
            {user?.username || "Guest"}
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "5px",
            }}
          >
            Full Stack Developer
          </p>
        </div>

        {/* NAVIGATION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >

          <button
            onClick={() => navigate("/dashboard")}
            style={buttonStyle}
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/create")}
            style={buttonStyle}
          >
            Create Task
          </button>

          <button
            onClick={() => navigate("/manage")}
            style={buttonStyle}
          >
            Manage Tasks
          </button>

          <button
            onClick={logout}
            style={{
              ...buttonStyle,
              marginTop: "20px",
              background: "#ef4444",
            }}
          >
            Logout
          </button>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#0f172a",
          color: "white",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </div>

    </div>
  );
}

const buttonStyle = {
  background: "#1e293b",
  color: "white",
  border: "none",
  padding: "14px",
  borderRadius: "12px",
  cursor: "pointer",
  textAlign: "left",
  fontSize: "16px",
};

export default Layout;
