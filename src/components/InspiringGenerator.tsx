import { useState } from "react";
import { inspirations } from "@/data/inspireData.js";



export default function InspiringGenerator() {
    const [idx, setIdx] = useState(0); // 設定初始隨機索引
    const inspire = inspirations[idx]; // 根據索引獲取引用
    // const next = () => setIndex(Math.floor(Math.random() * quotes.length)); // 直接產生新的索引來顯示新的隨機引用
    // setIndex(index + 1);
    // 如果要減少相同引用的狀況
    const next = () => {
        let newIdx = idx;
        while (newIdx === idx) { // 第一次隨機數與當前索引不同, 循環就不執行
            newIdx = Math.floor(Math.random() * inspirations.length);
        }
        setIdx(newIdx);
    }
    // 也可以這樣寫:
    // const next = () => {
    //     let newRandom;
    //     do { // 確保至少執行一次循環體, 即使第一次生成的隨機數與當前索引不同
    //         newRandom = Math.floor(Math.random() * quotes.length);
    //     } while (newRandom === index);

    //     setIndex(newRandom);
    // };
    return (
        <div className="inspiring-text-genator w-1/3">
            <p className="text-left text-xl font-black">Here is inspirational quote(or color!):</p>
            {inspire.type === "quote" && <h3 className='fancy cursive my-2 h-20 text-left'><div className="bg-transparent drop-shadow-md">{inspire.value}</div></h3> || <div className="my-2 h-20 flex items-center justify-center"><div className="h-16 w-16 shadow-xl rounded cursor-crosshair" style={{ backgroundColor: inspire.value }}></div></div>}
            <button className="border-black-600 border-2 border-dashed hover:bg-sky-200 hover:text-indigo-600 hover:font-black shadow-xl" onClick={next}>Inspire me, again!</button>
        </div>
    )
}