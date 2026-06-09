// ================================
//   RECIPE DATA
// ================================
const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      category: "dinner",
      emoji: "🍝",
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
      emoji: "🥑",
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
      emoji: "🍗",
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
      emoji: "🥞",
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
      title: "Caesar Salad",
      category: "lunch",
      emoji: "🥗",
      time: "15 mins",
      servings: 2,
      ingredients: ["lettuce", "parmesan", "croutons", "lemon", "garlic", "olive oil", "eggs"],
      steps: [
        "Wash and chop romaine lettuce.",
        "Make dressing: mix olive oil, lemon, garlic, egg yolk.",
        "Toss lettuce with dressing.",
        "Top with croutons and parmesan."
      ]
    },
    {
      id: 6,
      title: "Margherita Pizza",
      category: "dinner",
      emoji: "🍕",
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
    },
    {
      id: 7,
      title: "Chocolate Brownies",
      category: "dessert",
      emoji: "🍫",
      time: "40 mins",
      servings: 8,
      ingredients: ["chocolate", "butter", "sugar", "eggs", "flour", "cocoa powder", "vanilla"],
      steps: [
        "Melt chocolate and butter together.",
        "Whisk in sugar and eggs.",
        "Fold in flour and cocoa powder.",
        "Pour into baking tin.",
        "Bake at 180°C for 25 mins."
      ]
    },
    {
      id: 8,
      title: "Greek Salad",
      category: "lunch",
      emoji: "🫒",
      time: "10 mins",
      servings: 2,
      ingredients: ["tomato", "cucumber", "feta", "olives", "onion", "olive oil", "oregano"],
      steps: [
        "Chop tomatoes, cucumber and onion.",
        "Add olives and feta cheese.",
        "Drizzle with olive oil.",
        "Season with oregano and salt."
      ]
    },
    {
      id: 9,
      title: "French Omelette",
      category: "breakfast",
      emoji: "🍳",
      time: "10 mins",
      servings: 1,
      ingredients: ["eggs", "butter", "salt", "cheese", "chives"],
      steps: [
        "Whisk eggs with salt.",
        "Melt butter in pan over medium heat.",
        "Pour eggs, stir gently.",
        "Add cheese, fold omelette.",
        "Slide onto plate, garnish with chives."
      ]
    },
    {
      id: 10,
      title: "Garlic Bread",
      category: "snacks",
      emoji: "🥖",
      time: "15 mins",
      servings: 4,
      ingredients: ["bread", "butter", "garlic", "parsley", "salt"],
      steps: [
        "Mix softened butter with minced garlic and parsley.",
        "Spread on sliced bread.",
        "Wrap in foil and bake at 180°C for 10 mins.",
        "Unwrap and broil for 2 mins until golden."
      ]
    },
    {
      id: 11,
      title: "Mango Smoothie",
      category: "snacks",
      emoji: "🥭",
      time: "5 mins",
      servings: 2,
      ingredients: ["mango", "milk", "yogurt", "honey", "ice"],
      steps: [
        "Peel and chop mango.",
        "Add all ingredients to blender.",
        "Blend until smooth.",
        "Serve chilled."
      ]
    },
    {
      id: 12,
      title: "Beef Tacos",
      category: "dinner",
      emoji: "🌮",
      time: "25 mins",
      servings: 3,
      ingredients: ["beef", "taco shells", "tomato", "lettuce", "cheese", "onion", "cumin", "garlic"],
      steps: [
        "Brown beef with garlic, onion and cumin.",
        "Warm taco shells in oven.",
        "Fill shells with beef.",
        "Top with tomato, lettuce and cheese."
      ]
    },
    {
      id: 13,
      title: "Tomato Soup",
      category: "lunch",
      emoji: "🍅",
      time: "30 mins",
      servings: 4,
      ingredients: ["tomato", "onion", "garlic", "olive oil", "cream", "salt", "basil"],
      steps: [
        "Sauté onion and garlic in olive oil.",
        "Add chopped tomatoes, cook 15 mins.",
        "Blend until smooth.",
        "Stir in cream, season with salt and basil."
      ]
    },
    {
      id: 14,
      title: "Cheesecake",
      category: "dessert",
      emoji: "🍰",
      time: "60 mins",
      servings: 8,
      ingredients: ["cream cheese", "sugar", "eggs", "butter", "biscuits", "vanilla", "lemon"],
      steps: [
        "Crush biscuits and mix with melted butter for base.",
        "Press into tin and chill.",
        "Beat cream cheese, sugar, eggs, vanilla and lemon.",
        "Pour over base.",
        "Bake at 160°C for 45 mins, then chill overnight."
      ]
    },
    {
      id: 15,
      title: "Veggie Wrap",
      category: "lunch",
      emoji: "🌯",
      time: "10 mins",
      servings: 1,
      ingredients: ["tortilla", "lettuce", "tomato", "cucumber", "hummus", "bell pepper", "feta"],
      steps: [
        "Spread hummus on tortilla.",
        "Layer lettuce, tomato, cucumber and bell pepper.",
        "Add feta cheese.",
        "Roll tightly and slice in half."
      ]
    }
  ];
  
  // ================================
  //   STATE
  // ================================
  let activeIngredients = [];
  let activeCategory = "all";
  
  // ================================
  //   DOM ELEMENTS
  // ================================
  const ingredientInput = document.getElementById("ingredientInput");
  const tagsContainer = document.getElementById("tagsContainer");
  const searchBtn = document.getElementById("searchBtn");
  const recipesGrid = document.getElementById("recipesGrid");
  const resultsCount = document.getElementById("resultsCount");
  const noResults = document.getElementById("noResults");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const clearBtn = document.getElementById("clearBtn");
  
  // ================================
  //   HAMBURGER MENU
  // ================================
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
  
  // Close mobile menu on link click
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
  
  // ================================
  //   INGREDIENT TAG SYSTEM
  // ================================
  ingredientInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addIngredient(ingredientInput.value);
    }
  });
  
  function addIngredient(value) {
    const ingredient = value.trim().toLowerCase().replace(",", "");
    if (ingredient === "") return;
    if (activeIngredients.includes(ingredient)) {
      ingredientInput.value = "";
      return;
    }
    activeIngredients.push(ingredient);
    ingredientInput.value = "";
    renderTags();
  }
  
  function removeIngredient(ingredient) {
    activeIngredients = activeIngredients.filter(i => i !== ingredient);
    renderTags();
  }
  
  function renderTags() {
    tagsContainer.innerHTML = "";
    activeIngredients.forEach(ingredient => {
      const tag = document.createElement("span");
      tag.classList.add("tag");
      tag.innerHTML = `${ingredient} <span class="remove-tag" data-ingredient="${ingredient}">×</span>`;
      tagsContainer.appendChild(tag);
    });
  
    // Remove tag on click
    tagsContainer.querySelectorAll(".remove-tag").forEach(btn => {
      btn.addEventListener("click", () => {
        removeIngredient(btn.dataset.ingredient);
      });
    });
  }
  
  // ================================
  //   SEARCH BUTTON
  // ================================
  searchBtn.addEventListener("click", () => {
    if (ingredientInput.value.trim() !== "") {
      addIngredient(ingredientInput.value);
    }
    filterAndRender();
    document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
  
    // Show clear button
    clearBtn.classList.remove("hidden");
  });
  
  // ================================
  //   CATEGORY FILTER
  // ================================
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      filterAndRender();
    });
  });
  
  // ================================
  //   FILTER & RENDER LOGIC
  // ================================
  function filterAndRender() {
    let filtered = recipes;
  
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(r => r.category === activeCategory);
    }
  
    // Filter by ingredients
    if (activeIngredients.length > 0) {
      filtered = filtered.filter(recipe => {
        return activeIngredients.some(ing =>
          recipe.ingredients.some(ri => ri.includes(ing) || ing.includes(ri))
        );
      });
  
      // Sort by most matched ingredients
      filtered.sort((a, b) => {
        const aMatches = countMatches(a.ingredients);
        const bMatches = countMatches(b.ingredients);
        return bMatches - aMatches;
      });
    }
  
    renderRecipes(filtered);
  }
  
  function countMatches(ingredients) {
    return ingredients.filter(ing =>
      activeIngredients.some(ai => ing.includes(ai) || ai.includes(ing))
    ).length;
  }
  
  // ================================
  //   RENDER RECIPES
  // ================================
  function renderRecipes(list) {
    recipesGrid.innerHTML = "";
  
    if (list.length === 0) {
      noResults.classList.remove("hidden");
      resultsCount.textContent = "No recipes found";
      return;
    }
  
    noResults.classList.add("hidden");
    resultsCount.textContent = `Showing ${list.length} recipe${list.length > 1 ? "s" : ""}`;
  
    list.forEach(recipe => {
      const matchedCount = countMatches(recipe.ingredients);
      const card = document.createElement("article");
      card.classList.add("recipe-card");
      card.innerHTML = `
        <div class="card-img">${recipe.emoji}</div>
        <div class="card-body">
          <p class="card-category">${recipe.category}</p>
          <h3 class="card-title">${recipe.title}</h3>
          <div class="card-meta">
            <span>⏱ ${recipe.time}</span>
            <span>👤 ${recipe.servings} servings</span>
            ${matchedCount > 0 ? `<span style="color: var(--mocha); font-weight:600;">✓ ${matchedCount} match${matchedCount > 1 ? "es" : ""}</span>` : ""}
          </div>
          <div class="card-ingredients">
            ${recipe.ingredients.map(ing => {
              const isMatched = activeIngredients.some(ai => ing.includes(ai) || ai.includes(ing));
              return `<span class="ingredient-tag ${isMatched ? "matched" : ""}">${ing}</span>`;
            }).join("")}
          </div>
        </div>
      `;
      card.addEventListener("click", () => openModal(recipe));
      recipesGrid.appendChild(card);
    });
  }
  
  // ================================
  //   MODAL
  // ================================
  function openModal(recipe) {
    // Remove existing modal if any
    const existing = document.getElementById("recipeModal");
    if (existing) existing.remove();
  
    const modal = document.createElement("div");
    modal.id = "recipeModal";
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.6); z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      padding: 1rem;
    `;
  
    modal.innerHTML = `
      <div style="
        background: #fff; border-radius: 16px; max-width: 580px; width: 100%;
        max-height: 85vh; overflow-y: auto; padding: 2rem; position: relative;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      ">
        <button onclick="document.getElementById('recipeModal').remove()" style="
          position: absolute; top: 1rem; right: 1rem;
          background: #f2f0ea; border: none; border-radius: 50%;
          width: 36px; height: 36px; font-size: 1.2rem;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
        ">×</button>
  
        <div style="font-size: 4rem; text-align: center; margin-bottom: 1rem;">${recipe.emoji}</div>
        <p style="color: #A5856E; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; font-family: Montserrat, sans-serif;">${recipe.category}</p>
        <h2 style="font-family: Montserrat, sans-serif; font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem;">${recipe.title}</h2>
        <div style="display: flex; gap: 1rem; color: #888; font-size: 0.9rem; margin-bottom: 1.5rem;">
          <span>⏱ ${recipe.time}</span>
          <span>👤 ${recipe.servings} servings</span>
        </div>
  
        <h4 style="font-family: Montserrat, sans-serif; font-weight: 700; margin-bottom: 0.75rem;">🧂 Ingredients</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
          ${recipe.ingredients.map(ing => {
            const isMatched = activeIngredients.some(ai => ing.includes(ai) || ai.includes(ing));
            return `<span style="
              background: ${isMatched ? "#A0D4E0" : "#f2f0ea"};
              padding: 0.3rem 0.7rem; border-radius: 20px; font-size: 0.85rem;
              font-weight: ${isMatched ? "600" : "400"};
            ">${ing}</span>`;
          }).join("")}
        </div>
  
        <h4 style="font-family: Montserrat, sans-serif; font-weight: 700; margin-bottom: 0.75rem;">👨‍🍳 Steps</h4>
        <ol style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.6rem;">
          ${recipe.steps.map(step => `
            <li style="color: #555; font-size: 0.95rem; line-height: 1.6;">${step}</li>
          `).join("")}
        </ol>
      </div>
    `;
  
    // Close on backdrop click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.remove();
    });
  
    document.body.appendChild(modal);
  }
  
  // ================================
  //   INITIAL RENDER
  // ================================
  renderRecipes(recipes);

  // ================================
//   BACK TO TOP BUTTON
// ================================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================================
//   CLEAR SEARCH
// ================================
clearBtn.addEventListener("click", () => {
    activeIngredients = [];
    ingredientInput.value = "";
    renderTags();
    filterBtns.forEach(b => b.classList.remove("active"));
    document.querySelector('[data-category="all"]').classList.add("active");
    activeCategory = "all";
    renderRecipes(recipes);
    clearBtn.classList.add("hidden");
    document.getElementById("search").scrollIntoView({ behavior: "smooth" });
  });