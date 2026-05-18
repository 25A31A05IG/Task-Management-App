function TaskCard({ task }) {
  return (
    <div className="task-card">
      <div className="task-top">
        <span className={`priority ${task.priority}`}>
          {task.priority}
        </span>

        <span className="status">
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <div className="task-footer">
        <div>
          <small>Due Date</small>
          <h4>{task.dueDate}</h4>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;