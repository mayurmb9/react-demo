import React from 'react'

export default function Component() {
  return (
    <>
    <h3>Fruits</h3>
    <Apple />
  </>
  )
}


function Apple() {
    return <h3>Apple {sum()}</h3>
  }
  
  function sum() {
    return 10 + 20
  }
  
