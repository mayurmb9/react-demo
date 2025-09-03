import { Character } from "./Character";

export default function Loops() {

  const characters = [
    "Tony Stark",
    "Bruce Banner",
    "Natasha Romanoff",
    "Steve Rogers",
    "Clint Barton",
    "Thor",
    "Loki"]
  const charactersData = [
    {
      name: "Tony Stark",
      alias: "Iron Man",
      age: 48,
      gender: "Male",
      powers: ["Genius Intellect", "Powered Armor Suit", "Wealth", "Engineering"],
      weapon: "Iron Man Suits",
      origin: "Earth",
      affiliation: "Avengers"
    },
    {
      name: "Bruce Banner",
      alias: "Hulk",
      age: 49,
      gender: "Male",
      powers: ["Superhuman Strength", "Regeneration", "Durability", "Genius Intellect"],
      weapon: "His Strength",
      origin: "Earth",
      affiliation: "Avengers"
    },
    {
      name: "Natasha Romanoff",
      alias: "Black Widow",
      age: 36,
      gender: "Female",
      powers: ["Expert Martial Artist", "Agility", "Espionage", "Marksmanship"],
      weapon: "Batons, Guns",
      origin: "Earth (Russia)",
      affiliation: "Avengers"
    },
    {
      name: "Steve Rogers",
      alias: "Captain America",
      age: 101, // Born in 1920s but physically ~35
      gender: "Male",
      powers: ["Enhanced Strength", "Agility", "Endurance", "Leadership"],
      weapon: "Vibranium Shield",
      origin: "Earth (USA)",
      affiliation: "Avengers"
    },
    {
      name: "Clint Barton",
      alias: "Hawkeye",
      age: 41,
      gender: "Male",
      powers: ["Expert Marksman", "Agility", "Martial Arts"],
      weapon: "Bow & Trick Arrows",
      origin: "Earth",
      affiliation: "Avengers"
    },
    {
      name: "Thor Odinson",
      alias: "Thor",
      age: 1500,
      gender: "Male",
      powers: ["God of Thunder", "Super Strength", "Immortality", "Weather Manipulation"],
      weapon: "Mjolnir/Stormbreaker",
      origin: "Asgard",
      affiliation: "Avengers"
    },
    {
      name: "Loki Laufeyson",
      alias: "Loki",
      age: 1050,
      gender: "Male",
      powers: ["Illusion Manipulation", "Shapeshifting", "Sorcery", "Longevity"],
      weapon: "Daggers, Scepter (Tesseract at times)",
      origin: "Jotunheim/Asgard",
      affiliation: "Varies (Self, Villain, Anti-Hero)"
    }
  ];

  return (
    <div>
      <h3>Loops in JSX</h3>
      <table border={1}
        style={{
          margin: "auto",
          padding: "1rem",
          width: "100%",
          border: "1px solid white",
          borderRadius: "5px",
          fontWeight: "semibold",
          textAlign: "center",
          borderCollapse: "collapse"
        }}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Alias</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Powers</td>
            <td>Weapon</td>
            <td>Origin</td>
            <td>Affiliation</td>
          </tr>
        </thead>
        <tbody>
          {
            charactersData.map((character, index) => (
              <tr key={index}>
                <td>{character.name}</td>
                <td>{character.alias}</td>
                <td>{character.age}</td>
                <td>{character.gender}</td>
                <td>{character.powers.join(", ")}</td>
                <td>{character.weapon}</td>
                <td>{character.origin}</td>
                <td>{character.affiliation}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <br />
      <hr />
      <h3>Reuse Component in Loop</h3>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
          charactersData.map((character, index) => (
            <div key={index}>
              <Character character={character} />
            </div>
          ))
        }
      </div>

    </div>
  )
}
