import React from "react";
import { people } from "../../../src/data/scientistsData";
import { getScientistsImgUrl } from "../../../src/utils/imageUrlUtil";

interface Person {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
}

// 直接引入在模版上做運算, 較佳的重用性, 可維護性略麻煩, 如果要添加類似的部分, 只要傳入不同的 props 到 ListSection
// 指令式 design, 手動初始化陣列, 顯式分離, 較好理解資料被分離和處理
// 數據量大的時候可以用這種方式, 遍歷一次 array, 而不是用 filter
// 這樣可以略為節省一些 CPU 時間, 不過需要額外的記憶體來儲存 chemists, greatScientists
const classifyPeople = (people: Person[]) => {
  const chemists: Person[] = [];
  const greatScientists: Person[] = [];
  people.forEach((person) => {
    if (person.profession === "chemist") {
      chemists.push(person);
    }
    greatScientists.push(person);
  });
  return { chemists, greatScientists };
};

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
  const { chemists, greatScientists } = classifyPeople(people);

  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Great Scientists" people={greatScientists} />
    </article>
  );
}
