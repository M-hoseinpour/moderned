import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";


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
                    <li><Link to='/login'>About us</Link></li>
                    <li><Link to='/login'>Projects</Link></li>
                    <li><Link to='/login'>News</Link></li>
                    <li><Link to='/login'>Contact us</Link></li>
                    <li><i className="fas fa-home"></i></li>
                    <li><Link to='/login'><i className="fas fa-user"></i></Link></li>
                    <li className='search'>
                        <div className="search-box">
                            <button className="btn-search"><i className="fas fa-search"></i></button>
                            <input type="text" className="input-search" placeholder="Type to Search..."/>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
