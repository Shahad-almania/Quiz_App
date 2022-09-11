
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './Quiz.css';
import Question from '../Components/Question'

const Quiz = ({name, questions, score, setQuestions, setScore}) => {
  const[options, setOptions]=useState();
  const[currQues, setCurrQues]=useState(0);

  useEffect(()=> {

    setOptions(questions && handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers,
    ])
    
  );

  },[currQues ,questions]);

 console.log(options);

  const handleShuffle=(options)=>{
    return options.sort(() => Math.random() - 0.5); 
  };

  return (
    <div className='quiz'>
      <div className='container p-5 bglight shadow'>
  
      <form>
      <span className='subtitle'> <b>Welcome</b></span> <br />
       
       {
        questions ? (
        <> 
        <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              Score : {score}
            </span>
          </div>
          <Question
          currQues={currQues}
          setCurrQues={setCurrQues}
          questions={questions}
          options={options}
          correct={questions[currQues]?.correct_answer}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          
          />
        
         </>
        ):(  
          
          <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
          />

         
          ) }
      </form>
      </div>
      </div> 
    
  );
};

export default Quiz;