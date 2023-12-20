// DescribeUI
import App from "../App";
import Gallery from "../components/Gallery"; // Gallery.js 或 Gallery 都是可以運作的
import { GreenBlocks } from "../components/Gallery";
import { BlueBlocks } from "../components/Gallery";
import Feature from "../components/Feature";
// import { Gallery } from "../components/Gallery"; // 如果組件是用 export default 命名的話, import 的時候不能用 {} 包起來
// 父層組件
export default function DescribeUI() {
  const name = "Zelfy Shih";

  return (
    <div className="describe-ui">
      <App />
      <div className="container flex flex-col justify-center md:flex-row">
        <section>
          <h1 className="mt-5 p-5 [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">
            Amazing Profile
          </h1>
          <div className="profiles ml-6 flex justify-center">
            <GreenBlocks />
            <BlueBlocks />
            <GreenBlocks />
            <BlueBlocks />
          </div>
          <div className="gallery flex justify-center">
            <div className="flex flex-col justify-center">
              <BlueBlocks />
              <GreenBlocks />
            </div>
            <Feature
              shape={{ imageId: "7KhiR3k", name: "background" }}
              size={180}
            >
              <Gallery />
            </Feature>
            <div className="flex flex-col justify-center">
              <GreenBlocks />
              <BlueBlocks />
            </div>
          </div>
          <div className="profiles mr-6 flex justify-center">
            <BlueBlocks />
            <GreenBlocks />
            <BlueBlocks />
            <GreenBlocks />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-extrabold [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">
              {name}
            </p>
          </div>
        </section>
        <section className="mt-9 flex items-center justify-center">
          <Feature
            shape={{ imageId: "7KhiR3k", name: "background" }}
            size={500}
          ></Feature>
        </section>
      </div>
    </div>
  );
}

// Describing the UI
// Your First Component
// UI 單位可以小的像是按紐, 文字 和圖片等等, React 可以組合他們成可重用, 嵌套的組件
// 網站到手機 apps, 視覺上的東西可被拆解成組件, 可以被獨立分解成小片段的 UI 就是 組件
// React 組件是用 JS function, 可以用標記來添加

// 坑(Pitfall)
// 組件可以渲染其他的組件, 但是不要嵌套他們的定義, 這樣會造成效能問題和產生 bugs
// 當子組件需要來自父層的資料, 用 props 傳遞而不是嵌套定義
/*
export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}
*/

// 由上而下傳遞, React app 起始於 root 組件, 通常被自動定義在 pages/index.js
// 組件除了按鈕等可重用的組件外, 也適用較大的部分, 如 side bar, list, 最終完整頁面
// React 不是使用空的 HTML 和用 JS 管理 page, 組件也能自動產生 HTML

// The Rules of JSX
// 1.Return a single root element: 以 <Fragment>(<>...</>) 或 <div></div> 包圍
// JSX 像是 HTML, 但在其底層下會被轉換成 JS 的 obj, 以至於不能在一個函式中回傳兩個物件
// 2.任何 tag 在 JSX 內需 close:  self-closing tags 像是 <img> 則變成 <img />
// 3. camelCase: 用 camelCase 命名屬性, 由於變數名稱命名限制, 不能有破折號 - , 或保留字
// 這是由於相應的 DOM 屬性規則, 這些屬性我們會希望常常讀入變數中, 這些 class 屬性將會是 className
// 由於歷史原因，aria-* 和 data-* 屬性的編寫方式與 HTML 中一樣，帶有破折號

// JSX 和 { }
// JSX 可以寫出像是 HTML 的編寫方式, 但有時會想加入一些 JS 邏輯或動態屬性
// 1. Passing strings with quotes: 可傳遞 "" 字串, 引用 JS 變數(像是 src = { avatar }), call function, 和使用 JS 物件, 如 <Gallery /> 內的 <Profile />
// 2. { } 內可以使用 JS, 在 ThinkingReact.tsx 中實作一個抓到星期幾的做法
// 但不能使用 <{tag}>Gregorio Y. Zara's To Do List</{tag}>, 或是 src="{avatar}" 這種寫法
// 3. { } 可以如同文字直接使用在 HTML 中, 常應用在塞個變數和 function
// 除了傳遞 字串, 數字, 和其他 JS 表達式外, 還能在 JSX 中傳遞物件, 要包起來使用雙括號 {{name: "Hedy Lamarr", inventions: 5}}
// 4. JS objects and { }: 更多的物件練習在 DisplayingData.tsx 中
// 可以在 { } 進行簡單運算, 如 src={baseUrl + person.imageId + person.imageSize + '.jpg'}

// Passing Props to a Component
// 可以傳遞任何 props 到自己的組件, 並客製化 props
// 1. 傳遞 props 到子組件, 可以在子組件中使用, 像是 DescribeUI.tsx 中的 <Feature />, 傳遞了兩個 props
// shape={{ ... }}, 這雙括號包起來的物件會被傳遞到子組件中
// props 就像是收音機的選轉鈕, 是可以調整的, 如同 function 中的 arguments(引數, 接收所有傳入的值)
// 2. <Feature /> 接收了兩個參數, shape 和 size
// 3. Specifying a default value for a prop: 可以給定 prop 一個預設值, 以便在沒有指定值的時候依靠預設值, 藉由放在 params = 100(預設值) 後面靠解構來達成
// function Feature({ shape, size = 100 }: { shape: Shape; size?: number }) { ...}
// 4. Forwarding props with the JSX spread syntax: 也可以使用展開式來轉送 props, 假如想要更清晰(repetitive code), 和重視整潔性(conciseness)的話, 謹慎使用, 這也許有時會出錯
// function Profile(props) {
//   return (
//     <div className="card">
//       <Avatar {...props} />
//     </div>
//   );
// }
// 5. Passing JSX as children: 也可以傳遞 JSX 像是子組件
// <div> <img /> </div> -> <Card> <Avatar /> </Card>
// 如果要將內容嵌套在 JSX tag 內, 父組件需要接收 children 這個 prop, 而子組件需要傳遞 children 這個 prop

// 6. Props 可以是動態的, 而 props 是 immutable, 不可以被修改
// 如果要改變 props 屬性, 父組件的則必須傳一個新的 props(物件), 舊的 props 則被 JS 引擎回收掉占用的 ram
