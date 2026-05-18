import { useState } from "react";
import Sidebar from "../components/Sidebar";

function ManageTasks() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // COMPLETE TASK
  const toggleComplete = (index) => {

    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  };

  // DELETE TASK
  const deleteTask = (index) => {

    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  };

  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <h1 className="gradient-title">
                  Manage Tasks
                  </h1>

        <div className="task-grid">

          {tasks.map((task, index) => (

            <div
              className="task-card"
              key={index}
            >

              <div className="task-top">

                <span
                  className={`priority ${task.priority}`}
                >
                  {task.priority}
                </span>

                <span>
                  {task.completed
                    ? "✅ Completed"
                    : "⏳ Pending"}
                </span>

              </div>

              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <p>
                Due: {task.dueDate}
              </p>

              {/* BUTTONS */}

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >

                <button
                  onClick={() =>
                    toggleComplete(index)
                  }
                >
                  {task.completed
                    ? "Undo"
                    : "Complete"}
                </button>

                <button
                  style={{
                    background: "red",
                  }}
                  onClick={() =>
                    deleteTask(index)
                  }
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ManageTasks;