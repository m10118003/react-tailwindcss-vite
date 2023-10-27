// QuickStart.tsx
import { useState } from "react";
import App from '../App'

// 創建和嵌套化組件
// 組件是 UI 的一部份(user interface), 並且有著自己的 logic 和外觀
// 組件可以如同按鈕般小, 也可以大到像是一整頁
// 組件可以返回標記的 JS 函式

function MyButtonCounting() {
  // 組件如同標記的函式, 由大寫開始, 而 HTML tags 則會是小寫
  const [count, setCountNumber] = useState(Number); // useState(0) 也可以是 default 值
  const clickBtnNumber = (): void => {
    setCountNumber(count + 1);
    console.log(count + 1)
  }

  return (
    // ↓ 使用 JSX 
    <> 
      <button onClick={clickBtnNumber}>I'm the 2nd button: {count}</button>
    </>
  );
}

function MyButtonCounted() {
  const [countString, setCount] = useState(String); // useState('') 也可以
  const clickBtnString = (): void => {
    setCount('counted');
    alert('Is counted?')
  }

  return (
    <>
      <button onClick={clickBtnString}>I'm the 2nd button: {countString}</button>
    </>
  );
}

export function Components() {
  const [countBoolean, setCountBoolean] = useState(Boolean); // useState(false) 也可以
  const clickBtnBoolean = () => {
    setCountBoolean(!countBoolean); // 反轉這顆 button
    // prompt("true");
  }
  return (
    <div className='Components'>
      <App />
      <div className="flex justify-center items-center">
        <div>
          <button className="card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600" onClick={clickBtnBoolean}>I'm a button: {String(countBoolean)}</button>
          <button className="card-btn border-dashed border-2 border-black-600 hover:bg-[#fe8ec6] hover:text-black-300" onClick={clickBtnBoolean}>I'm a button: {countBoolean.toString()}</button>
        </div>
        <div>
          <MyButtonCounting /> 
          {/* ↑ 這是宣告的組件, 可以藉由嵌套他到另外一個組件 */}
          <MyButtonCounted />
        </div>
      </div>
    </div>
  );
}

export default Components;