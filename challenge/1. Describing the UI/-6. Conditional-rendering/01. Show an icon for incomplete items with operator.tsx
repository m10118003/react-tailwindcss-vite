import React from 'react';

function Item({ name, isPacked }) {
  // let mark = '✔'
  // if (!isPacked) {
  //   mark = '❌'
  // }
  // return (
  //   <li className="item">
  //     {name} {mark}
  //   </li>
  // );
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
