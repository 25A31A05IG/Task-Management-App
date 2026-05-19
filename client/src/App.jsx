import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import ManageTask from "./pages/ManageTask";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED LAYOUT */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/manage" element={<ManageTask />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
