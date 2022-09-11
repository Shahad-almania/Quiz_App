

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

 //[{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?","correct_answer":"Demolition","incorrect_answers"
   
   useEffect(() => {
    const fetchQuestion = async (category='', difficulty='') => {
      const request = await fetch(`https://opentdb.com/api.php?amount=10${category &&`&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
      const data = await request.json();
      //console.log(data);
      setQuestions(data.results) ; 
    };
     fetchQuestion();
  },[]);
    
   
    /*
    const fetchQuestion = async(category='',difficulty='')=> {
      const {data} = await axios.get(`
      https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple `
       );
         console.log(data);
    }; 
    */


    

 /*useEffect(() =>{
    const fetchCategoryList = async () => {
      const request = await fetch('./Select Category Data/Categories.js');
      const data = await request.json();
      setcategoryList(data);
    };
    fetchCategoryList();
    
  },[]);
*/

////////////////////////////////////////
  return (
    <BrowserRouter>
    <Header />
   


  <Routes>
   <Route path='/' element={<Home />} />

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
