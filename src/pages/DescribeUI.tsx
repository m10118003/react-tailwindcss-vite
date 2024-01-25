// DescribeUI
import App from "@/App";
import Gallery from "@/components/Gallery"; // Gallery.js 或 Gallery 都是可以運作的
import { GreenBlocks } from "@/components/Gallery";
import { BlueBlocks } from "@/components/Gallery";
import Feature from "@/components/Feature";
// import { Gallery } from "@/components/Gallery"; // 如果組件是用 export default 命名的話, import 的時候不能用 {} 包起來

const Hobby = ({ hobbies }: { hobbies: number }) => {
  const hobbiesList = [
    "Ride the bike",
    "Travel with friends",
    "Watch the movies",
    "Assemble models",
    "Play video games"
  ];
  // 手動推資料的方法, 好的 mutation
  // 每次 Hobby 重新渲染, listItems 都會被重新建立一個空的 array, 都會是全新的實例, 但這沒有違反 純函數 或是不變性的原則
  const listItems = []; // 這是在該組件 local 定義的, 沒有跨多個組件共享, 修改時不會影響到其他組件
  for (let i = 0; i < hobbiesList.length; i++) {
    listItems.push(
      <li key={i}>
        {i + 1}. {hobbiesList[i]}
      </li>
    );
  }
  // 自動推資料則是用 map 比較省事, 比較符合 React style
  return (
    <section className="hobbies m-0 p-16 hover:-rotate-6">
      <h2 className="text-center text-3xl font-black">About me</h2>
      <h3 className="mt-4 text-2xl font-black">Includes {hobbies} Hobbies</h3>
      <div className="flex justify-center">
        <ol className="mt-4 space-y-2 text-left text-xl">{listItems}</ol>
        {/* <ol className="mt-4 space-y-2 text-left text-xl">
          {hobbiesList.map((hobby, index) => (
            <li key={index}>{index + 1}. {hobby}</li>
          ))}
        </ol> */}
      </div>
    </section>
  );
};

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
          >
            <Hobby hobbies={5} />
            {/* 通常也不會這樣寫, 或是讓組件依照特定順序渲染 */}
          </Feature>
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

// 3. Writing Markup with JSX
// The Rules of JSX
// 01.Return a single root element: 以 <Fragment>(<>...</>) 或 <div></div> 包圍
// JSX 像是 HTML, 但在其底層下會被轉換成 JS 的 obj, 以至於不能在一個函式中回傳兩個物件
// 02.任何 tag 在 JSX 內需 close:  self-closing tags 像是 <img> 則變成 <img />
// 03. camelCase: 用 camelCase 命名屬性, 由於變數名稱命名限制, 不能有破折號 - , 或保留字
// 這是由於相應的 DOM 屬性規則, 這些屬性我們會希望常常讀入變數中, 這些 class 屬性將會是 className
// 由於歷史原因，aria-* 和 data-* 屬性的編寫方式與 HTML 中一樣，帶有破折號

// 4. JavaScript in JSX with Curly Braces
// JSX 和 { }
// JSX 可以寫出像是 HTML 的編寫方式, 但有時會想加入一些 JS 邏輯或動態屬性
// 01. Passing strings with quotes: 可傳遞 "" 字串, 引用 JS 變數(像是 src = { avatar }), call function, 和使用 JS 物件, 如 <Gallery /> 內的 <Profile />
// 02. { } 內可以使用 JS, 在 ThinkingReact.tsx 中實作一個抓到星期幾的做法
// 但不能使用 <{tag}>Gregorio Y. Zara's To Do List</{tag}>, 或是 src="{avatar}" 這種寫法
// 03. { } 可以如同文字直接使用在 HTML 中, 常應用在塞個變數和 function
// 除了傳遞 字串, 數字, 和其他 JS 表達式外, 還能在 JSX 中傳遞物件, 要包起來使用雙括號 {{name: "Hedy Lamarr", inventions: 5}}
// 04. JS objects and { }: 更多的物件練習在 DisplayingData.tsx 中
// 可以在 { } 進行簡單運算, 如 src={baseUrl + person.imageId + person.imageSize + '.jpg'}

