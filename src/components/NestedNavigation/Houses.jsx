import { Link, NavLink, Outlet } from "react-router";
import { houses } from "../../data/gotData";

function Houses() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>⚔️ Game of Thrones - Houses</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {houses.map(h => (
          <NavLink className={"link"} to={`/got/houses/${h.id}`}>{h.id.toUpperCase()}</NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Houses;
