import App from "../App";

export default function RenderingLists() {
  // 依賴 JS 特性如 for loop, 和 array map() 去做組件的條列式渲染
  // 例如這是產出的 array
  const products = [
    { title: "Cabbage", isVegetable: true, isFruit: false, id: 1 },
    { title: "Garlic", isVegetable: true, isFruit: false, id: 2 },
    { title: "Apple", isVegetable: false, isFruit: true, id: 3 },
    { title: "Banana", isVegetable: false, isFruit: true, id: 4 },
  ];
  // 使用 map() 去構建產出的 array 成 li 項目陣列
  const listItems = products.map((product) => (
    <li
      className={`text-left text-2xl py-1 ${
        product.title  === "Banana" ? "text-yellow-600" : (product.isVegetable ? "text-green-600" : "text-red-600")
      }`}
      // style 的優先級別比 className 來得高
      // style={{
      //   color: product.isFruit ? "magenta" : "darkgreen",
      // }}
      key={product.id}
    >
      {product.id}. {product.title}
      {/* li tag 有個 key 屬性, 每個清單項目, 應傳遞 string 或 number 在同級(siblings)中作唯一識別(uniquely identifies) */}
      {/* 一個 key 通常應當來自資料庫的 ID, React 將使用 key 來了解插入(insert), 刪除(delete)或重新排序(reorder)項目  */}
    </li>
  ));

  return (
    <>
      <App />
      <>
        <div className="text-center text-3xl font-black">"Shopping list"</div>
      </>
      <div className="mt-4 flex justify-center py-0">
        <ul>{listItems}</ul>
      </div>
    </>
  );
}
