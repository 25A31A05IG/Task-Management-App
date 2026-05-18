import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

function Dashboard() {

  // GET TASKS
  const tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  // COUNTS
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (t) => t.completed
  ).length;

  const pendingTasks = tasks.filter(
    (t) => !t.completed
  ).length;

  const highTasks = tasks.filter(
    (t) => t.priority === "High"
  ).length;

  const mediumTasks = tasks.filter(
    (t) => t.priority === "Medium"
  ).length;

  const lowTasks = tasks.filter(
    (t) => t.priority === "Low"
  ).length;

  // PIE CHART DATA
  const pieData = [
    {
      name: "Completed",
      value: completedTasks,
    },
    {
      name: "Pending",
      value: pendingTasks,
    },
  ];

  // BAR CHART DATA
  const priorityData = [
    {
      name: "Low",
      tasks: lowTasks,
    },
    {
      name: "Medium",
      tasks: mediumTasks,
    },
    {
      name: "High",
      tasks: highTasks,
    },
  ];

  const COLORS = ["#10b981", "#ef4444"];

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="main-content">

        {/* HEADER */}
        <div className="dashboard-header">
          <h1>Welcome Back, Ramesh! </h1>

          <p>
            Manage your productivity efficiently
          </p>
        </div>

        {/* STATS */}
        <div className="stats-grid">

          <StatsCard
            title="Total Tasks"
            number={totalTasks}
            color="#2563eb"
          />

          <StatsCard
            title="Pending"
            number={pendingTasks}
            color="#7c3aed"
          />

          <StatsCard
            title="Completed"
            number={completedTasks}
            color="#10b981"
          />

          <StatsCard
            title="High Priority"
            number={highTasks}
            color="#ef4444"
          />

        </div>

        {/* CHARTS */}
        <div className="chart-grid">

          {/* PIE CHART */}
          <div className="chart-card">

            <h2>Task Distribution</h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >

                  {pieData.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* BAR GRAPH */}
          <div className="chart-card">

            <h2>Priority Levels</h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart data={priorityData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="tasks"
                  fill="#2563eb"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;