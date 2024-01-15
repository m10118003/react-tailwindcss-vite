// Home.tsx
import App from "@/App";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";

export default function Home() {
  const [countString, setCount] = useState(""); // 設定初始值為空字串

  const clickBtn = () => {
    // setCount(count+1);
    setCount("Yes! Yes! Yes!"); // 更新 countString 的值/狀態
    console.log("Yes! Yes! Yes!", countString); // 這裡還是舊值
  };

  const [count, setCount2] = useState(String); // 這初始值為 String 實際上是 JS 的 String 函數對象
  const clickBtn2 = () => {
    const count = `Go ! Go ! Go !`;
    setCount2(count); // 更新 count 的值/狀態
    console.log("count", count); // 這邊是 local variable
  };

  // const cardBtn:string = "card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600";
  return (
    <>
      <main>
        <App />
        <section className="p-5">
          <h1 className="cursor-crosshair p-5 font-bold underline hover:rounded hover:bg-sky-200 hover:text-indigo-600">
            Vite + React + TailwindCSS
          </h1>
          <div className="flex justify-center p-5">
            <a href="https://vitejs.dev" target="_blank" rel="noopener">
              <img src={viteLogo} className="logo mx-4" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener">
              <img
                src={reactLogo}
                className="logo react mx-4"
                alt="React logo"
              />
            </a>
          </div>
          <div className="cards row-auto">
            <button
              className="card-btn border-black-600 border-2 border-dashed hover:bg-[#feb28e] hover:text-indigo-600"
              onClick={clickBtn}
            >
              Start? {countString}
            </button>
            <button
              className="card-btn border-black-600 col-span-6 border-2 border-dashed hover:bg-sky-200 hover:text-indigo-600"
              onClick={clickBtn2}
            >
              Keep going? {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>

          <h1 className="mt-5 cursor-crosshair p-5 font-bold underline hover:rounded hover:bg-sky-200 hover:text-indigo-600">
            Hello world!
          </h1>
        </section>
      </main>
    </>
  );
}

// const App2 = () => {

// }
