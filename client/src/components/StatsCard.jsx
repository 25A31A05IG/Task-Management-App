function StatsCard({ title, number, color }) {
  return (
    <div className="stats-card">
      <div
        className="stats-line"
        style={{ background: color }}
      ></div>

      <div>
        <h4>{number}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default StatsCard;