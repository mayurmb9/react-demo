import { NavLink } from 'react-router'

function Header() {
    return (
        <div className='header'  >

            <div>
                <NavLink className={({ isActive }) => isActive ? "custom-active" : "link"} to={"/"}>Logo</NavLink>
                {/* <img style={{ width: "50px", background: "white" }} src={got} alt='logo' /> */}
            </div>

            <div>
                <ul >
                    <li>
                        <NavLink className='link' to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to={"/convertor"}>Currency Convertor</NavLink>
                    </li>
                    {/* <li>
                        <NavLink className='link' to={"/houses"}>Houses</NavLink>
                    </li> */}
                    <li>
                        <NavLink className='link' to={"/got/houses"}>Houses</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to={"/users"}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to={"/users/list"}>List</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header