
import React from 'react';
import './Home.css';
import Categories from '../Select Category Data/Categories';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MenuItem, TextField } from '@mui/material';


const Home = ({ name, setName, fetchQuestions }) => {

 const [category, setcategory] = useState('');
 const [difficulty, setdifficulty] = useState('');
 


const navigate = useNavigate();

 //Go from home page to quiz page
 const goToQuiz= ()=> {
  navigate('/quiz')
 }

  return (
    <div className='home'>
      <div className='container'>
  
       <div className='row row-cols-md-2 row-cols-1 d-flex justify-content-center m-5 p-5 bglight shadow'>
       
       <form>
       <span className="settings">Quiz Settings
    
       </span>
       <div className='row m-4'>
       <TextField label='Tell us your name'  color='secondary' variant='outlined' style={{marginTop:20}} onChange={(e) => setName(e.target.value)} value={name} />
       </div>
       <div className='row m-4'>
      <TextField select label='select category'  color='secondary' variant='outlined' onChange={(e) => setcategory(e.target.value)} value={category}>
    {
    Categories.map((cat) => (
      <MenuItem key={cat.category} value={cat.value}>
        {cat.category}
      </MenuItem>
    ))
    }

    </TextField>
    </div>
    <div className='row m-4 '>
      <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ margintop:25}}
            onChange={(e) => setdifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
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
