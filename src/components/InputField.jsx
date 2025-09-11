import React, { useState } from 'react'

export default function InputField() {
    const [name, setName] = useState("");
   
    return (
        <div>
            <h3>Input Field</h3>
            <input
                style={{
                    marginRight: "10px",
                    padding: "5px",
                    border: "1px solid white",
                    borderRadius: "5px"
                }}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter User Name" />
            <h4>Hello{name}</h4>
            <button onClick={() => setName("")}>Clear</button>
        </div>
    )
}
