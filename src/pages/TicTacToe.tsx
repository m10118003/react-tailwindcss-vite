// TicTacToe.tsx
import { useState } from "react";
import App from "@/App";

// 這是方塊 Square 的 component, 可以重用, 渲染, 管理和更新 UI 元素
// 預設方塊顯示為 X
const Square = ({
  value,
  onSquareClick,
}: {
  value: string;
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

// Game 組件
// 由上層 TicTacToe 傳送三個 props, xIsNext、squares 和一個新的 onPlay 來做完全控制, 這樣玩家移動後, 該 Game 組件可以用更新的 squares 陣列來呼叫函數
const Game = ({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquare: string[]) => void;
}) => {
  // const [xIsNext, setXIsNext] = useState(true); // 控制 X 和 O 的顯示
  // const [squares, setSquares] = useState(Array(9).fill(null)); // 創造九個元素的陣列和將每個元素設成 null

  // 這裡運用到了 Closure 的概念

  // console.log(squares, "squares1"); // 開發模式下, 開局組件會被呼叫兩次, 連同父層 Game 一起被 render, 來確保組件在 render 過程中沒有非預期的副作用, 生產模式則不會

  // 執行 X, O 顯示
  const handleClick = (i: number): void => {
    // 用 early return 檢查方塊內有沒有值
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquare = squares.slice(); // 抓到所有的值

    // nextSquare[0] = "X"; // 把第一個設成 X, 接著 <Square value={squares[0]} onSquareClick={handleClick(0)}  /> 這是在傳一個 handleClick 函數成一個 prop,這樣會造成無窮迴圈
    // 造成無窮迴圈的原因是 handleClick(0) 藉由 setSquares() 改變 Game() 組件的 state, 因此整個 Game() 組件都會被 re-render, 接著再 run handleClick(0), 如此重複下去
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    // 讓上層組件可以傳送 props, 替換掉 setSquares 和 setXIsNext, 由上層 TicTacToe 的 onPlay 來單一呼叫現在的 Game 組件
    onPlay(nextSquare);
    // setSquares(nextSquare);
    // console.log(setSquares(nextSquare), "setSquares");
    // setXIsNext(!xIsNext);
    // console.log(setXIsNext(!xIsNext), "setXIsNext !xIsNext");
    // console.log(xIsNext, "xIsNext");

    // console.log(squares, "squares2"); // 只有點擊的時候才會呼叫
    // console.log("clicked!");
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Thw Winner is: " + winner;
  } else {
    status = "Next player is: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game-container space-py-5 mx-[-10rem]">
      <div className="player-status mt-4 text-center text-2xl font-black">
        {status}
      </div>
      <div className="game mt-4 flex flex-col items-center">
        <div className="game-row inline-flex	border-2 border-black">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          {/* onSquareClick={() => handleClick(0) 立即執行的方式可傳遞這些函數成 props 並往下傳 */}
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="game-row inline-flex	border-2 border-black">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="game-row inline-flex	border-2 border-black">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
};

export default function TicTacToe() {
  // const [xIsNext, setXIsNext] = useState(true); // 調用 setXIsNext 會觸發組件重新渲染, 在調用狀態更新函數後立即執行 console.log 可能看到的會是舊狀態
  const [history, setHistory] = useState([Array(9).fill(null)]); // 調用 setHistory 會觸發組件重新渲染
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0; // 不需同時 store !xIsNext 和 nextMove 在 setXIsNext 的 state 內
  // const currentSquares = history[history.length - 1]; // 讀取最後一個元素
  const currentSquares = history[currentMove];
  // 當 TicTacToe 第一次渲染 -> 印出遊戲初始歷史和當前方塊的狀態
  // 如果有任何點擊方塊事件, 會觸發更新 setXIsNext, setHistory, 導致組件重新渲染
  // 重新渲染過程中, 會再次印出遊戲歷史和當前方塊狀態
  // 先渲染最上層的組件, 再去渲染下層組件

  const handlePlay = (nextSquare: string[]) => {
    // 創造新的歷史紀錄
    const nextHistory = [
      ...history.slice(0, currentMove + 1), // 擷取移動之前所有歷史狀態, 這樣回到過去某步進行新行動時, 可以刪除那個步驟後的所有歷史紀錄
      nextSquare,
    ];
    // setHistory([...history, nextSquare]);
    setHistory(nextHistory); // 更新歷史狀態
    setCurrentMove(nextHistory.length - 1); // 更新當前行動
    // setXIsNext(!xIsNext); // 切換玩家
  };

  // 回復上一動功能, 並切換到某個特定行動步驟, parm nextMove 代表遊戲歷史步驟的索引
  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove); // 設置當前行動, 可以將遊戲狀態回復到玩家選擇的步驟
    // setXIsNext(nextMove % 2 === 0); // 判斷下一個應該行動的玩家, 假如 nextMove 是偶數, %2 會是 0, 因此 setXIsNext(true) 會被 call, 表示下一個玩家是 X
    // console.log(nextMove, "nextMove");
  };

  // 顯示遊戲行動步驟歷史過程
  const moves = history.map((_squares: string[], move: number): JSX.Element => {
    let description;
    if (move > 0) {
      description = `Go to move  #` + move;
    } else {
      description = `Let the game begin!`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="tic-tac-toe">
      <App />
      <h1 className="mt-5 pt-5">Tic-Tac-Toe</h1>
      {/* This training is for learn by doing */}
      <div className="game mt-4 flex justify-evenly">
        <div className="game-board">
          <Game
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-status-container space-py-5 mx-[-10rem] mt-3 flex items-start">
          <ol className="game-status list-decimal">{moves}</ol>
        </div>
      </div>
    </div>
  );
}

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
    // 先檢查 squares[a] 有沒有值, 如果 [a] 有沒有值, 那方格尚未被佔據, 因此不可能成勝利直線
    // 假如 [a] 有值(被 X 或 O 佔據), 這個 squares[a] === squares[b] 檢查值是否相同, 如果相同表示被同一個玩家佔據
    // 如果 squares[a] === squares[c] 檢查值是否相同, 表示 a, b, c 都被同一個玩家佔領
    // 但如果沒有值現滿足條件, 則返回 null 表示沒有玩家勝出
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// 1. Building the board, 刻版, 造出一個大方向的九宮格圖版
// 2. Making an interactive component: 分解成小組件, 每個 Square 都是一個按鈕
// 3. 造出電路, 使用 useState 造出預設值, 並使用 setIsClicked 來控制更改的值(isClicked)

// 4. Lifting state up(提升狀態):
// 如果讓 parent TicTacToe() {...} 去問每個 Square 來拿取 Square 的 state, 可能會難以理解, 易受 bug 影響和重構...等
// Store 遊戲的 state 在 parent TicTacToe() {...} 中, 而不是每個 Square, 讓 TicTacToe() 組件去告訴每個 Square 透過傳遞 Prop 去顯示甚麼
// 從多個 children 中拿取資料, 或兩個 子組件的溝通, 建議在父組件中宣告共享的 state, 從父層藉由 props 回傳 state 到子組件, 由上而下, 不超過三層, 這將保持子組件同步彼此和其父祖件一致
// 這常使用在重構 React 多個組件時

// 5. Lifting state up: 透過提升狀態, 讓 Square 接收父層值
// 接著空的 Square 在被按下的時候必須要能接收 'X', 'O' 或 null, 並且 Square 必須要能更新 TicTacToe 的狀態, 而 Square 組件中的 State 是私有的, 不能直接被定義, 因此無法從 Square 直接去更新 TicTacToe 的狀態
// 為了將父層 TicTacToe 組件的 onClick 事件傳到 Square, 可以藉由 handleClick() 傳遞 props 去更新 Square 的狀態, 接著 Square 將會由 onSquareClick={() => handleClick(0) 來做連接到父層, 這立即執行的方式可傳遞這些函數成 props 並往下傳遞
// 讓父層組件能處裡 state 後, 點擊 Square 時, Square 將可以要求父層組件更新 State, 同時父子組件能自動更新渲染, 要記得 onClick 是內建在 Square 的, 可以隨意命名

// 6. Why immutability is important: Immutability 不可變更的性質, 不改變原本數據的值, 但可以藉由 拷貝 一份副本來改變值
// 通常有兩種途徑去改變資料, 第一種是藉由直接改變資料的值來 mutate data, 第二種是用一個新的 copy (shallow copy)來替換掉 data
// 不可變的性質有個好處是, 當預設狀況下, 父組件的 state 更改時, 子組件也能自動重新呈現, 甚至可能包含未受影響的子組件, 這樣會使得維護成本降低
// 不過, 重新渲染對 User 來說並不明顯, 但出於性能原因, 還是會希望跳過 re-rendering tree 中明顯不受影響部分

// 7. Taking turns: 設定一個 useState true or false 來作 "X", "O" 控制, 接著藉由 return early, 先檢查方塊內有沒有填值, 如果有就跳過
// 8. Lifting state up, again,將 TicTacToe 作為一個更上層的組件, 來包住 Game 組件, 並將控制轉移至最上層的組件, Lifting state up
// 9. Showing the past moves: 加入 time travel, 可以看遊戲在每一步發生的狀況

// Picking key: 當清單被重新渲染, React 會拿每個清單中物品的 key 並且在上一個清單的物品中尋找 matching 的 key
// 假如當前清單有 key, 且先前不存在, React 會創造組件; 但假如當前清單缺少 key, 但先前存在於清單中, React 會摧毀先前的組件
// 假如 兩個 keys match, 則相關的組件會被移動; Keys 會告訴 React 有關每個組件的辨識, 其會允許 React 去保持 state 在重新渲染間
// 假如一個組件的 key 改變了, 則組件將會被摧毀和被重新創造一個新 state

// **Key 是 React 中有著特殊和保留的屬性; 當一元素被創造, React 會提取 key 屬性, 並直接將 key 儲存在 return 的元素中**
// Key 看起來像是作為 props 傳遞的, 但 React 會自動使用 key 來決定要更新那些組件, 組件無法訪問 父層 所指定的 key
// **強烈建議指定 keys 在 build 一個動態的 lists** 假如你沒有一個適當的 key, 則需要考慮重建資料結構的方式
// 如果沒有 key 被指定, React 將會報錯, 並且用一個 array index 作為預設值, 這樣當重新排 清單物品順序 或 插入/移除物品 可能會有問題
// 明確的傳遞 key={i} 會有著跟  array index 一樣的問題, 也同樣不建議這樣做

// 10. Implementing time travel: 使用獨特的 ID 做關聯到每個 過去的遊戲歷史(每個上一動), moves 將不會被重排, 刪除或插入到中間, 因此可以安全地使用 index 當作 key
// 將 TicTacToe() 組件保持追蹤 user 當前正在觀看的每個步驟, 創造一個新的 state variable 來儲存這些步驟
// 做出 go back in time 回到過去和然後從那個時間點開始新的行動, 且你只想保留那個時間點的歷史紀錄
// 因此無須在歷史紀錄中的所有物品之後(... spread syntax)加入 nextSquare , 應當加入其在 history.slice(0, currentMove + 1) 中的所有物品之後, 這樣可以保留舊的歷史紀錄部分
// 每次行動時, 都需要去更新 currentMove 去指向最新的歷史條目

// 11. Final cleanup: 清除歷史軌跡, 可以省略  const [xIsNext, setXIsNext] = useState(true), setXIsNext(!xIsNext);(切換玩家), setXIsNext(nextMove % 2 === 0);(判斷下一個行動玩家)
// 12. Wrapping up: 包起來, 讓井字遊戲可以玩, 指出玩家何時贏得遊戲, 儲存遊戲歷程和進度, 允許玩家去回顧遊戲的歷程

// 如果要增加 React 練習
// 1. 只有在當前的行動, 顯示 "你正在行動 #...", 而不是一個按鈕
// 2. 重寫 <Game... /> 組件, 並使用雙迴圈去造出方塊, 而不是 hardcoding
// 3. 加入 toggle button, 並且讓按鈕可以篩步驟在昇序或是降序排列
// 4. 當有玩家贏時, highlight the winning 3 squares, 且沒有人贏時, 顯示訊息結果為平手, 開始新一局
// 5. 在歷史軌跡清單中, 顯示每個行動在表格(row, column)上的位置
