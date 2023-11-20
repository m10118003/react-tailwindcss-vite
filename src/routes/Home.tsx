// Home.tsx
import App from '../App'
import { useState } from "react";

function Home() {
  const [countString, setCount] = useState(''); // 設定初始值為空字串

  const clickBtn = () => {
    // setCount(count+1);
    setCount('Yes! Yes! Yes!'); // 更新 countString 的值/狀態
    console.log('Yes! Yes! Yes!', countString) // 這裡還是舊值
  }

  const [count, setCount2]= useState(String); // 這初始值為 String 實際上是 JS 的 String 函數對象
  const clickBtn2 = () => { 
    const count = `Go ! Go ! Go !`;
    setCount2(count); // 更新 count 的值/狀態
      console.log('count', count) // 這邊是 local variable
  }
  
  // const cardBtn:string = "card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600";
  return (
    <>
        <div>
          <App />
          <h1 className="font-bold underline mt-5 hover:bg-sky-200 hover:text-indigo-600 hover:rounded p-5 cursor-crosshair">Vite + React + TailwindCSS</h1>
          <div className="cards row-auto">
            <button className="card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600" onClick={ clickBtn }>
              Start? { countString }
            </button>
            <button className="card-btn col-span-6 border-dashed border-2 border-black-600 hover:bg-sky-200 hover:text-indigo-600" onClick={ clickBtn2 }>
              Keep going? { count }
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
      
          <h1 className="font-bold underline mt-5 hover:bg-sky-200 hover:text-indigo-600 hover:rounded p-5 cursor-crosshair">Hello world!</h1>
        </div>
    </>
  );
}

// const App2 = () => {

// } 

export default Home;
