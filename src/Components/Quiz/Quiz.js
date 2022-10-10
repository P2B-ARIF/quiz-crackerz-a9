import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizId = useParams();
    const { data } = useLoaderData()
    const { total, id, name, logo, questions } = data;
    console.log(data);

    console.log(quizId.quiz);
    return (
        <div>
            <h2>Topic {name}</h2>
            {
                questions.map(question => <Questions
                    key={id}
                    questions={question}
                />)
            }
        </div>
    );
};

export default Quiz;