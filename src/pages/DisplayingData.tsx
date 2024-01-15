// DisplayingData.tsx
import { useState } from "react";
import App from "@/App";

const user = {
  name: "Zelfy Shih",
  imageUrl: "https://avatars.githubusercontent.com/u/65555979?v=4",
  imageSize: 90,
};

interface ItemPackage {
  name?: string;
  isWhat: boolean;
  isDelete?: boolean;
}

export default function DisplayingData() {
  const initialButtonClass: string = `mt-4 border-dashed border-2 border-black-600 text-sky-600 underline underline-offset-8 decoration-dashed decoration-2`;
  const changedButtonClass: string = `mt-4 border-solid border-2 border-black bg-sky-500 text-white`;
  const [buttonClass, setButtonClass] = useState(initialButtonClass);
  const [isColorChanged, setIsColorChanged] = useState(false);

  const btnChangeColor = (): void => {
    // console.log("change color");
    setButtonClass(changedButtonClass);
    setIsColorChanged(true);
  };
  const resetButtonColor = (): void => {
    setButtonClass(initialButtonClass);
    setIsColorChanged(false);
  };

  const initBtnGreen: string = `border-dashed border-black-600 text-green-600 underline underline-offset-8 decoration-dashed decoration-2`;
  const changedBtnGreen: string = `border-solid border-black bg-emerald-300 text-black`;
  const [isBtnChange, setIsBtnChange] = useState(false);
  const btnChangeGreen = (): void => {
    setIsBtnChange(true);
  };
  const resetBtnChange = (): void => {
    setIsBtnChange(false);
  };

  // ↓ 這種寫法有較多的重複性, 可能比較難維護, 應當更 "Don't repeat yourself" (DRY) 一點
  // const Item = ({ name, isWhat }: ItemPackage): JSX.Element => {
  //   if (isWhat) {
  //     // 這種比較少用, 用 return null 的話, ts 不能用 JSX.Element
  //     return (
  //       <li className="item mt-4">
  //         {name} <span className="text-green-600">✔</span>
  //       </li>
  //     );
  //   }
  //   return <li className="item mt-4">{name}</li>;
  // };

  // ↓ 將重複性的寫法, 修正為 Conditional(ternary) operator(?:), 左邊如果是 true 的話, 則回傳右邊的結果
  const Item = ({ name, isWhat }: ItemPackage): JSX.Element => {
    const itemClass = isWhat
      ? "item mt-4 underline underline-offset-8 decoration-dashed decoration-2"
      : "item mt-4";
    return (
      <>
        <li className={itemClass}>
          {/* ↓ 這適合簡單的條件, 如果有過多的巢狀標記會很混亂, 可以考慮使用子組件來整理內容, 可以用variables 和 function 來整理複雜的 expression */}
          {/* {isWhat ? name + '✔' : name} */}
          {name} {isWhat && <span className="text-green-500">✔</span>}
        </li>
      </>
    );
  };

  // 比較常見的做法在 render JSX 且條件為 true, 或是不渲染任何東西的情況下
  // 條件式為 false 的狀況下, 整個表達式將會是 false, 在 JSX tree 中像是一個洞, 並且不會渲染任何東西
  // 不要放 numbers 在 && 左邊, 只放 0 在 && 左側的話, 只會渲染 0
  const Item2 = ({ name, isDelete }: ItemPackage): JSX.Element => {
    let starMark = "˗ˏˋ ★ ˎˊ˗";
    if (!isDelete) {
      starMark = "ˋ ★ ˊ" + "?";
    }
    return (
      <>
        {!isDelete && (
          <li className="item mt-4 line-through">
            {name}{" "}
            {!isDelete && <span className="text-sky-500">{starMark}</span>}
          </li>
        )}
      </>
    );
  };

  return (
    <>
      <App />
      <main className="flex flex-row items-start justify-center gap-14">
        <section className="mt-5 pt-5">
          <>
            <div className="text-center text-3xl font-black">
              "Displaying Data"
            </div>
          </>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="mr-2 text-left text-2xl font-black">
              {user.name}
            </div>
            <img
              className="inline-flex h-6 w-6 rounded ring-2 ring-white"
              src={user.imageUrl}
              alt={`Avatar for ${user.name}`}
              style={{ width: user.imageSize, height: user.imageSize }}
            />
          </div>
          <div className="about-me mt-4 pt-4">
            <div className="text-center text-2xl font-black">"About Me"</div>
            <ul className="pl-[27%] text-left text-xl font-black">
              <Item name="Hometown" isWhat={true} />
              <Item name="Favorite food" isWhat={true} />
              <Item name="Favorite color" isWhat={true} />
              <Item2 name="Sunny guy" isWhat={true} isDelete={false} />
              
            </ul>
          </div>
        </section>

        <section className="mt-5 pt-5 text-left">
          <>
            <div className="text-3xl font-black">"Conditional Rendering"</div>
          </>
          <div className="conditional-rendering pl-4 text-left">
            <div className="mt-2 font-black">
              Conditional rendering with control.
              <button
                onClick={btnChangeColor}
                onMouseLeave={resetButtonColor}
                className={`font-black ${buttonClass}`}
              >
                Change to blue
              </button>
            </div>
            {/* 使用邏輯與運算符的條件渲染 */}
            <div className="mt-2 pl-2">
              {!isColorChanged && <div>Button color has not changed yet~</div>}
              {isColorChanged && (
                <div className="inline-flex font-black">
                  Button color has been changed to
                  <p className="px-2 font-black text-sky-600 underline decoration-dashed decoration-2 underline-offset-8">
                    blue
                  </p>
                  !
                </div>
              )}
            </div>
            <div className="font-black">
              Conditional rendering with ? operator.
              <button
                onClick={btnChangeGreen}
                onMouseLeave={resetBtnChange}
                className={`mt-4 border-2 font-black ${
                  isBtnChange ? changedBtnGreen : initBtnGreen
                }`}
              >
                Change to green
              </button>
            </div>
            {/* 使用邏輯與運算符的條件渲染 */}
            <div className="mt-2 pl-2 font-black">
              {isBtnChange && (
                <div className="inline-flex">
                  Button color has been changed to
                  <p className="px-2 font-black text-green-600 underline decoration-dashed decoration-2 underline-offset-8">
                    green
                  </p>
                  !
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Conditional-rendering 重點
// 在 React 中, 使用 JS 控制分支邏輯
// 可以用 if 陳述句有條件地回傳 JSX 表達式
// 在 JSX 中, { cond ? <A /> : <B /> } 表示, 假如 cond 成立, 則渲染 <A />, 否則 <B />
// 在 JSX 中, { cond && <A />} 表示為假如 if cond 成立, 則渲染 <A />, 或不渲染
