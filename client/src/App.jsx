import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import ManageTask from "./pages/ManageTasks";

function App() {
  return (
    <Routes>

      {/* LOGIN PAGE */}
      <Route path="/" element={<Login />} />

      {/* REGISTER PAGE */}
      <Route path="/register" element={<Register />} />

      {/* MAIN APP WITH SIDEBAR LAYOUT */}
      <Route element={<Layout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/create"
          element={<CreateTask />}
        />

        <Route
          path="/manage"
          element={<ManageTask />}
        />

      </Route>

    </Routes>
  );
}

export default App;
