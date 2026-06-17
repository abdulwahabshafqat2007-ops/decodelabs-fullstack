const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// ================================
//   RECIPE DATA (In-Memory "Database")
// ================================
let recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    category: "dinner",
    time: "25 mins",
    servings: 2,
    ingredients: ["spaghetti", "eggs", "bacon", "parmesan", "black pepper", "garlic"],
    steps: [
      "Boil spaghetti in salted water until al dente.",
      "Fry bacon until crispy, add garlic.",
      "Whisk eggs and parmesan together.",
      "Drain pasta, mix with bacon off heat.",
      "Add egg mixture, toss quickly. Season with black pepper."
    ]
  },
  {
    id: 2,
    title: "Avocado Toast",
    category: "breakfast",
    time: "10 mins",
    servings: 1,
    ingredients: ["bread", "avocado", "lemon", "salt", "chili flakes", "eggs"],
    steps: [
      "Toast bread until golden.",
      "Mash avocado with lemon juice and salt.",
      "Spread on toast.",
      "Top with chili flakes and a fried egg."
    ]
  },
  {
    id: 3,
    title: "Chicken Stir Fry",
    category: "dinner",
    time: "20 mins",
    servings: 3,
    ingredients: ["chicken", "soy sauce", "garlic", "ginger", "bell pepper", "onion", "oil"],
    steps: [
      "Slice chicken into strips.",
      "Heat oil in wok, fry garlic and ginger.",
      "Add chicken, cook until golden.",
      "Add vegetables and soy sauce.",
      "Stir fry on high heat for 5 mins."
    ]
  },
  {
    id: 4,
    title: "Banana Pancakes",
    category: "breakfast",
    time: "15 mins",
    servings: 2,
    ingredients: ["banana", "eggs", "flour", "milk", "butter", "sugar"],
    steps: [
      "Mash banana in a bowl.",
      "Add eggs, flour, milk and sugar. Mix well.",
      "Heat butter in pan.",
      "Pour batter and cook until bubbles form.",
      "Flip and cook other side."
    ]
  },
  {
    id: 5,
    title: "Margherita Pizza",
    category: "dinner",
    time: "30 mins",
    servings: 4,
    ingredients: ["flour", "tomato", "mozzarella", "basil", "olive oil", "yeast", "salt"],
    steps: [
      "Make dough with flour, yeast, salt and water.",
      "Let rise for 1 hour.",
      "Roll out and spread tomato sauce.",
      "Add mozzarella and bake at 220°C for 12 mins.",
      "Top with fresh basil."
    ]
  }
];

// ================================
//   ROOT ROUTE (Health Check)
// ================================
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the CookIt API 🍳",
    endpoints: {
      getAllRecipes: "GET /api/recipes",
      getOneRecipe: "GET /api/recipes/:id",
      searchByIngredient: "GET /api/recipes?ingredient=chicken",
      filterByCategory: "GET /api/recipes?category=dinner",
      addRecipe: "POST /api/recipes"
    }
  });
});

// ================================
//   GET /api/recipes
//   Supports query params: ?ingredient= and ?category=
// ================================
app.get("/api/recipes", (req, res) => {
  let result = recipes;
  const { ingredient, category } = req.query;

  if (category) {
    result = result.filter(
      (r) => r.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (ingredient) {
    result = result.filter((r) =>
      r.ingredients.some((ing) =>
        ing.toLowerCase().includes(ingredient.toLowerCase())
      )
    );
  }

  res.status(200).json({
    success: true,
    count: result.length,
    data: result
  });
});

// ================================
//   GET /api/recipes/:id
// ================================
app.get("/api/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return res.status(404).json({
      success: false,
      message: `Recipe with id ${id} not found`
    });
  }

  res.status(200).json({
    success: true,
    data: recipe
  });
});

// ================================
//   POST /api/recipes
//   Creates a new recipe with validation
// ================================
app.post("/api/recipes", (req, res) => {
  const { title, category, time, servings, ingredients, steps } = req.body;

  // Validation
  if (!title || !category || !ingredients || !steps) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: title, category, ingredients, steps"
    });
  }

  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Ingredients must be a non-empty array"
    });
  }

  if (!Array.isArray(steps) || steps.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Steps must be a non-empty array"
    });
  }

  const newRecipe = {
    id: recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 1,
    title,
    category,
    time: time || "N/A",
    servings: servings || 1,
    ingredients,
    steps
  };

  recipes.push(newRecipe);

  res.status(201).json({
    success: true,
    message: "Recipe created successfully",
    data: newRecipe
  });
});

// ================================
//   404 HANDLER (Unknown Routes)
// ================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// ================================
//   START SERVER
// ================================
app.listen(PORT, () => {
  console.log(`🚀 CookIt API running on http://localhost:${PORT}`);
});