// 5. Passing Props to a Component
// 可以傳遞任何 props 到自己的組件, 並客製化 props
// 01. 傳遞 props 到子組件, 可以在子組件中使用, 像是 DescribeUI.tsx 中的 <Feature />, 傳遞了兩個 props
// shape={{ ... }}, 這雙括號包起來的物件會被傳遞到子組件中
// props 就像是收音機的選轉鈕, 是可以調整的, 如同 function 中的 arguments(引數, 接收所有傳入的值)
// 02. <Feature /> 接收了兩個參數, shape 和 size
// 03. Specifying a default value for a prop: 可以給定 prop 一個預設值, 以便在沒有指定值的時候依靠預設值, 藉由放在 params = 100(預設值) 後面靠解構來達成
// function Feature({ shape, size = 100 }: { shape: Shape; size?: number }) { ...}
// 04. Forwarding props with the JSX spread syntax: 也可以使用展開式來轉送 props, 假如想要更清晰(repetitive code), 和重視整潔性(conciseness)的話, 謹慎使用, 這也許有時會出錯
// function Profile(props) {
//   return (
//     <div className="card">
//       <Avatar {...props} />
//     </div>
//   );
// }
// 05. Passing JSX as children: 也可以傳遞 JSX 像是子組件
// <div> <img /> </div> -> <Card> <Avatar /> </Card>
// 如果要將內容嵌套在 JSX tag 內, 父組件需要接收 children 這個 prop, 而子組件需要傳遞 children 這個 prop
// 06. Props 可以是動態的, 而 props 是 immutable, 不可以被修改
// 如果要改變 props 屬性, 父組件的則必須傳一個新的 props(物件), 舊的 props 則被 JS 引擎回收掉占用的 ram

// 6. Conditional Rendering
// 包含 if/else, ternary operator, && 操作符
// 在 DisplayingData.tsx 中練習

// 7. Rendering Lists
// 在 RenderingLists 中練習列出所有科學家資料

// 8. Keeping Components Pure
// Pure 的 functions 僅只執行計算
// 藉由嚴謹地將組件寫成 pure functions, 在你的 codebase 成長時, 可避免一堆 bug 和不可預測的行為
// 將有一些規則需要遵守
// 01. 怎樣的純淨度可以幫助避免掉 bugs
// 02. 如何藉由將改變在渲染階段之外來使組件 pure
// 03. 如何使用嚴謹模式去找出 components 中的 錯誤

// Pure function 特性:
// 只管自身的事情, 不改變呼叫前, 任何已存在的 obj 或 變數
// 確定性, 對於相同輸入(input), 總返回相同的 output -> 函數的輸出依賴其輸入參數, 不要依賴外部 state 或 data
// No side effect, Pure function 執行過程中不會對外部環境產生影響, 不修改 global variable, 不寫入 DB, 不進行 requests, 也不會改變輸入參數狀態
// 優點有:
// 可測試性, 容易進行 unit test
// 可移植性, 容易理解, 只要關注 I/O 就好
// 可重用性, 不依賴 program 的其他成分, 純函數可在不同 program 中重複使用
// 平行處理, 純函數不需共享記憶體或是資料
// 例如 function add(x, y) { return x + y; } 是一個純函數

// Side Effects - 可預期或不可預期的結果, 例如:
// function Cup() {
//   // 這樣不大好, 假如呼叫組件 <Cup /> 會執行 2 次>, 因為改變了預先存在的變數
//   guest = guest +1
//   return <div className="cup">Tea cup for guest #{guest}</div>
// }

// Detecting impure calculations with StrictMode
// 應把傳入的 props, state, 和 context, 這些 inputs 作為 read-only
// 不變性（Immutability）, React 推薦使用不變資料模式, 可以減少 side effect, 和意外 behavior 發生
// 可預測渲染, React 的 render 依賴 state 和 props 變化是否重新渲染 components, 如果值改變(不是通過 setState 或父元件傳入 props 的話)可能無法正確的被 React 跟蹤渲染
// 有助於 components 隔離, Props 唯讀有助元件間隔離, 元件不應直接改變外部傳入的資料, 應該透過 setState, callback 來通知外部變化
// 在開發過程中, 會呼叫每個元件函數兩次, 這樣有助開發過程中捕抓有潛在問題的元件
// 如果要使用 Strict Mode, 要將 root 包在 <React.StrictMode> 內, 這是不會對產出有影響的

