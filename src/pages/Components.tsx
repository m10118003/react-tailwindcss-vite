// Components.tsx
import { useState, useEffect } from "react";
import App from "@/App";

// 創建和嵌套化組件
// 組件是 UI 的一部份(user interface), 並且有著自己的 logic 和外觀
// 組件可以如同按鈕般小, 也可以大到像是一整頁
// 組件可以返回標記的 JS 函式

function MyButtonCounting() {
  // 組件如同標記的函式, 由大寫開始, 而 HTML tags 則會是小寫
  const [count, setCountNumber] = useState(Number); // useState(0) 也可以是 default 值; count 是目前 state, setCountNumber(可以是任何名字) 但約定俗成寫 [something, setSomething]
  // 2. count 將會是 0, 因為我傳入 Number/0 到 useState()
  // 3. 當你要改變狀態的時候, call setCountNumber 並傳一個新值到它
  const clickBtnNumber = (): void => {
    setCountNumber(count + 1); // 4. 因此點按鈕的時候會增加記數, count 將會是 1
    console.log(count + 1);
  };
  // 5. 如果要渲染同一組件很多次(multiple times), 每個組件將會得其自己的 state

  return (
    // ↓ 使用 JSX
    <>
      <button
        className="mx-2 mt-4 bg-teal-400 text-indigo-600"
        onClick={clickBtnNumber}
      >
        I'm the second button: {count}
      </button>
    </>
  );
}
// Event Responding
// 當組件被點擊時，會發生什麼事情
function MyButtonCounted() {
  const [countString, setCount] = useState("Yes, click me~");

  // 用 useEffect 來監聽 countString 的變化
  useEffect((): void => {
    if (countString === "counted") {
      alert("Is counted?");
    } else if (countString === "") {
      alert("Is counted~");
    }
  }, [countString]);

  const clickBtnString = (): void => {
    setCount(countString !== "counted" ? "counted" : "");
  };

  return (
    <>
      {/* clickBtnString 後面沒有括號, 不須 call 事件處理函數, 只需要把數值傳入 */}
      <button
        className="mx-auto mt-4 bg-[#feb28e] text-[#4B4B4B]"
        onClick={clickBtnString}
      >
        I'm the third button: {countString}
      </button>
    </>
  );
}

// Using the Hooks
// 共享資料在組件間傳遞
const SameBtnCounting = () => {
  const [sameCount, setSameCount] = useState(0);
  const clickBtnTheSame = (): void => {
    setSameCount(sameCount + 2);
  };

  return (
    <>
      <button
        className="mx-2 mt-4 bg-indigo-600 text-teal-300"
        onClick={clickBtnTheSame}
      >
        I'm the same button: {sameCount}
      </button>
      <button
        className="mx-2 mt-4 bg-indigo-600 text-teal-300"
        onClick={clickBtnTheSame}
      >
        I'm the same button: {sameCount}
      </button>
    </>
  );
};

const ComponentOne = ({
  onClick,
  sameState,
}: {
  onClick: () => void;
  sameState: number;
}) => {
  return (
    <>
      <button
        className="mx-2 mt-4 bg-indigo-600 text-teal-300"
        onClick={onClick}
      >
        I'm the same button: {sameState}
      </button>
    </>
  );
};

const ComponentTwo = ({
  onClick,
  sameState,
}: {
  onClick: () => void;
  sameState: number;
}) => {
  return (
    <>
      <button
        className="mx-2 mt-4 bg-indigo-600 text-teal-300"
        onClick={onClick}
      >
        I'm the same button: {sameState}
      </button>
    </>
  );
};

export function Components() {
  const [countBoolean, setCountBoolean] = useState(Boolean); // useState(false) 也可以
  const clickBtnBoolean = () => {
    setCountBoolean(!countBoolean); // 反轉這顆 button
    // prompt("true");
  };

  const [sameState, setSameState] = useState(0);
  const clickBtnTheSameState = () => {
    setSameState(sameState + 3);
  };

  return (
    <main className="Components">
      <App />
      <section className="mt-5 pt-5">
        <div className="text-center text-3xl font-black">
          "Single button - Sharing data"
        </div>
      </section>
      <section className="mt-4 flex flex-col items-center justify-center">
        <div className="mt-4">
          <button
            className="card-btn  border-black-600 mx-2 border-2 border-dashed bg-indigo-600 text-teal-300 hover:bg-[#feb28e] hover:text-[#4B4B4B]"
            onClick={clickBtnBoolean}
          >
            I'm a button: {String(countBoolean)}
          </button>
          <button
            className="card-btn border-black-600 hover:text-black-300 mx-2 border-2 border-dashed bg-indigo-600 text-teal-300 hover:bg-[#fe8ec6] hover:text-indigo-600"
            onClick={clickBtnBoolean}
          >
            I'm a button: {countBoolean.toString()}
          </button>
        </div>
        <div className="mt-4">
          <div className="mt-4 ">
            <p className="text-center text-3xl font-black">
              "Components: Updating the screen with state"
            </p>
            <MyButtonCounting />
            {/* ↑ 這是宣告的組件, 可以藉由嵌套他到另外一個組件 */}
            {/* 1. 按鈕先顯示 */}
            <MyButtonCounting />
            {/* 6. 每個組件將會得其自己的 state */}
          </div>

          <div className="mt-4">
            <p className="text-center text-3xl font-black">
              "Components: Event Responding"
            </p>
            <MyButtonCounted />
          </div>

          <div className="mt-4">
            <div className="text-center text-3xl font-black">
              "Function starts with use called Hooks - Use it!!!"
              <div className="ml-4 mt-1 flex justify-center text-xl text-gray-600">
                - 函數名稱以 <p className="px-2 text-teal-500"> use </p>{" "}
                開頭，表示這是一個 <p className="px-2 text-teal-500"> Hook </p>
                。{/* 可以藉由合併已存在的 Hooks 來寫出新的 Hooks */}
                {/* Hooks 相比其他函數是有 restricted, 只能在組件(或其他 Hooks)的頂部調用 */}
                {/* 如果要使用 useState, 在 condition 或 loop 中, 使用一個新的組件, 並放進去 */}
                {/* 通常將需要組件共享資料和一起更新 */}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-center text-3xl font-black">
              "Sharing data in components"
            </p>
            <SameBtnCounting />
          </div>

          <div className="mt-4">
            <p className="text-center text-3xl font-black">
              "Sharing data between components"
            </p>
            <ComponentOne
              onClick={clickBtnTheSameState}
              sameState={sameState}
            />
            <ComponentTwo
              onClick={clickBtnTheSameState}
              sameState={sameState}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Components;
// 使用匿名函數直接匯出
// 可以直接匯出, 但偵錯的時候可能會發生組件顯示為 Anonymous 的狀況
// export default function Components() {
//   return <div></div>;
// }

// 首先定義一個命名函數，然後匯出
// 好處是偵錯的時候更容易識別, 因為有明確的名稱, 同一檔案中匯出多個元件或函數, 這是更合適的
// export function Components() {
//   return <div></div>;
// }
// export default Components;
