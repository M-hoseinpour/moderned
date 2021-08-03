import React from 'react'
import './navbar.css'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='right-nav'>
                <h3>
                    Modernity
                </h3>
            </div>
            <div className='left-nav'>
                <ul className='icons'>
                    <li>About us</li>
                    <li>Projects</li>
                    <li>News</li>
                    <li>Contact us</li>
                    <li>Home</li>
                    <li>User</li>
                    <li className='search'>
                        <div className="search-box">
                            <button className="btn-search">Search</button>
                            <input type="text" className="input-search" placeholder="Type to Search..."/>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
