import React from "react";

interface RecipesProps {
  title: string;
  calories: number;
  image: string;
  /*ingredients: {
    text: string;
    weight?: number | undefined;
  }; */
}

/* voltar a colocar dps - adicionar ingredients ao props 
    ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
*/

const Recipe = ({ title, calories, image }: RecipesProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
