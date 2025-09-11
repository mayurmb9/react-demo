// pages/House.jsx
import { useParams } from "react-router";
import { houses } from "../../data/gotData";
import { houseComponents } from "./houseComponents";

export default function House() {
  const { houseId } = useParams();
  const house = houses.find(h => h.id === houseId);

  if (!house) return <h3>House not found</h3>;

  const SpecificHouse = houseComponents[houseId] || houseComponents.default;

  return <div style={{ padding: "1rem" }}>

    <SpecificHouse house={house} />
  </div>;
}