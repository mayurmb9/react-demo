import { Link, NavLink, Outlet } from "react-router";

const houses = [
  { id: "", name: "Stark" },
  { id: "lannister", name: "Lannister" },
  { id: "targaryen", name: "Targaryen" }
];

function Houses() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>🏰 Houses</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {houses.map(h => (
          <NavLink className={"link"} to={`/houses/${h.id}`}>{h.name.toUpperCase()}</NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Houses;
