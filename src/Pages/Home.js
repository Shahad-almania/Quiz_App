
import React from 'react';
import './Home.css';
import Categories from '../Select Category Data/Categories';
import { useState } from 'react';
import { useNavigate } from 'react-router';




const Home = ({ name, setName, fetchQuestions }) => {

 const [category, setcategory] = useState('');
 const [difficulty, setdifficulty] = useState('');
 const [error, setError] = useState(false);


const navigate = useNavigate();

 //Go from home page to quiz page
 const goToQuiz= ()=> {
  navigate('/quiz')
 }

  
const hendleSubmit = () => {
  if(!category || !difficulty || !name){
     setError(true);
     return;
  } else {
     setError(false);
     fetchQuestions(category,difficulty);
     navigate.push('/quiz')
  }
 }; 



  return (
    <div className='home'>
      <div className='container'>
  
       <div className='row row-cols-md-2 row-cols-1 d-flex justify-content-center m-5 p-5 bglight shadow'>
       
       <form>
       <span className="settings">Quiz Settings
    
       </span>
       <div className="form-floating mb-3 mt-3">
          <input type="name" className="form-control" placeholder="Enter Your Name mt-5" 
            onChange={(e) => setName(e.target.value)} />
          <label>Name</label>
  
       </div>
       
       <div className="form-floating">
       <select defaultValue='' onChange={(e) => setcategory(e.target.value)}
            value={category} className="form-select mb-3">

          <option  />
            {Categories.map((cat) => (
              <option key = {cat.category} value = {cat.value}>
              {cat.category}
          </option>
          
        ))};
      </select>
        <label>Select Category</label>
      </div>

      <div className="form-floating">
        <select defaultValue='' className="form-select mb-3">
        onChange={(e) => setdifficulty(e.target.value)}
            value={difficulty}

        <option ></option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>

        
      </select>
        <label>Select Difficulty</label>
      </div>
      
      <button onClick={goToQuiz} type="button" className="btn btn-secondary"> 
        Start Quiz</button>
       </form>
      </div>
    </div>
  </div>
   
  );
};
export default Home;
