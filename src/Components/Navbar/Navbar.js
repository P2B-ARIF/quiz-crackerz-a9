import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar container'>
                <div className="logo-sec">
                    <h2>QUICK-TECH</h2>
                </div>
                <div className="menu-sec">
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;