import React, { useEffect, useState } from 'react';
import './Questions.css'
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swal } from 'sweetalert2';



const Questions = ({ questions }) => {
    const { options, id, question, correctAnswer } = questions

    const currect = (option, e) => {
        if (correctAnswer === option) {
            eyePower()
            e.setAttribute('class', 'labelText');

        }
    }
    const eyePower = () => {
        toast(correctAnswer, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }); 


    }


    return (
        <div className='questionGroup' >
            <ToastContainer />

            <p>{question}</p>
            <EyeIcon onClick={eyePower} className='eye' />
            <div className='question'>
                {
                    options.map(option => {

                        return <div className='singleQuestion' key={id}>
                            {/* <input type="checkbox" name="" /> */}
                            <label onClick={(e) => currect(option, e.target)} >{option}</label>

                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default Questions;