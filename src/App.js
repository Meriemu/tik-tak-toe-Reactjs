
import React, { useContext } from 'react';
import './App.scss';
import Wrapper  from './component/Wrapper'; 

import  wellDone from './images/wellDone_pink.png'

import { winnerContext } from './context/contextFile';

function App() {
  const { winner } = useContext(winnerContext);
  // console.log(winner)
  return (
    <div className={`App ${winner && 'ttt-overlay'} `}>
      <Wrapper />
      <img className={`ttt-wellDone ${winner && 'show'} `} src={ wellDone } alt='' />
      
    </div>
  );
}

export default App;
