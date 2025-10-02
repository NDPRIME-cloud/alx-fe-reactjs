import React, { useState, useEffect } from "react";
import data from "./data.json"; // Import mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from data.json
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-8"> Recipe Sharing Platform</h1>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 bg-blue-700">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>

              {/* Link */}
              <a
                href={`/recipes/${recipe.id}`}
                className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
