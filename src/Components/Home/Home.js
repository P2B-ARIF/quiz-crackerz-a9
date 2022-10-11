import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import QuizBank from '../QuizBank/QuizBank';

const Home = () => {
    return (
        <div>
          <Hero/>
          <QuizBank/>
          <Footer/>
        </div>
    );
};

export default Home;