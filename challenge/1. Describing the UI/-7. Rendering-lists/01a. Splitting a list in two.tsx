import React from "react";
import { people } from "../../../src/data/scientistsData";
import { getScientistsImgUrl } from "../../../src/utils/imageUrlUtil";

// 聲明式 design, 比較簡潔, 鏈式呼叫
// 分離出組件
const ListItem = ({ person }) => {
  return (
    <li key={person.id}>
      <img src={getScientistsImgUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );
};

// 使用 filter() 兩次, 造出兩個獨立的 arrays, 並且在其中使用 map()
const ListChemists = () => {
  const findChemist = people
    .filter((pro) => pro.profession === "chemist")
    .map((pro) => <ListItem person={pro} key={pro.id} />);
  return <ul>{findChemist}</ul>;
};

const ListOtherScientists = () => {
  const notChemist = people
    .filter((pro) => pro.profession !== "chemist")
    .map((pro) => <ListItem person={pro} key={pro.id} />);
  return <ul>{notChemist}</ul>;
};

export default function List() {
  return (
    <main>
      <article>
        <h1>Scientists</h1>
        <h2>Chemists</h2>
        <ListChemists />
      </article>
      <article>
        <h2>Great Scientists</h2>
        <ListOtherScientists />
      </article>
    </main>
  );
}
