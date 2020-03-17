import React, { useEffect, useState } from "react";
import "./App.scss";
import Recipe from "./components/recipes";

// Objeto dentro de um objeto
interface RecipeData {
  recipe: {
    label: string;
    image: string;
    calories: number;
    ingredients: Ingredient[];
  };
}

interface Ingredient {
  ingredients: {
    text: string;
    weight?: number;
  };
}

const App = () => {
  // Para autenticação
  const APP_ID = "3181aa2b";
  const APP_KEY = "0ca13a11544dc7dcafa6790a1795fc46";

  const [recipes, setRecipes] = useState<RecipeData[]>([]); // vai ser um array de objetos
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]); // só faz update depois de submeter

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits); // Hits é onde tá a info
    console.log(data.hits);
  };

  const updateSearch = (e: any) => {
    setSearch(e.target.value); // value do input
    console.log(search);
  };

  // Objetivo: Sempre q o form submete queremos ir buscar o get search
  const getSearch = (e: any) => {
    e.preventDefault(); // parar o page refresh
    setQuery(search);
    setSearch(""); // depois da procura clean search
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="search"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      {recipes.map(reciData => (
        <Recipe
          key={reciData.recipe.label}
          title={reciData.recipe.label}
          calories={reciData.recipe.calories}
          image={reciData.recipe.image}
          /*ingredients={reciData.recipe.ingredients}*/
        />
      ))}
    </div>
  );
};

export default App;
