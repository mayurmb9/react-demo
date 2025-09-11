import React from 'react'
import { useState } from 'react'
import Counter from './Counter';

export default function State() {


  const [fruit, setFruit] = useState("Apple");


  const handleChangeFruit = () => {
    setFruit("Banana")
  }

  return (
    <div>
      <h3>State in React JS</h3>

      <h3>{fruit}</h3>

      <button onClick={handleChangeFruit}>Change Fruit</button>
      
      <Counter />

    </div>
  )
}
