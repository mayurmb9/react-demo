import React from 'react'
import { Link, Outlet } from 'react-router'

export default function Performance() {
  return (
    <div style={{ padding: "1rem" }}>
      <h3>Performance</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link className='link' to="/performance/">Pure Component</Link>
        <Link className='link' to="/performance/derived">Derived State</Link>
        <Link className='link' to="/performance/usememo">UseMemo</Link>
        <Link className='link' to="/performance/usecallback">UseCallback</Link>
      </div>
      <Outlet />
    </div>
  )
}
