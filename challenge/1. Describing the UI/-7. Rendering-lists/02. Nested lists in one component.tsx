import React from "react";
import { recipes } from "../../../src/data/recipesData";

// 可以不用額外的組件抽象化
// const ClassifyRecipe = () => {
//   return (
//     <div>
//       {recipes.map((foodName) => (
//         <div key={foodName.id}>
//           <h2>{foodName.name}</h2>
//           <ul>
//             {foodName.ingredients.map((ingr, index) => (
//               <li key={index}> {ingr} </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// 直接簡化結構, 動態渲染食材, 使用唯一的 key
export default function RecipeList() {
  return (
    <section>
      <h1>Recipes</h1>
      {recipes.map((foodName) => (
        <div key={foodName.id}>
          <h2>{foodName.name}</h2>
          <ul>
            {foodName.ingredients.map((ingr, index) => (
              <li key={index}> {ingr} </li>
            ))}
          </ul>
        </div>
      ))}
      {/* <h2>
        <ClassifyRecipe />
      </h2> */}
    </section>
  );
}
