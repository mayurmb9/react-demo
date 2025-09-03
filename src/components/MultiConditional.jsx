import React, { useState } from 'react'

export default function MultiConditional() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Multi Conditional</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {
        count == 0 ? <
          h3>Case 0</h3>
          : count == 1 ? <h3>Case 1</h3>
            : count == 2 ? <h3>Case 2</h3>
              : <h3>Default</h3>
      }

    </div>
  )
}
