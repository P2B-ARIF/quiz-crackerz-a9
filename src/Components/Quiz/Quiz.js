import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';
import Footer from '../Footer/Footer';
import { useState } from 'react';


const Quiz = () => {
    const quizId = useParams();
    const { data } = useLoaderData()
    const { id, name, questions } = data;
    // console.log(data);

    const [plus, setPlus] = useState(0)
    const [minus, setMinus] = useState(0)


    const extraWorksTrue = (props) => {
        console.log(props);
        if (props === true) {
            setPlus(plus + 1)
        }
        if (props === false) {
            setMinus(minus + 1)
        }

    }


    return (
        <>
            <div className='quiz'>
                <div className="extraWork">
                    <div className='c-plus'>
                        <h1>correct</h1>
                        <span className='count-plus'>{plus}</span>
                    </div>
                    <div className='c-minus'>
                        <h1>Incorrect</h1>
                        <span className='count-minus'>{minus}</span>
                    </div>
                </div>
                <h2 >Quiz of {name}</h2>
                {
                    questions.map(question => <Questions
                        key={id}
                        questions={question}
                        extraWorksTrue={extraWorksTrue}
                    />)
                }
            </div>
            <Footer />
        </>
    );
};

export default Quiz;