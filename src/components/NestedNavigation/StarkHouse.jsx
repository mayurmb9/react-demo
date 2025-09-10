import { Link, Outlet } from "react-router";

export default function StarkHouse({ house }) {
  return (
    <div style={{ border: "2px solid blue", padding: "1rem" }}>
      <h2>❄️ {house.name}</h2>
      <p><em>Words:</em> {house.words}</p>
      <p>🐺 Symbol: Direwolf</p>
      <h3>Members:</h3>
      <ul style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        listStyleType: "none"
      }}>
        {house.characters.map(c => (
          <li key={c.id}>
            <Link className="link" style={{ background: "#9191ff" }} to={`${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
