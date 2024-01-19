import React from "react";
import { recipes } from "../../../src/data/recipesData";

// 唯一 key, 有助於維持列表的唯一性
// key 應該在 RecipeList() 內部每個 Recipe 的元件上設定
// 而不是在 Recipe 元件的最外層 div 上設定 key
// key 需要直接新增倒 map return 的元素上

const Recipe = ({ name, ingredients }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

// 將 key 放在主版上, 可以性能最佳化, 讓 React 透過 key 來確定哪些項目要更新, 那些不變
// 避免重複的 key, 如果將 key 放在 Recipe 內, 可能會導致不同的地方使用相同的 Recipe, 而出現重複的 key
export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
