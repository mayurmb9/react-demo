import { Link, Outlet } from 'react-router'

export default function APIS() {
    return (
        <div style={{ padding: "1rem" }}>
            <h3>APIS</h3>
            <div style={{ display: "flex", gap: "1rem" }}>
                <Link className='link' to="/apis/">Fetch</Link>
                <Link className='link' to="/apis/axios">Axios</Link>
                <Link className='link' to="/apis/modular-axios">Modular Axios</Link>
                <Link className='link' to="/apis/promise">Promise</Link>
                <Link className='link' to="/error-boundary">Error Boundries</Link>
            </div>
            <Outlet />
        </div>
    )
}
