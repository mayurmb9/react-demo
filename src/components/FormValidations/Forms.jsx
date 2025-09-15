import React from 'react'
import Login from './Login'
import { Link, Outlet } from 'react-router'

export default function Forms() {
    return (
        <div style={{ padding: "1rem" }}>
            <h3>Forms</h3>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem"
            }}>
                <Link className='link' to="/forms/login">Login</Link>
            </div>
            <Outlet />
        </div>
    )
}
