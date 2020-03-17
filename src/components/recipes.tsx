import React from "react";

interface RecipesProps {
  title: string;
  calories: number;
  image: string;
}

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
