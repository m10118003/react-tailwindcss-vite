import React from "react";
import { people } from "../../../src/data/scientistsData";
import { getScientistsImgUrl } from "../../../src/utils/imageUrlUtil";

// 組件化, 責任劃分, 簡化主組件
// 組件化: 可以重用的 ListSection 組件, 使用渲染邏輯
// 責任劃分: 將組件接收 title, people 作為 props
// List 主組件: 做為控制, 並簡化組件
// 直接引入在模版上做運算, 較佳的重用性, 和可讀/維護性, 如果要添加類似的部分, 只要傳入不同的 props 到 ListSection
// 這在主模版 List() 上做運算, 每次 filter 都會遍歷一次 array, 會有一些效能開銷
// 渲染直接映射 array 到 ListSection, 渲染效率佳
function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getScientistsImgUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist",
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Great Scientists" people={everyoneElse} />
    </article>
  );
}
