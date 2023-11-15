import App from "../App";

export default function RenderingLists() {
  // 依賴 JS 特性如 for loop, 和 array map() 去做組件的條列式渲染
  // 例如這式產品的 array
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  // 使用 map() 去構建產品的 array 成 li 項目陣列
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return (
    <>
      <App />
      <ul>{listItems}</ul>
    </>
  );
}
