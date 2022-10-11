import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './QuizBank.css'
import { ArrowLongRightIcon, } from '@heroicons/react/24/solid'

const QuizBank = () => {
    const { data } = useLoaderData()
    // console.log(data);
    return (
        <section className='container'>
            <h1 className='topic'>ALL TOPIC HERE...!</h1>
            <div className='items '>
                {
                    data.map(topic => {
                        const { logo, name, id, total } = topic;
                        return <div className='card' key={id}>
                            <div className='item'>

                                <div className="image">
                                    <img src={logo} alt="" />
                                </div>
                                <h3>{name}</h3>
                                <h4>Question : {total}</h4>
                                <div className="btn">
                                    <Link to={`quiz/${id}`}>Learn More &nbsp; < ArrowLongRightIcon className='arrow' /> </Link>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default QuizBank;