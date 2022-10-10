import React, { useEffect, useState } from 'react';
import './Questions.css'

const Questions = ({ questions }) => {
    const { options, id, question, correctAnswer } = questions

    const currect = (option, e) => {
        if (correctAnswer === option) {
            e.setAttribute('class', 'labelText');
        }
        
    }
    

    return (
        <div>
            <p>{question}</p>
            <button onClick={currect} >eye</button>
            <div className=''>
                {
                    options.map(option => {

                        return <div key={id}>
                            <input type="checkbox" name="" />
                            <label id='arif' onClick={(e) => currect(option, e.target)} >{option}</label>
                        </div>
                    })
                }
                <br />
            </div>
        </div>
    );
};

export default Questions;