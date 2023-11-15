import { useState } from "react";
import App from "../App";

const user = {
  name: "Zelfy Shih",
  imageUrl: "https://avatars.githubusercontent.com/u/65555979?v=4",
  imageSize: 90,
};

export default function DisplayingData() {
  const initialButtonClass: string = `mt-4 border-dashed border-2 border-black-600 text-sky-600 underline underline-offset-8 decoration-dashed decoration-2`;
  const changedButtonClass: string = `mt-4 border-solid border-2 border-black bg-sky-500 text-white`;
  const [buttonClass, setButtonClass] = useState(initialButtonClass);
  const [isColorChanged, setIsColorChanged] = useState(false);

  const btnChangeColor = (): void => {
    console.log("change color");
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

  return (
    <>
      <App />
      <>
        <div className="text-center text-3xl font-black">"Displaying Data"</div>
      </>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="mr-2 text-left text-2xl font-black">{user.name}</div>
        <img
          className="inline-flex h-6 w-6 rounded ring-2 ring-white"
          src={user.imageUrl}
          alt={`Avatar for ${user.name}`}
          style={{ width: user.imageSize, height: user.imageSize }}
        />
      </div>

      <>
        <div className="mt-4 text-center text-3xl font-black">
          "Conditional Rendering"
        </div>
      </>

      <div className="conditional-rendering mt-4 font-black	">
        Conditional rendering with if/else.
        <button
          onClick={btnChangeColor}
          onMouseLeave={resetButtonColor}
          className={`font-black ${buttonClass}`}
        >
          Change color
        </button>
      </div>

      {/* 使用邏輯與運算符的條件渲染 */}
      <div className="conditional-rendering mt-4">
        {!isColorChanged && <div>Button color has not changed yet~</div>}
        {isColorChanged && (
          <div className="inline-flex font-black">
            Button color has been changed to
            <p className="px-2 text-sky-600 underline decoration-dashed decoration-2 underline-offset-8 font-black">
              blue
            </p>
            !
          </div>
        )}
      </div>

      <div className="conditional-rendering font-black	">
        Conditional rendering with ? operator.
        <button
          onClick={btnChangeGreen}
          onMouseLeave={resetBtnChange}
          className={`mt-4 border-2 font-black ${
            isBtnChange ? changedBtnGreen : initBtnGreen
          }`}
        >
          Change color
        </button>
      </div>
      {/* 使用邏輯與運算符的條件渲染 */}
      <div className="conditional-rendering mt-4 font-black	">
        {isBtnChange && (
          <div className="inline-flex">
            Button color has been changed to{" "}
            <p className="px-2 text-green-600 underline decoration-dashed decoration-2 underline-offset-8 font-black">
              green
            </p>
            !
          </div>
        )}
      </div>
    </>
  );
}
