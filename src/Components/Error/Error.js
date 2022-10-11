import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className='error'>
            <div className="e-image">
                <img src={require("../../Images/404.png")} alt='pic' />
            </div>
            <h1>You'vs found a page that doesn't exist</h1>
            <h3>Something went wrong</h3>
            <Link className='e-btn' to={'/'}>Back To Home</Link>
        </div>
    );
};

export default Error;