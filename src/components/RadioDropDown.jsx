import React, { useState } from 'react'

export default function RadioDropDown() {

  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("delhi");
  return (
    <div>
      <h3>Radio & DropDown</h3>

      <h3>Handle Radio Buttons</h3>
      <h4>Select Gender</h4>
      <div>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)} />

        <label htmlFor="male">Male</label>
      </div>

      <div>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={(e) => setGender(e.target.value)} />

        <label htmlFor="female">Female</label>
      </div>
      <h4>Selected Gender :- {gender}</h4>

      <h4>Select City</h4>

      <select
        style={{ padding: "5px", border: "1px solid white", borderRadius: "5px" }}
        onChange={(e) => setCity(e.target.value)}
        defaultValue={city}>
        <option value="mumbai">Mumbai</option>
        <option value="pune">Pune</option>
        <option value="bangalore">Bangalore</option>
        <option value="delhi">Delhi</option>
      </select>

      <h4>Selected City :- {city}</h4>
    </div>
  )
}
