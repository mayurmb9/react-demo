import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);
     

    return (
        <div>

            <h3>
                Counter :- {count}
            </h3>

            <div style={{ display: "flex", gap: "0.5rem" }}>

                <button onClick={() => setCount(count + 1)}>Increment</button>
               
                <button onClick={() => setCount(count - 1)}>Decrement</button>

            </div>

        </div>
    )
}
