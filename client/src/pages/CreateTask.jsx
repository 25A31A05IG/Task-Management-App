import { useState } from "react";
import Sidebar from "../components/Sidebar";

function CreateTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const createTask = () => {
    const existing =
      JSON.parse(localStorage.getItem("tasks")) || [];

    existing.push({
      ...task,
      completed: false,
    });

    localStorage.setItem(
      "tasks",
      JSON.stringify(existing)
    );

    alert("Task Created Successfully");

    setTask({
      title: "",
      description: "",
      priority: "Low",
      dueDate: "",
    });
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <div className="form-card">
          <h1 className="gradient-title">
               Create Task
                 </h1>

          <label>Task Title</label>

          <input
            type="text"
            placeholder="Enter title"
            value={task.title}
            onChange={(e) =>
              setTask({
                ...task,
                title: e.target.value,
              })
            }
          />

          <label>Description</label>

          <textarea
            placeholder="Describe task"
            value={task.description}
            onChange={(e) =>
              setTask({
                ...task,
                description: e.target.value,
              })
            }
          />

          <div className="row">

            <div>
              <label>Priority</label>

              <select
                value={task.priority}
                onChange={(e) =>
                  setTask({
                    ...task,
                    priority: e.target.value,
                  })
                }
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label>Due Date</label>

              <input
                type="date"
                value={task.dueDate}
                onChange={(e) =>
                  setTask({
                    ...task,
                    dueDate: e.target.value,
                  })
                }
              />
            </div>

          </div>

          <button onClick={createTask}>
            Create Task
          </button>

        </div>
      </div>
    </div>
  );
}

export default CreateTask;