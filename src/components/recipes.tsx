import React from "react";
import styles from "./recipes.module.scss";

interface RecipesProps {
  title: string;
  calories: number;
  image: string;
  ingredients: {
    text: string;
    weight?: number | undefined;
  }[];
}

/* voltar a colocar dps - adicionar ingredients ao props 
    
*/

const Recipe = ({ title, calories, image, ingredients }: RecipesProps) => {
  return (
    <div className={styles.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Recipe;
