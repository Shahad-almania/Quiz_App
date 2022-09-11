

import { useState } from 'react';
import React, { useEffect } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

function App() {


  const [name, setName] = useState('');
  const [questions, setQuestions] = useState('');
  const [score, setScore] = useState(0);

 
   useEffect(() => {
    const fetchQuestion = async (category='', difficulty='') => {
      const request = await fetch(`https://opentdb.com/api.php?amount=10${category &&`&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
      const data = await request.json();
      //console.log(data);
      setQuestions(data.results) ; 
    };
     fetchQuestion();
  },[]);
    
   
  return (
    <BrowserRouter>
    <Header />
   


  <Routes>
   <Route path='/' element={<Home
    name={name}
    setName={setName}
    //fetchQuestion={fetchQuestion}
   />} />

   <Route path='/quiz' element={
   <Quiz 
   name={name}
   questions={questions}
   score={score}
   setScore={setScore}
   setQuestions={setQuestions}
   />}
    />

   <Route path='/result' element={
   <Result
   score={score} 
   
   />} 
   />
   </Routes>
    
  </BrowserRouter>
    
  );
}

export default App;
