import React, { Fragment } from "react";

// 這是比較罕見的情況, 索引當作 key, 因為一首詩的每行不會重排
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

// 最後一行詩不要有底線
// 使用 Fragment 的寫法, 每個段落後面都加分隔線, 除了最後一行
export function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          <p>{line}</p>
          {index < poem.lines.length - 1 && <hr />}
        </Fragment>
      ))}
    </article>
  );
}
// 第二種使用 Fragment 的寫法, 第一行之前不會有分隔線, 從第二行開始有分隔線
export function Poem2() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  );
}

// 主要模版上的 index 作為 key 不再起作用, 因為每個分個符號和段落現在都在同一個陣列上
// 為了避免出現具有相同 key 的不同類型元素(可能導致 React 渲染錯誤), 在 key 後面新增後綴可以確保每個 key 是唯一的
export function Poem3() {
  const output: JSX.Element[] = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(<hr key={i + "-separator"} />);
    output.push(<p key={i + "-text"}>{line}</p>);
  });
  // Remove the first <hr />
  output.shift();

  return <article>{output}</article>;
}
