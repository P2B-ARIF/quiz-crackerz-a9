import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {

    const [open, setOpen] = useState(false)
    const navSwitch = () => {
        setOpen(!open)
    }

    return (
        <nav>
            <div className='navbar container'>
                <div className="logo-sec">
                    <h2>QUICK-TECH</h2>
                    <div onClick={navSwitch} className="NavIcon">
                        {

                            open ? <Bars3Icon className='bars3Icon' /> : <XMarkIcon className='bars3Icon' />
                        }
                    </div>

                </div>

                <div className={`menu-sec ${open ? 'top' : 'bottom'}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;