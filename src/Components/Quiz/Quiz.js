import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';
import { ToastContainer, toast } from 'react-toastify';


const Quiz = () => {
    const quizId = useParams();
    const { data } = useLoaderData()
    const { total, id, name, logo, questions } = data;
    console.log(data);

    // const eyePower = () => {
    //     toast("Wow so easy!");
    //     // console.log('hi', correctAnswer);
    // }

    // console.log(quizId.quiz);
    return (
        <>
            {/* <ToastContainer /> */}

            <div  className='quiz'>

                <h2 >Quiz of {name}</h2>
                {
                    questions.map(question => <Questions
                        key={id}
                        questions={question}
                    />)
                }
            </div>
        </>
    );
};

export default Quiz;