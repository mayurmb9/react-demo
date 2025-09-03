import React from 'react'

export const Character = ({ character }) => (
    <div style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "1rem",
        width: "19rem",
        height: "16rem",
        padding: "1rem",
        justifyContent: "space-around",
        border: "1px solid white",
        borderRadius: "5px",
    }}>
        <h3>Name:- <span style={{ color: "#ee7d14" }}>{character.name}</span></h3>
        <h4>Age :- <span style={{ color: "#ee7d14" }}>{character.age}</span></h4>
        <h4>Power :- <span style={{ color: "#ee7d14" }}>{character.powers.join(", ")}</span></h4>
    </div>
)

