// import { useState } from "react";
import { Routes, Route } from "react-router"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import initialRecipes from "./data/recipes.json";

import "./App.css";
import { useState } from "react";



function App() {
  const [recipes, setRecipes] = useState(initialRecipes);
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-area">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<DashboardPage recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />} />
            <Route path="/recipes/:id" element={<RecipeDetailsPage recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );

  

  function handleDeleteRecipe(idToDelete) {
    const updatedRecipes = recipes.filter(function(recipe) {
      return recipe.id !== idToDelete;
    });
    setRecipes(updatedRecipes);
  }
}

export default App;
