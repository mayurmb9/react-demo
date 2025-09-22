import React from 'react'
import { Link, Outlet } from 'react-router'

export default function HigherOrderComponent() {
  return (
    <div style={{ padding: "1rem" }}>
      <h3>Higher Order Component</h3>
      <div style={{ display: "flex", gap: "1rem" }}>

         <Link className='link' to="/hoc/dashboard">Dashboard</Link>
          <Link className='link' to="/hoc/profile">Profile</Link>
      </div>
      <Outlet />
    </div>
  )
}
