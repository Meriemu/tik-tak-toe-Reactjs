import React, { useContext } from "react";
import Case from "./Case";
import { winnerContext } from "../context/contextFile";
const Wrapper = () => {
	const { winner, cases, disableCase, handleClick, nextPayer  } = useContext(winnerContext)
  return (
    <div className="ttt-wrapper">
      <p className="ttt-player">Player : {nextPayer}</p>
      <div className="ttt-3-cols">
        <Case winner={winner} 
		  		disabledProps={disableCase[0]}
				value={cases[0]}
				handleClickProps={() => handleClick(0)}
			/>
        <Case winner={winner} 
		  		disabledProps={disableCase[1]}
				value={cases[1]}
				handleClickProps={() => handleClick(1)}
			/>
        <Case winner={winner} 
		  		disabledProps={disableCase[2]}
				value={cases[2]}
				handleClickProps={() => handleClick(2)}
			/>
      </div>
      <div className="ttt-3-cols">
        <Case winner={winner} 
		  		disabledProps={disableCase[3]}
				value={cases[3]}
				handleClickProps={() => handleClick(3)}
			/>
        <Case winner={winner} 
		  		disabledProps={disableCase[4]}
				value={cases[4]}
				handleClickProps={() => handleClick(4)}
			/>
        <Case winner={winner} 
		  		disabledProps={disableCase[5]}
				value={cases[5]}
				handleClickProps={() => handleClick(5)}
			/>
      </div>
      <div className="ttt-3-cols">
        <Case winner={winner} 
		  		disabledProps={disableCase[6]}
				value={cases[6]}
				handleClickProps={() => handleClick(6)}
			/>
        <Case winner={winner} 
		  		disabledProps={disableCase[7]}
				value={cases[7]}
				handleClickProps={() => handleClick(7)}
			/>
        <Case winner={winner} 
		  		disabledProps={disableCase[8]}
				value={cases[8]}
				handleClickProps={() => handleClick(8)}
			/>
      </div>
      <p className="ttt-winner">Winner : {winner}</p>
    </div>
  );
};

export default Wrapper;
