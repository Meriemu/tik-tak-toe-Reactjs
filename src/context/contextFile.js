import React, { useState, createContext } from "react";

export const winnerContext = createContext();

export function WinnerContextProvider(props) {
  const [cases, setCases] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [nextPayer, setNextPayer] = useState("X");
  const [disableCase, setDisableCase] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    cases[i] = isX ? "X" : "O";
    setCases(cases);

    setIsX(!isX);

    setNextPayer(!isX ? "X" : "O");

    disableCase[i] = "disabled";
    setDisableCase(disableCase);
  };
  function CalcWinner(cases) {
    const tab = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i of tab) {
      const [a, b, c] = i;
      if (cases[a] && cases[a] === cases[b] && cases[a] === cases[c]) {
        return cases[a];
      }
    }
  }

  const winner = CalcWinner(cases);

  return (<winnerContext.Provider value={{  winner, cases, disableCase, handleClick, nextPayer  }}>{props.children}</winnerContext.Provider>);
};
