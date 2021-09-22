import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

const Header = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth)

    return (
        <div>
            {isAuth ? 
                (
                <nav>
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li ><Link to="/users">Users</Link></li>
                            <li ><Link to="/profile">Profile</Link></li>
                        </ul>
                </nav>
            ) : (
                <nav>
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                </nav>
            )
            }
        </div>
    )
}

export default Header
