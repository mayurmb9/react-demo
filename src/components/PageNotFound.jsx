import React from 'react'
import errorImage from '../assets/404.png'
import { Link } from 'react-router'

export default function PageNotFound() {
    return (
        <div style={{ textAlign: "center" }}>
            <h3>404 Page Not Found !</h3>
            <div>
                <Link className='link' to="/">
                    Go back to Home
                </Link>
            </div>

            <img style={{}} src={errorImage} alt="PageNotFound" />
        </div>
    )
}
