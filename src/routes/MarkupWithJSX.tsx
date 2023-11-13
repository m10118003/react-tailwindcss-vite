import App from "../App";

function MarkupWithJSX() {
  return (
    <>
      <App />
      <>
        <div className="text-center text-3xl font-black">"Markup syntax"</div>
      </>
      {/* 使用 grid 來進行布局 */}
      <div className="mt-4 ml-8 grid justify-center gap-4">
        <div className="ml-4 text-left text-2xl space-y-4 px-20">
          Use markup syntax with JSX, it is optional.
          <p className="ml-4 text-xl text-gray-600">
            - 使用標記語法 JSX 其為可選的, 像是 React 的 "語法糖"
          </p>
        </div>
        <div className="ml-4 text-left text-2xl space-y-4 px-20">
          JSX is stricter than HTML, must have a closing tag.
          <p className="ml-4 text-xl text-gray-600">- JSX 較 HTML 來得嚴謹, 必須有結束標記</p>
        </div>
        <div className="ml-4 text-left text-2xl space-y-4 px-20">
          Wrap like {`<div>...</div>`} or empty {"<>...</>"}
          <p className="ml-4 text-xl text-gray-600">- 以 {`<div>...</div>`} 或 {"<>...</>"} 包起來</p>
        </div>
      </div>
    </>
  );
}

export default MarkupWithJSX;
