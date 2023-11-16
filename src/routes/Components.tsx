// QuickStart.tsx
import { useState } from "react";
import App from "../App";

// 創建和嵌套化組件
// 組件是 UI 的一部份(user interface), 並且有著自己的 logic 和外觀
// 組件可以如同按鈕般小, 也可以大到像是一整頁
// 組件可以返回標記的 JS 函式

function MyButtonCounting() {
  // 組件如同標記的函式, 由大寫開始, 而 HTML tags 則會是小寫
  const [count, setCountNumber] = useState(Number); // useState(0) 也可以是 default 值; count 是目前 state, setCountNumber(可以是任何名字) 但約定俗成寫 [something, setSomething]
  // 2. count 將會是0, 因為我傳入 0 到 useState()
  // 3. 當你要改變狀態的時候, call setCountNumber 並傳一個新值到它
  const clickBtnNumber = (): void => {
    setCountNumber(count + 1); // 4. 因此點按鈕的時候會增加記數, count 將會是1
    console.log(count + 1);
  };
  // 5. 如果要渲染同一組件很多次(multiple times), 每個組件將會得其自己的 state

  return (
    // ↓ 使用 JSX
    <>
      <button className="mt-4" onClick={clickBtnNumber}>I'm the 2nd button: {count}</button>
    </>
  );
}
// Event Responding
// 當組件被點擊時，會發生什麼事情
function MyButtonCounted() {
  const [countString, setCount] = useState(String); // useState('') 也可以
  const clickBtnString = (): void => {
    setCount("counted");
    alert("Is counted?");
  };

  return (
    <>
      {/* clickBtnString 後面沒有括號, 不須 call 事件處理函數, 只需要把數值傳入 */}
      <button className="mt-4" onClick={clickBtnString}>
        I'm the 2nd button: {countString}
      </button>
    </>
  );
}

export function Components() {
  const [countBoolean, setCountBoolean] = useState(Boolean); // useState(false) 也可以
  const clickBtnBoolean = () => {
    setCountBoolean(!countBoolean); // 反轉這顆 button
    // prompt("true");
  };
  return (
    <div className="Components">
      <App />
      <>
        <div className="text-center text-3xl font-black">"Single button"</div>
      </>
      <div className="mt-4 flex flex-col items-center justify-center">
        <div className="mt-4">
          <button
            className="card-btn border-black-600 border-2 border-dashed hover:bg-[#feb28e] hover:text-indigo-600"
            onClick={clickBtnBoolean}
          >
            I'm a button: {String(countBoolean)}
          </button>
          <button
            className="card-btn border-black-600 hover:text-black-300 border-2 border-dashed hover:bg-[#fe8ec6]"
            onClick={clickBtnBoolean}
          >
            I'm a button: {countBoolean.toString()}
          </button>
        </div>
        <div className="mt-4">
          <div className="mt-4 text-center text-3xl font-black">
            "Components: Updating the screen with state"
          </div>
          <MyButtonCounting />
          {/* ↑ 這是宣告的組件, 可以藉由嵌套他到另外一個組件 */}
          {/* 1. 按鈕先顯示 */}
          <MyButtonCounting />
          {/* 6. 每個組件將會得其自己的 state */}
          <div className="mt-4 text-center text-3xl font-black">
            "Components: Event Responding"
          </div>
          <MyButtonCounted />
        </div>
      </div>
    </div>
  );
}

export default Components;
