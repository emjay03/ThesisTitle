
import './App.css';
import './TitleData';
import { useState } from 'react';
import TitleData from './TitleData';

function App() {
  
  const [Title, setTitle ]= useState(TitleData[0])
  
  const getTitle=()=>{
    const Randomnumber=Math.floor(Math.random()*TitleData.length);
    setTitle(TitleData[Randomnumber])
  }
  return (
   
   <>
  <div className='container'>
   <div className='pagetitle'>
      <h1>Thesis Title Generator</h1>
      <div className='under'></div>
    </div>
   
   <div className='card'>

    <div className='title'>
      <p>{Title.thesistitle}</p>
     
    
    </div>
    </div>
    <div className='button'>
        <button onClick={getTitle}>Generate</button>
      </div>
      <footer>
      <p className='footer'>Made by <a href="https://www.facebook.com/mjcariso03"> MJ Cariso</a></p>
      </footer>
       
     
    </div>
   
   </>
  );
}

export default App;
