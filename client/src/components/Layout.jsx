import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Outlet />
    </div>
  );
}

export default Layout;
