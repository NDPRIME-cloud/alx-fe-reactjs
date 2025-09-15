import React from 'react'

import { create } from "zustand";

 const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Pasta", description: "Creamy Alfredo pasta" },
    { id: 2, title: "Salad", description: "Fresh garden salad" },
  ],

  // 🔹 Update recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      addRecipe,
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // 🔹 Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));



// const useRecipeStore = create(set => ({
//     recipes:[],
//     addRecipes:(newRecipe) => set(state => ({recipes: [...state.recipes, newRecipe]})),
//     setRecipes: (recipes) => set({recipes})
// }))

export default useRecipeStore