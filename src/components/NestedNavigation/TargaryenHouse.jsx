import { Link, Outlet } from "react-router";

export default function TargaryenHouse({ house }) {
  return (
    <div style={{ border: "2px solid red", padding: "1rem" }}>
      <h2>🔥 {house.name}</h2>
      <p><strong>Motto:</strong> {house.words}</p>
      <p>🐉 Dragons: Drogon, Rhaegal, Viserion</p>

      <h3>Royal Members:</h3>
      <ul  style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        listStyleType: "none"
      }}>
        {house.characters.map(c => (
          <li key={c.id}>
            <Link className="link" style={{ background: "#ff9191" }} to={`${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