// Local mutation - 組件在渲染時更改了已經預先存在的變數
// 純函數不會改變函數作用域外的變數或在呼叫前改變先前已創造的物件, 這樣不純

// 這樣的 mutation 是沒有問題的
// 但在 render 時更改剛剛建立的變數和物件是可以的, Local, 不影響元件外部 state, 以及保有獨立性
  // function Cup({ guest }) {
  //   return <h2>Tea cup for guest #{guest}</h2>;
  // }
  
  // 每次呼叫 TeaGathering 的時候, 會產生一個新的 cups array, 並填入新的 <Cup /> 實例, 這渲染依賴傳入的 guest
  // export default function TeaGathering() {
  //   let cups = []; // 這個作用範圍只僅限每次函數執行內, 這樣每次渲染的時候都會是一個新的陣列實例, 修改時也不會影響到全域或其他組件
  //   for (let i = 1; i <= 12; i++) {
  //     cups.push(<Cup key={i} guest={i} />); // 陣列的修改, 只影響在內部渲染邏輯, 也無副作用
  //   }
  //   return cups;
  // }

// 直接修改組件的本地狀態(state)或屬性的操作, 這種作法通常不推薦
// 避免直接修改或突變 state, 使用 setState 或者 callback
// Props 應該是唯讀的, 元件不應試圖修改它本身接收到的 props, 且 props 通常由父元件傳遞, 且可能被多個子組件共享, 直接修改可能會有無法預測的行為和 bug
// 先前範例中, 在渲染時改變已存在的變數被稱作 mutation
// Pure function 並不 mutate variables

// 哪些地方會造成 side effects
// 更新螢幕, 動畫開始, 改變資料都是 side effects, 這些是一方面發生的事情, 而不是渲染中發生的
// React, side effects 通常屬於事件處理內部(event handlers), 只有在 user 執行了某些行為時運行, 例如點擊事件...等
// 事件處理被定義在組件內, 但他們不會在渲染時運行, 因此不須 Pure
// 假如耗盡所有選項, 且找不到合適的 event handler 來處理 side effect, 可透過組件中的 useEffect 呼叫, 並將其附加到回傳的 JSX, 這可告訴 React 當允許 side effects 時, 在渲染後慢點執行(async)

// event handlers 不須是 pure function, 主要是處理和回應用戶交互作用
// 狀態更新, 事件處理用來更新 components 狀態, 例如點選按鈕, 可能會希望改變組件內的 count state, 這是一種 mutation, 這 state 可透過 setState 或類似的 hook 來做重新渲染
// 執行 side effects, 適合拿來處理不適合在 pure function 進行的操作, 像是 Ajax, 修改 DOM, 紀錄日誌等
// 響應使用者互動行為, 這是 event handler 的核心, 根據當前應用狀態或 user input 來做出不同響應, 這種響應不是 pure 的, 因為相同輸入可能在不同應用狀態下產生不同結果
// 控制流程和條件邏輯(如 if/else), 這會依賴當前 props 或 state, 這樣 event handler 可能會根據元件當前狀態變化

// Care Purity
// 相同輸入相同結果回傳, 這樣一個組件可回應許多 user 的 requests
// 可以 skipping 輸入並沒有組件是改變的渲染, 可以安全的 cache
// 如果在渲染深層組件的過程中資料改變, React 可以不浪費時間去處理過時渲染, 並重啟渲染, 純度可以安全地使計算停止在任何時間

// 組件必須是 Pure 的
// 只管自身的事情, 在渲染前不改變任何以存的物件或變數
// Same inputs, same outputs, 給組件相同的輸入, 應永遠回傳相同的 JSX
// 渲染可發生在任何時候, 組件不應依賴彼此渲染順序
// 不要改變(mutate)組件使用來渲染的輸入, 像是 state 或 props 還有 context, 而是使用 setState 來更新螢幕
// 需要改變內容時, 會希望在 event handler 中執行操作, 沒有任何方法時, 可以用 useEffect()
