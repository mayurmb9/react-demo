import React from 'react'

export default function Wrapper({children,color = "yellow"}) {
  return (
    <div style={{
      border: "5px solid green",
      padding: "1rem",
      width: "50%",
      margin: "1rem",
      color:color
  
    }}>
      {children}
      {/* <h4>Hello Everyone</h4> */}
    </div>
  )
}
