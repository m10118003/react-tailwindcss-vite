// 子層組件

const Block = () => {
  return (
    <div className="block-unit flex h-[88px] w-[88px] flex-col items-center rounded"></div>
  );
};

export function GreenBlocks() {
  return (
    <div className="green-blocks-group flex rotate-6 cursor-pointer flex-col items-center rounded bg-green-300 shadow-lg hover:rotate-0 hover:shadow-lg">
      <Block />
    </div>
  );
}

export function BlueBlocks() {
  return (
    <div className="blue-blocks-group flex rotate-6 cursor-pointer flex-col items-center rounded bg-sky-300 shadow-lg hover:rotate-0 hover:shadow-lg">
      <Block />
    </div>
  );
}

//Your First Component
// 將圖片和名字作為字串傳遞
const Profile = () => {
  const avatar = "https://avatars.githubusercontent.com/u/65555979?v=4";
  const description = "Hello, I'm Zelfy Shih";
  return (
    <img
      className="profile m-3 w-[150px] cursor-pointer rounded shadow-lg hover:rotate-6 hover:shadow-2xl"
      src={avatar}
      alt={description}
    />
  );
};

// 父層組件
// 如果組件是用 export default 命名的話, import 的時候不能用 {} 包起來
// export default 的優先程度比較高
export default function Gallery() {
  return (
    <div className="gallery">
      <section>
        <div className="gallery-group flex justify-center rounded">
          <Profile />
        </div>
      </section>
    </div>
  );
}

// 一個 file 只對應一個 default export, 但可以有許多的 exort
/*
例如對應一個 export default
export default function button() {
    ...
}
*/

/*
很多 export
export function Slider() {
    ...
}
export function Checkbox() {
    ...
}
*/
/*
混合型的 組件
export default function Avatar() {
    ...
}

export default function friendList() {
    ...
}
*/

/* 
進出規則
export default function Avatar() -> 對應 import Avatar() from './Avatar'
export function Avatar() -> 對應 import {Avatar} from './Avatar'
*/
