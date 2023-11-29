// QuickStart.tsx
import App from "../App";

export function QuickStart() {
  return (
    <div className="QuickStart">
      <App />
      <div className="leading-loose">
        <h1>Hello React.</h1>
        <h2 className="mt-4 text-2xl font-black text-rose-600">
          Start editing to see some magic happen!
        </h2>
        <div className="text-center align-middle tracking-wide text-orange-600 md:text-center">
          <p className="text-xl font-black text-yellow-600 antialiased">
            How to create and nest components
          </p>
          <p className="text-l font-black italic text-lime-600 md:not-italic">
            How to add markup and styles
          </p>
          <p className="text-base font-black tracking-widest text-blue-600">
            How to display data
          </p>
          <p className="my-4 hyphens-manual ordinal slashed-zero tabular-nums text-sky-600	overline decoration-dashed	decoration-4">
            3.14159265358979…
          </p>
          <p className="text-l list-disc font-black lowercase leading-6 text-gray-400 overline	decoration-dashed	decoration-4">
            <ul>
              <li>How to render conditions and lists</li>
            </ul>
          </p>
          <p className="text-l text-center font-black capitalize text-indigo-600">
            How to respond to events and update the screen
          </p>
          <p className="break-all text-center text-xl font-black uppercase text-purple-600">
            How to share data between components
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuickStart;

// 使用匿名函數直接匯出
// 可以直接匯出, 但偵錯的時候可能會發生組件顯示為 Anonymous 的狀況
// export default function QuickStart() {
//   return <div></div>;
// }

// 首先定義一個命名函數，然後匯出
// 好處是偵錯的時候更容易識別, 因為有明確的名稱, 同一檔案中匯出多個元件或函數, 這是更合適的
// export function QuickStart() {
//   return <div></div>;
// }
// export default QuickStart;
