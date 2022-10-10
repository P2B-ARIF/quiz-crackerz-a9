import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './QuizBank.css'

const QuizBank = () => {
    const { data } = useLoaderData()
    // console.log(data);
    return (
        <div className='items container'>
            {
                data.map(topic => {
                    const { logo, name, id } = topic;
                    return <div className='card' key={id}>
                        <img src={logo} alt="" />
                        <h3>{name}</h3>
                        <div className="btn">
                            <Link to={`quiz/${id}`}>Learn More</Link>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default QuizBank;