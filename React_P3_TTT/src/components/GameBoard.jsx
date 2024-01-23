//Static array defin=end for the board symbol

import { useState } from "react";

//col==>1 col==>2 col==>3
const inintialGameBoard = [
  [null, null, null], //row==>1
  [null, null, null], // row==>2
  [null, null, null], //row==>3
];
export default function GameBoard() {
  const [GameBoard, setGameBoard] = useState(inintialGameBoard);
  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      console.log(updateBoard);
      updateBoard[rowIndex][colIndex] = "X";
      return updateBoard;
      // prevGameBoard([rowIndex][colIndex])='X'
      // return prevGameBoard
    });
  }
  return (
    <ol id='game-board'>
      {GameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
