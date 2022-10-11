import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';
import Footer from '../Footer/Footer';


const Quiz = () => {
    const quizId = useParams();
    const { data } = useLoaderData()
    const { id, name, questions } = data;
    // console.log(data);

    return (
        <>
            <div className='quiz'>
                <h2 >Quiz of {name}</h2>
                {
                    questions.map(question => <Questions
                        key={id}
                        questions={question}
                    />)
                }
            </div>
            <Footer />
        </>
    );
};

export default Quiz;