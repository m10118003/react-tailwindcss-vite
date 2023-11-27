// TicTacToe.tsx
import { useState } from "react";
import App from "../App";

// 這是方塊的 component, 可以重用, 渲染, 管理和更新 UI 元素
// 預設方塊顯示為 X
const Square = ({
  value,
  onSquareClick,
}: {
  value: string | number;
  onSquareClick: () => void;
}) => {
  // Square = ({ value }) => {...} value 用來傳值
  // const [isClicked, setIsClicked] = useState("X");
  // const [value, setValue] = useState(null);
  // const handleClick = (): void => {
  //   setIsClicked(isClicked ? "O" : "X");
  //   console.log(isClicked, "isClicked");
  // };
  // function handleClick() {
  //   console.log('clicked!');
  // }
  return (
    <>
      {/* <button className="squares" onClick={onSquareClick}>
        {value}
      </button> */}

      <button
        onClick={onSquareClick}
        className="square flex h-[100px] w-[100px] items-center justify-center border-2 border-white bg-black text-3xl font-black text-white transition delay-100 duration-100  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black"
      >
        {/* {isClicked} */}
        {value}
      </button>
    </>
  );
};

export default function TicTacToe() {
  const [xIsNext, setXIsNext] = useState(true); // 控制 X 和 O 的顯示
  const [squares, setSquares] = useState(Array(9).fill(null)); // 創造九個元素的陣列和將每個元素設成 null
  // 這裡運用到了 Closure 的概念

  console.log(squares, "squares1"); // 開局會被呼叫, 連同父層 TicTacToe 一起被 render

  // 執行 X, O 顯示
  const handleClick = (i: number): void => {
    // 檢查方塊內有沒有值
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquare = squares.slice(); // 抓到所有的值

    // nextSquare[0] = "X"; // 把第一個設成 X, 接著 <Square value={squares[0]} onSquareClick={handleClick(0)}  /> 這是在傳一個 handleClick 函數成一個 prop,這樣會造成無窮迴圈
    // 造成無窮迴圈的原因是 handleClick(0) 藉由 setSquares() 改變 TicTacToe() 組件的 state, 因此整個 TicTacToe() 組件都會被 re-render, 接著再 run handleClick(0), 如此重複下去
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);

    console.log(squares, "squares2"); // 只有點擊的時候才會呼叫
    console.log("clicked!");
  };

  // 判斷贏家是誰
  const calculateWinner = (squares: string[]): string | null => {
    // 勝利條件
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Thw Winner is: " + winner;
  } else {
    status = "Next player is: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="TicTacToe">
      <App />
      <h1>Tic-Tac-Toe</h1>
      {/* This training is for learn by doing */}
      <div className="board-wrapper mt-4 flex justify-evenly">
        <div className="board-container space-py-5 mx-[-10rem]">
          <div className="player-status mt-4 text-center text-2xl font-black">
            {status}
          </div>
          <div className="board mt-4 flex flex-col items-center">
            <div className="board-row inline-flex	border-2 border-black">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
              {/* onSquareClick={() => handleClick(0) 立即執行的方式可傳遞這些函數成 props 並往下傳 */}
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row inline-flex	border-2 border-black">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row inline-flex	border-2 border-black">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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

// 1. 刻版, 造出一個大方向的九宮格圖版
// 2. 分解成小組件, 每個 Square 都是一個按鈕
// 3. 造出電路, 使用 useState 造出預設值, 並使用 setIsClicked 來控制更改的值(isClicked)

// 4. Lifting state up(提升狀態):
// 如果讓 parent TicTacToe() {...} 去問每個 Square 來拿取 Square 的 state, 可能會難以理解, 易受 bug 影響和重構...等
// Store 遊戲的 state 在 parent TicTacToe() {...} 中, 而不是每個 Square, 讓 TicTacToe() 組件去告訴每個 Square 透過傳遞 Prop 去顯示甚麼
// 從多個 children 中拿取資料, 或兩個 子組件的溝通, 建議在父組件中宣告共享的 state, 從父層藉由 props 回傳 state 到子組件, 由上而下, 不超過三層, 這將保持子組件同步彼此和其父祖件一致
// 這常使用在重構 React 多個組件時

// 5. 透過提升狀態, 讓 Square 接收父層值
// 6. 接著空的 Square 在被按下的時候必須要能接收 'X', 'O' 或 null, 並且 Square 必須要能更新 TicTacToe 的狀態, 而 Square 組件中的 State 是私有的, 不能直接被定義, 因此無法從 Square 直接去更新 TicTacToe 的狀態
// 7. 為了將父層 TicTacToe 組件的 onClick 事件傳到 Square, 可以藉由 handleClick() 傳遞 props 去更新 Square 的狀態, 接著 Square 將會由 onSquareClick={() => handleClick(0) 來做連接到父層, 這立即執行的方式可傳遞這些函數成 props 並往下傳遞
// 8. 讓父層組件能處裡 state 後, 點擊 Square 時, Square 將可以要求父層組件更新 State, 同時父子組件能自動更新渲染, 要記得 onClick 是內建在 Square 的, 可以隨意命名

// Immutability 不可變更的性質, 不改變原本數據的值, 但可以藉由 拷貝 一份副本來改變值
// 通常有兩種途徑去改變資料, 第一種是藉由直接改變資料的值來 mutate data, 第二種是用一個新的 copy (shallow copy)來替換掉 data
// 不可變的性質有個好處是, 當預設狀況下, 父組件的 state 更改時, 子組件也能自動重新呈現, 甚至可能包含未受影響的子組件, 這樣會使得維護成本降低
// 不過, 重新渲染對 User 來說並不明顯, 但出於性能原因, 還是會希望跳過 re-rendering tree 中明顯不受影響部分

// 9. 設定一個 useState true or false 來作 "X", "O" 控制, 接著藉由 return early, 先檢查方塊內有沒有填值, 如果有就跳過
//
