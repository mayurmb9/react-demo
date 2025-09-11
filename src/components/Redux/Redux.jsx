import React from 'react'
import Counter from './Counter'
import { useDispatch } from 'react-redux'

export default function Redux() {

  const dispatch = useDispatch();

  return (
    <div style={{
      display: "flex",
      padding: "1rem",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <Counter />
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  )
}