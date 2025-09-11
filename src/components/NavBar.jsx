import { Link } from 'react-router'

function NavBar() {
    return (
        <div
            style={{
                display: "flex",
                gap: "1rem",
                margin: "2rem auto"
            }}>
            <Link to="/" className='link'>
                Home </Link>

            <Link to="/convertor" className='link'>
                Currency Convertor </Link>

            <Link to="/router" className='link'>
                Router </Link>

            <Link to="/header" className='link'>
                Header </Link>

        </div>
    )
}

export default NavBar