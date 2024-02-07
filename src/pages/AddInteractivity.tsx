import App from '@/App';
export default function AddInteractivity() {
    return (
        <div className="tic-tac-toe">
            <App />
            <h1 className="mt-5 pt-5">Add Interactivity</h1>
        </div>
    );
}

// Adding Interactivity
// 有些情況是 User 輸入後會反應螢幕更新, 像是點擊圖像會切換活動圖像, 在 React 中, 隨時間變化的資料是 state
// 可以加入 state 到任何組件中, 並且更新它們

// Responding to events
// React 可以加入事件處理函式到 JSX 中, 對使用者互動的 點擊, 滑過, 注視輸入等來作回應
// 內件組件像是 <button> 支援瀏覽器的內建事件像是 onClick, 你可以自定義組件, 並任意將屬性(props)命名 來指定事件處理函式

// State: a component’s memory
// 組件常需要交互作用時改變螢幕內容, 輸入到表單應更新輸入範圍; 點擊 影像輪播的 "下一步(next)" 後, 應改變被顯示時的圖片; 點擊購買按鈕, 放入產品在購物車中
// 組件需要去記得這些事情: 當前輸入值, 當前影像, 購物車內容等, 這種特定組件的記憶即是 state
// 可以使用 useState() Hook, 加入 state 到組件中, Hooks 是特別的函式, 其可以讓組件使用 React 特性(state 是其中的特性)
// useState() Hook 可以用來宣告 state 變數, 這接收起始狀態, 並返回一對數值: current state, 和 允許更新狀態設定器 (state setter) 函式

// Render and commit
// 在你組件被顯示到螢幕之前, React 會先渲染組件, 了解過程中的步驟, 將能幫助你思考你的 code 怎麼執行和解釋其行為
// 想像你的組件是廚房中烹煮的廚師, 從食材中來煮美味食物, 而 React 即是服務生, 將顧客的需求反應
// 請求的過程和供應 UI 有三步驟:
// 1. Triggering render (將點餐需求送到廚房)
// 2. Rendering the component (在廚房中準備需求)
// 3. Committing to Dom (放置需求在餐桌上)

// State as a snapshot
// 不像通常 JS 變數, React state 行為更像快照, 設定它不會改變你已經有的 state 變數, 而是會觸發一個 re-render 的行為
// console.log(count);  // 0
// setCount(count + 1); // Request a re-render with 1
// console.log(count);  // Still 0!
// 這可以避免 bugs, 