// RenderingLists.tsx
import App from "@/App";
import { products, people } from "@/data/scientistsData";
import Person from "@/components/Person";
import { getScientistsImgUrl } from "@/utils/imageUrlUtil";
import { Fragment } from "react";
// 依賴 JS 特性如 for loop, 和 array map() 去做組件的條列式渲染
// 例如 products 是產出的 array
// 甚麼都沒給的陣列情況, 例如 peopleNoGiven
// 有給的陣列情況, 例如 people

const ProductList = () => {
  // 使用 map() 去構建產出的 array 成 li 項目陣列
  const listItems = products.map((product) => (
    <li
      className={`py-1 text-left text-2xl ${product.title === "Banana"
        ? "text-yellow-600"
        : product.isVegetable
          ? "text-green-600"
          : "text-red-600"
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

  return listItems;
};

// 列出所有科學家資料
const PersonList = () => {
  const listPeople: JSX.Element[] = people.map((person) => {
    return (
      <li className="flex justify-between py-1 text-left" key={person.id}>
        <img
          className="h-1/2 rounded-full"
          src={getScientistsImgUrl(person)}
          alt={person.name}
        />
        <div className="ml-3">
          <span className="flex font-bold">{`${person.profession}: `}</span>
          <div className="inline-block">{person.name}</div>
          <p className="inline-block">"Known for {person.accomplishment}"</p>
        </div>
      </li>
    );
  });
  return <ul>{listPeople}</ul>;
};

// 列出科學家為天文學家, 並標示其職業
const FilterList = () => {
  const findPro = people.filter((pro) => pro.profession === "Astrophysicist");
  const listPro = findPro.map((pro) => <Person person={pro} key={pro.id} />); // 可以抽出共有的模板部分
  return listPro;
};

// 可能會有需要顯示清單物品中數個 DOM nodes 的情況
// <></> Fragment 語法沒法給定 key 在空 tag 內, 需要把東西包成 <div> 或是 <Fragment> tag
const Fragments = () => {
  const listItems = people.map((person) => (
    <Fragment key={person.id}>
      <p className="text-left">"Known for {person.accomplishment}"</p>
      <h2 className="my-2 text-right">{person.name}</h2>
    </Fragment>
  ));
  return listItems;
};

// 主要模板
export default function RenderingLists() {
  return (
    <>
      <App />
      <main className="mt-5 justify-center gap-4 pt-5 md:grid md:grid-cols-4">
        <section className="md:w-auto">
          <p className="text-3xl font-black">"Shopping list"</p>
          <div className="mt-4 flex justify-center py-0">
            <ul>
              <ProductList />
            </ul>
          </div>
        </section>
        <section className="md:w-auto">
          <p className="text-3xl font-black">"Rendering arrays data"</p>
          <div className="mt-4 flex justify-center py-0">
            <PersonList />
          </div>
        </section>
        <section className="md:w-auto">
          <p className="text-3xl font-black">"Filtering arrays"</p>
          <div className="mt-4 flex justify-center py-0">
            <ul>
              <FilterList />
            </ul>
          </div>
        </section>
        <section className="md:w-auto">
          <p className="text-3xl font-black">"Fragment tag"</p>
          <div className="mt-4 flex justify-center py-0">
            <ul>
              <Fragments />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

// Rendering lists 渲染清單
// 產生的清單項目是由 map() 去構建
// 渲染特定的組件是使用 filter()
// 甚麼時候以及為何使用 React keys
// 只有一行的寫法 const listItems = products.map((product) => <li>{product}</li>);
// 多行的寫法 const listItems = products.map((product) => {
//   <li key={product.id}>{product}</li> -> 記得要給個 key 值在每個 array item 中
// })

// Where to get your key
// 來自 database 的資料可以使用 database 中的 唯一識別(keys/IDs) 作為 key
// 本地產生的資料, 並保留的可以使用 遞增計數(incrementing counter), crypto.randomUUID() 或是 uuid

// Rules of keys
// key 必須在兄弟姐妹中是唯一的, 可以用同一組 keys 給 JSX 節點在不同的 arrays
// Keys 一定不能被改變, 不要出現在渲染上

// Why does React need keys?
// React 需要 keys 來識別 JSX 節點, 選好的 key 會比其在 array 中的位置來的更好辨識
// 即使位置因為重新排序而發生變化, item 中選好的 key 也能讓 React 在整個 life cycle 中被識別

// 不要動態產生 keys, 像是 key={Math.random()}, 這會使渲染之間的 keys 永遠不會被配對到, 從而導致每次都會重新建立 components 和 DOM, 並導致性能下降
// 要根據資料使用 stable 的 ID, 並且 components 不會接收 key 作為 prop
// 如果組件需要 ID, 則必須獨立 prop 來加入傳 <Profile key={id} userId={id} />
