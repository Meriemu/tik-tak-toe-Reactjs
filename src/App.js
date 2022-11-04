
import React, { useContext } from 'react';
import './App.scss';
import Wrapper  from './component/Wrapper'; 

import  wellDone from './images/wellDone.png'

import { winnerContext } from './context/contextFile';

function App() {
  const { winner } = useContext(winnerContext);
  // console.log(winner)
  return (
    <div className="App">
      <Wrapper />
      <img className={`ttt-wellDone ${winner && 'show'} `} src={ wellDone } alt='' />
      
    </div>
  );
}

export default App;
