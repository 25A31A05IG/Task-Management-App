import { useEffect, useState } from "react";
import axios from "axios";

function Tasks() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(false);

  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const [edit, setEdit] = useState(null);

  // 🔥 GET TASKS
  const fetchTasks = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/tasks/${user._id}`
    );
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 🔥 CREATE TASK
  const createTask = async () => {
    await axios.post("http://localhost:5000/api/tasks", {
      ...data,
      userId: user._id,
    });

    setData({ title: "", description: "", priority: "Low", dueDate: "" });
    fetchTasks();
  };

  // 🔥 DELETE TASK
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  // 🔥 COMPLETE TASK (FIXED)
  const toggleTask = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`);

    setTasks((prev) =>
      prev.map((t) =>
        t._id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // 🔥 EDIT SAVE
  const saveEdit = async () => {
    await axios.put(
      `http://localhost:5000/api/tasks/edit/${edit._id}`,
      edit
    );
    setEdit(null);
    fetchTasks();
  };

  // 🔥 LOGOUT
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className={dark ? "dark" : ""}>

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Task Dashboard</h2>

        <button onClick={() => setDark(!dark)}>
          Toggle Dark Mode
        </button>

        <button onClick={logout}>Logout</button>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* CREATE TASK */}
        <div className="card">
          <h3>Create Task</h3>

          <input
            placeholder="Title"
            value={data.title}
            onChange={(e) =>
              setData({ ...data, title: e.target.value })
            }
          />

          <input
            placeholder="Description"
            value={data.description}
            onChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
          />

          <select
            value={data.priority}
            onChange={(e) =>
              setData({ ...data, priority: e.target.value })
            }
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="date"
            value={data.dueDate}
            onChange={(e) =>
              setData({ ...data, dueDate: e.target.value })
            }
          />

          <button onClick={createTask}>Add Task</button>
        </div>

        {/* TASK LIST */}
        {tasks.map((t) => (
          <div key={t._id} className="task">

            <h3
              style={{
                textDecoration: t.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {t.title}
            </h3>

            <p>{t.description}</p>

            {/* PRIORITY */}
            <span className={`tag ${t.priority}`}>
              {t.priority}
            </span>

            {/* DUE DATE FIXED */}
            <p>
              <b>Due:</b>{" "}
              {t.dueDate
                ? new Date(t.dueDate).toDateString()
                : "No date"}
            </p>

            <p>
              Status:{" "}
              <span
                style={{
                  color: t.completed ? "green" : "orange",
                }}
              >
                {t.completed ? "Completed" : "Pending"}
              </span>
            </p>

            <button onClick={() => toggleTask(t._id)}>
              {t.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => setEdit(t)}>Edit</button>
            <button onClick={() => deleteTask(t._id)}>
              Delete
            </button>
          </div>
        ))}

        {/* EDIT POPUP */}
        {edit && (
          <div className="modal">
            <div className="card">
              <h3>Edit Task</h3>

              <input
                value={edit.title}
                onChange={(e) =>
                  setEdit({ ...edit, title: e.target.value })
                }
              />

              <input
                value={edit.description}
                onChange={(e) =>
                  setEdit({
                    ...edit,
                    description: e.target.value,
                  })
                }
              />

              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEdit(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tasks;