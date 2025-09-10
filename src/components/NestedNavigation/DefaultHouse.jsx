// components/DefaultHouse.jsx
import { Link, Outlet } from "react-router";

export default function DefaultHouse({ house }) {
  return (
    <div style={{ border: "2px solid #9c6a0d", padding: "1rem" }}>
      <h2>{house.name}</h2>
      <p><em>Words:</em> {house.words}</p>

      <h3>Characters:</h3>
      <ul  style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        listStyleType: "none"
      }}>
        {house.characters.map(c => (
          <li key={c.id}>
            <Link className="link" style={{ background: "#9c6a0d" }} to={`${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}