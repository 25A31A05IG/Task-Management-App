import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import ManageTasks from "./pages/ManageTasks";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/manage-tasks" element={<ManageTasks />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;