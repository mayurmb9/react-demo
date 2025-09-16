import { Link, Outlet } from 'react-router'

export default function APIS() {
    return (
        <div style={{ padding: "1rem" }}>
            <h3>APIS</h3>
            <div style={{ display: "flex", gap: "1rem" }}>
                <Link className='link' to="/apis/fetch">Fetch</Link>
                <Link className='link' to="/apis/fetch">Axios</Link>
            </div>
            <Outlet />
        </div>
    )
}
