import React, { useEffect, useState } from "react";
import "./App.scss";
import Recipe from "./components/recipes";

interface RecipeData {
  recipe: {
    label: string;
    image: string;
    calories: number;
  };
}

const App = () => {
  // Para autenticação
  const APP_ID = "3181aa2b";
  const APP_KEY = "0ca13a11544dc7dcafa6790a1795fc46";

  // dava erro type never. soluçao é empty string?
  const [recipes, setRecipes] = useState<RecipeData[]>([]); // vai ser um array de objetos

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits); // Hits é onde tá a info
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="search" />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      {recipes.map(reciData => (
        <Recipe
          title={reciData.recipe.label}
          calories={reciData.recipe.calories}
          image={reciData.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
