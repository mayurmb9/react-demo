
import { useParams } from "react-router";
import { houses } from "../../data/gotData";

export default function Character() {
  const { houseId, characterId } = useParams();
  const house = houses.find(h => h.id === houseId);
  const character = house?.characters.find(c => c.id === characterId);

  if (!character) return <p>Character not found</p>;

  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>👤 {character.name}</h4>
      <p>{character.bio}</p>
    </div>
  );
}
