import React, { useState } from 'react'
import Counter from './Counter';
import Cat from './Cat';

export default function Toggle() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <h3>Toggle</h3>
            
          
            <button onClick={() => setDisplay(!display)}>Click to Toggle</button>

            <h3>{display ? "ON" : "OFF"}</h3>

            {display && <Cat />}

     
    
            

        </div>
    )
}
