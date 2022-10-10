import React from 'react';
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero-img'>
            <img src={require ('../../Images/img-1.png')} alt='pic' />
            <img src={require ('../../Images/img-2.webp')} alt='pic' />
            <img src={require ('../../Images/img-3.webp')} alt='pic' />
            <img src={require ('../../Images/img-4.png')} alt='pic' />
        </div>
    );
};

export default Hero;