import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <div className="navbar">
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link to="/">Home</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/travel">Travel</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/contact">Contact me</Link>
                </li>
            </ul>
        </div>

    )
}

export default Navbar
