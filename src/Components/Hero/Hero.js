import React from 'react';
import './Hero.css'
import { useState } from 'react';
import { ForwardIcon, BackwardIcon } from '@heroicons/react/24/solid';



const Hero = () => {

    const [count, setCount] = useState(0)
    const [format, setFormat] = useState('img-3.webp')
    const [format2, setFormat2] = useState('img-4.webp')

    const formats = [
        "img-1.png",
        "img-2.jpg",
        "img-3.webp",
        "img-4.webp",
    ]
    const formats2 = [
        "img-4.webp",
        "img-1.png",
        "img-2.jpg",
        "img-3.webp",
    ]
    const next = () => {
        if (count >= 3) {
            setCount(0)
        } else {
            setCount(count + 1)
        }
        setFormat(formats[count])
        setFormat2(formats2[count])
    }

    const pre = () => {
        if (count <= 0) {
            setCount(3)
        } else {
            setCount(count - 1)
        }
        setFormat(formats[count])
        setFormat2(formats2[count])
    }

    return (
        <>
            <h1 className='dev-text'><ForwardIcon className='forward' /> Focus on Web-Development <BackwardIcon className='forward' /> </h1>
            <section className='hero'>
                <div className="first">
                    <div className='hero-img-1'>
                        <img src={require(`../../Images/${format}`)} alt='pic' />
                    </div>
                    <div className="btn1">
                        <button className='plus' onClick={next}> + </button>
                    </div>
                </div>
                <div className="second">
                    <div className='hero-img-2'>
                        <img src={require(`../../Images/${format2}`)} alt='pic' />
                    </div>
                    <div className="btn2">
                        <button className='minus' onClick={pre}> - </button>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;