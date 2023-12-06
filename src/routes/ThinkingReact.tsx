import { useState } from "react";
import App from "../App";

type ProductCategoryRowProps = {
  category: string;
};

type Products = {
  id: number,
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

// 顯示產品分類 title 和資訊
// 接受的 category 屬性 是產品分類
const ProductCategoryRow = ({ category }: ProductCategoryRowProps): JSX.Element => {
  return (
    <tr className="table-header mr-6 flex justify-center space-x-5 p-4">
      <th className="mx-8">{category}</th>
    </tr>
  );
}

// 接受一個 product 物件, 用於顯示產品名稱和價格, 如果沒有庫存則顯示紅色和售完
const ProductRow = ({ product }: { product: Products }): JSX.Element => {
  const soldOutName = product.stocked ? ProductCategoryRow.name : <span className="text-red-600" >{product.name}</span>
  const soldOutPrice = product.stocked ? product.price : <span className="text-red-600" >{  "Sold out!" }</span>
  return (
    <tr className="table-body flex w-2/12 flex-row justify-between p-1">
      <td>{soldOutName}</td>
      {/* <td>{product.price}</td> */}
      <td>{soldOutPrice}</td>
    </tr>
  );
}

// 渲染產品表格
// 接受一個 products array 來做為表格生成的行
// 使用 forEach 來 iterate 每個產品, 並根據類別分組
const ProductTable = ({products}: {products: Products[]}) => {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;
  products.forEach( product => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr className="table-header mr-6 flex justify-center space-x-5 p-4">
          <th className="mx-8">Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="table-body flex flex-col items-center">
        { rows }
      </tbody>
    </table>
  );
};

// 搜尋欄位, 用於過濾產品
const SearchBar = () => {
  const [filterText, setFilterText] = useState("");
  return (
    <form className="flex flex-col items-center">
      <input
        className="border-black-600 mt-4 w-[19%] rounded border-2"
        type="text"
        placeholder=" Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div>
        <label htmlFor="">
          <input className="ml-4 mt-4" type="checkbox" /> Only show products in
          stock
        </label>
      </div>
    </form>
  );
};

// 最上層父層組件
export default function ThinkingReact() {
  return (
    <div className="thinking-react">
      <App />
      <h1 className="mt-5 pt-5">Thinking React</h1>
      <div className="filterable-product-table flex flex-col justify-center">
        <SearchBar />
        <ProductTable products={jsonApi} />
      </div>
    </div>
  );
}

// 模擬 json api
const jsonApi = [
  { id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  {
    id: 2, category: "Fruits", price: "$1", stocked: true, name: "Dragon fruit",
  },
  {
    id: 3, category: "Fruits", price: "$2", stocked: false, name: "Passion fruit",
  },
  { id: 4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach",
  },
  { id: 5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin",
  },
  { id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

console.log(jsonApi, "jsonApi");

// React, 當你建造 UI(User Interface) 的時候, 你會將其分解為組件
// 接著, 你將在每一個組件敘述不同的視覺階段
// 最後, 你將連接組件來完成一個 data flows
// 以下將學習如何建立可搜尋資料表單(Searchable product data table)

// 1. 一開始皆從模擬開始, 假設我們有 JSON API, 拆分 UI 成有結構層次的組件
// 程式方面, 使用相同技術來決定是否建立新函數或物件, 其中一種是使用單一責任原則(SRP), 如果持續增長, 應該被分解成更小的組件
// CSS 方面, 思考每個 class selector 的用途
// Design 方面, 如何組織各層的設計
// 如果 JSON 結構良好, 會發現它能自然應對 UI 組件結構, 因為 UI 和資料結構通常有相同架構, 同形狀, 每個組件都能和資料模型相符合
// 例如:
// 。FilterableProductTable
//    。SearchBar
//    。ProductTable
//      。ProductCategoryRow
//      。ProductRow

// 2. 在 React 中造出靜態的仿切版本, 重複使用其他組件並且使用 props 去傳遞資料, 對 state 夠熟的話, 則不要使用 state 來建立靜態版本
// 從結構層次中較高的組件, 由上而下構造; 如果是大專案, 由下而上會較為容易
// 從階層較高的組件拿資料模型作為 props 傳遞給下一層組件, 這是 one-way data flow
/* <thead>
    <tr className="table-header mr-6 flex justify-center space-x-5 p-4">
      <th className="mx-8">Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody className="table-body flex flex-col items-center">
    <th className="fruits-header">Fruits</th>
    <tr className="fruits flex w-2/12 flex-row justify-between p-1">
      <td>Apple</td>
      <td>$1</td>
    </tr>
    <tr className="fruits flex w-2/12 flex-row justify-between p-1">
      <td>Dragon fruit</td>
      <td>$1</td>
    </tr>
    <tr className="fruits flex w-2/12 flex-row justify-between p-1">
      <td className="text-red-600">Passion fruit</td>
      <td>$2</td>
    </tr>
    <th className="vegetables-header">Vegetables</th>
    <tr className="vegetables flex w-2/12 flex-row justify-between p-1">
      <td>Spinach</td>
      <td>$2</td>
    </tr>
    <tr className="vegetables flex w-2/12 flex-row justify-between p-1">
      <td className="text-red-600">Pumpkin</td>
      <td> $4</td>
    </tr>
    <tr className="vegetables flex w-2/12 flex-row justify-between p-1">
      <td>Peas</td>
      <td>$1</td>
    </tr>
  </tbody> */

// 3. 找到最小的, 且可以完整呈現 UI state 的組件
// 如何找出那些不是 state 的部分: 隨著時間推移保留不變的部分, 會從 parent 透過 props 傳遞給下一層組件, 可以根據現有 state 或 props 來計算的部分
// 不是 state 的部分: 產品的原始清單是透過 props 傳遞; 產品過濾清單不是 state, 因為可以跟根據搜尋和複選框的值而被計算
// 可以做成 state 的部分: 搜尋框文字可以被改變, 而且不被計算; checkbox 的值可以被改變, 而且不被計算

// Props 像是你所傳遞到函數的參數(arguments), 其讓父層組件可以傳遞給子層組件, 例如 Form 可以傳遞 color prop 到按鈕
// State 像是組件的記憶, 會讓組件保持追蹤資訊和在和響應互動後改變, 例如 Button 可能追蹤 isHovered state
// 例如, 一個父層組件常會保留一些資訊在 state 中, 並且往下傳到子組件作為 props

// 4. 確定 state 應待的位置
// 辨識每個組件在 state 渲染了些甚麼
// 找出最接近的父層組件, 如一組件在所有階層中最高位

// 決定 state 何時應"活著":
// 通常應直接放 state 到其共同的父層組件; 可以將 state 放到一些比其共有的父層組件之上的某個組件中; 假如找不到哪可放, 創造一個單一組件去持有 state, 並使其高於共同的父層組件

// 接著 決定組件使用 state
// ProductTable 根據 state 來過濾產品清單(搜尋文字和 checkbox 的值)
// SearchBar 需要根據 state 顯示(搜尋文字和 checkbox 的值)
