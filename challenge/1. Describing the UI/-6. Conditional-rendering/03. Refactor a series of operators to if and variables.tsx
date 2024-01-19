import React from "react";

const drinks = {
  tea: {
    teaPart: "leaf",
    mg: "15–70 mg/cup",
    age: "4,000+ years",
  },
  coffee: {
    teaPart: "bean",
    mg: "80–185 mg/cup",
    age: "1,000+ years",
  },
};

function Drink({ name }) {
  const info = drinks[name]; // name 的 variable 可改變, 相當於 drinks["tea"], drinks["coffee"]
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.teaPart}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.mg}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
