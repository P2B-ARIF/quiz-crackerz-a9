import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1>Three Sweet Question of Answer</h1>
            <div className='b-question'>
                <div className="answer">
                    <h3>1. What is purpose of react router?</h3>
                    <p><strong>Answer:</strong> React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. </p>
                </div>

                <div className="answer">
                    <h3>2. How does CONTACT API work?</h3>
                    <p><strong>Answer: </strong> Context API allows you to have a central store where your data lives. The store can be inserted into any component directly. You can cut out the middleman!</p>
                </div>

                <div className="answer">
                    <h3>3. What is useRef? </h3>
                    <p><strong>Answer: </strong>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;