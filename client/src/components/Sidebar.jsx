import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user");

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

      {/* PROFILE */}
      <div className="profile">

        <div
          style={{
            position: "relative",
            width: "90px",
            margin: "auto",
          }}
        >

          <img
            src={
              localStorage.getItem(
                `profile_${user?._id}`
              ) ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="profile"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #3b82f6",
            }}
          />

          {/* PLUS BUTTON */}
          <label
            htmlFor="profileUpload"
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              background: "#2563eb",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            +
          </label>

          <input
            type="file"
            id="profileUpload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {

              const file =
                e.target.files[0];

              const reader =
                new FileReader();

              reader.onloadend = () => {

                localStorage.setItem(
                  `profile_${user?._id}`,
                  reader.result
                );

                window.location.reload();
              };

              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />

        </div>

        <h3>
          {user?.username || "Guest"}
        </h3>

        <p>Full Stack Developer</p>

      </div>

      {/* NAVIGATION */}
      <nav>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/create">
          Create Task
        </Link>

        <Link to="/manage">
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
