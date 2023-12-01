import { useState } from "react";
import App from "../App";
export default function ThinkingReact() {
  return (
    <div className="thinking-react">
      <App />
      <h1 className="mt-5 pt-5">Thinking React</h1>
    </div>
  );
}

const jsonApi = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragon fruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passion fruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

console.log(jsonApi, "jsonApi");

// React, 當你建造 UI(User Interface) 的時候, 你會將其分解為組件
// 接著, 你將在每一個組件敘述不同的視覺階段
// 最後, 你將連接組件來完成一個 data flows
// 以下將學習如何建立可搜尋資料表單(Searchable product data table)
// 1. 假設我們有 JSON API
