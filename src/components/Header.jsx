import React from 'react'
import { Link } from 'react-router'

function Header() {
    return (
        <div className='header'  >

            <div>
                <Link className='link' to={"/"}>Logo</Link>
            </div>

            <div>
                <ul >
                    <li>
                        <Link className='link' to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className='link' to={"/convertor"}>Currency Convertor</Link>
                    </li>
                    <li>
                        <Link className='link' to={"/houses"}>Houses</Link>
                    </li>
                      <li>
                        <Link className='link' to={"/users"}>Users</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header