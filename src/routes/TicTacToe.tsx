// TicTacToe.tsx
import { useState } from "react";
import App from "../App";

// 這是方塊的 component, 可以渲染, 管理和更新 UI 元素
const Square = () => {
  const [isClicked, setIsClicked] = useState("X");
  const handleClick = () => {
    setIsClicked(isClicked ? "O" : "X");
    console.log(isClicked, "isClicked");
  };
  return (
    <button
      onClick={handleClick}
      className="square flex h-[100px] w-[100px] items-center justify-center border-2 border-white bg-black text-3xl font-black text-white transition delay-150 duration-150  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black"
    >
      {isClicked}
    </button>
  );
};

export default function TicTacToe() {
  return (
    <div className="TicTacToe">
      <App />
      <h1>Tic-Tac-Toe</h1>
      {/* This training is for learn by doing */}
      <div className="board-wrapper mt-4 flex justify-evenly">
        <div className="board-container space-py-5 mx-[-10rem]">
          <div className="player-status mt-4 text-center text-2xl font-black">
            Hi there, player:
          </div>
          <div className="board mt-4 flex flex-col items-center">
            <div className="board-row inline-flex	border-2 border-black">
              <Square />
              <Square />
              <Square />
            </div>
            <div className="board-row inline-flex	border-2 border-black">
              <Square />
              <Square />
              <Square />
            </div>
            <div className="board-row inline-flex	border-2 border-black">
              <Square />
              <Square />
              <Square />
            </div>
          </div>
        </div>
        <div className="game-status-container space-py-5 mx-[-10rem] mt-3">
          1. <button>Go to Game Start</button>
        </div>
      </div>
    </div>
  );
}
