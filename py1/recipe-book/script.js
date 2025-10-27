// Recipe data (in a real app, this would come from a backend)
let recipes = [
    {
        id: 1,
        name: "Classic Pancakes",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80",
        prepTime: 20,
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter"
        ],
        instructions: [
            "In a large bowl, mix flour, sugar, baking powder, and salt.",
            "Make a well in the center and pour in milk, egg, and melted butter; mix until smooth.",
            "Heat a lightly oiled griddle or frying pan over medium-high heat.",
            "Pour the batter onto the griddle, using approximately 1/4 cup for each pancake.",
            "Cook until bubbles form and the edges are dry, then flip and cook until browned on the other side."
        ]
    },
    {
        id: 2,
        name: "Vegetable Stir Fry",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        prepTime: 25,
        ingredients: [
            "2 tablespoons vegetable oil",
            "1 bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "3 tablespoons soy sauce",
            "1 tablespoon honey",
            "1 teaspoon sesame oil"
        ],
        instructions: [
            "Heat oil in a large wok or skillet over high heat.",
            "Add vegetables and stir-fry for 3-4 minutes until crisp-tender.",
            "Add garlic and ginger, stir-fry for 30 seconds.",
            "In a small bowl, mix soy sauce, honey, and sesame oil.",
            "Pour sauce over vegetables and toss to coat.",
            "Cook for 1-2 minutes until sauce thickens slightly."
        ]
    },
    {
        id: 3,
        name: "Chocolate Chip Cookies",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        prepTime: 30,
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup packed brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a small bowl, combine flour, baking soda, and salt.",
            "In a large bowl, beat butter, granulated sugar, brown sugar, and vanilla until creamy.",
            "Add eggs one at a time, beating well after each addition.",
            "Gradually beat in flour mixture.",
            "Stir in chocolate chips.",
            "Drop by rounded tablespoon onto ungreased baking sheets.",
            "Bake for 9-11 minutes or until golden brown."
        ]
    },
    {
        id: 4,
        name: "Caesar Salad",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        prepTime: 15,
        ingredients: [
            "1 large head romaine lettuce, chopped",
            "1/2 cup Caesar dressing",
            "1/4 cup grated Parmesan cheese",
            "1 cup croutons",
            "Freshly ground black pepper"
        ],
        instructions: [
            "Wash and dry romaine lettuce, then chop into bite-sized pieces.",
            "In a large bowl, combine lettuce with Caesar dressing.",
            "Toss to coat evenly.",
            "Add Parmesan cheese and croutons, then toss again.",
            "Season with freshly ground black pepper to taste.",
            "Serve immediately."
        ]
    },
    {
        id: 5,
        name: "Spaghetti Carbonara",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        prepTime: 30,
        ingredients: [
            "1 pound spaghetti",
            "8 slices bacon, diced",
            "2 cloves garlic, minced",
            "4 large eggs",
            "1 cup grated Parmesan cheese",
            "1/2 teaspoon black pepper",
            "1/4 cup chopped fresh parsley"
        ],
        instructions: [
            "Cook spaghetti according to package directions.",
            "While pasta cooks, cook bacon in a large skillet until crispy.",
            "Add garlic to the skillet and cook for 1 minute.",
            "In a bowl, whisk together eggs, Parmesan, and pepper.",
            "Drain pasta, reserving 1/2 cup of pasta water.",
            "Quickly toss hot pasta with egg mixture, adding pasta water as needed to create a creamy sauce.",
            "Stir in bacon and garlic.",
            "Garnish with parsley and serve immediately."
        ]
    },
    {
        id: 6,
        name: "Fruit Smoothie",
        category: "snack",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        prepTime: 5,
        ingredients: [
            "1 banana",
            "1 cup mixed berries (fresh or frozen)",
            "1/2 cup yogurt",
            "1/2 cup milk or juice",
            "1 tablespoon honey (optional)"
        ],
        instructions: [
            "Combine all ingredients in a blender.",
            "Blend until smooth.",
            "Add more liquid if needed to reach desired consistency.",
            "Taste and adjust sweetness with honey if desired.",
            "Pour into glasses and serve immediately."
        ]
    }
];

// DOM Elements
const recipeGrid = document.getElementById('recipe-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryFilter = document.getElementById('category-filter');
const recipeModal = document.getElementById('recipe-modal');
const addRecipeModal = document.getElementById('add-recipe-modal');
const modalBody = document.getElementById('modal-body');
const recipeForm = document.getElementById('recipe-form');
const addRecipeBtn = document.getElementById('add-recipe-btn');
const closeButtons = document.querySelectorAll('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayRecipes(recipes);
    
    // Event Listeners
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
    
    categoryFilter.addEventListener('change', handleFilter);
    
    addRecipeBtn.addEventListener('click', function() {
        addRecipeModal.style.display = 'block';
    });
    
    recipeForm.addEventListener('submit', handleAddRecipe);
    
    // Close modals when clicking the X
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            recipeModal.style.display = 'none';
            addRecipeModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === recipeModal) {
            recipeModal.style.display = 'none';
        }
        if (event.target === addRecipeModal) {
            addRecipeModal.style.display = 'none';
        }
    });
});

// Display recipes in the grid
function displayRecipes(recipesToDisplay) {
    recipeGrid.innerHTML = '';
    
    if (recipesToDisplay.length === 0) {
        recipeGrid.innerHTML = '<p class="no-results">No recipes found. Try a different search or add a new recipe!</p>';
        return;
    }
    
    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.prepTime} min</span>
                    <span class="recipe-category">${recipe.category}</span>
                </div>
                <p class="recipe-description">${recipe.ingredients.slice(0, 3).join(', ')}...</p>
                <div class="recipe-actions">
                    <button class="btn btn-primary view-recipe" data-id="${recipe.id}">View Recipe</button>
                    <button class="btn btn-secondary save-recipe" data-id="${recipe.id}">
                        <i class="far fa-bookmark"></i> Save
                    </button>
                </div>
            </div>
        `;
        recipeGrid.appendChild(recipeCard);
    });
    
    // Add event listeners to view recipe buttons
    document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = parseInt(this.getAttribute('data-id'));
            showRecipeDetails(recipeId);
        });
    });
    
    // Add event listeners to save recipe buttons
    document.querySelectorAll('.save-recipe').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = parseInt(this.getAttribute('data-id'));
            saveRecipe(recipeId);
        });
    });
}

// Show recipe details in modal
function showRecipeDetails(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    modalBody.innerHTML = `
        <div class="recipe-detail-header">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-detail-image">
            <div class="recipe-detail-info">
                <h2>${recipe.name}</h2>
                <div class="recipe-detail-meta">
                    <span><i class="far fa-clock"></i> ${recipe.prepTime} minutes</span>
                    <span class="recipe-category">${recipe.category}</span>
                </div>
                <button class="btn btn-primary save-recipe" data-id="${recipe.id}">
                    <i class="far fa-bookmark"></i> Save Recipe
                </button>
            </div>
        </div>
        <div class="recipe-detail-section">
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        <div class="recipe-detail-section">
            <h3>Instructions</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
    `;
    
    // Add event listener to save button in modal
    const saveButton = modalBody.querySelector('.save-recipe');
    saveButton.addEventListener('click', function() {
        saveRecipe(recipeId);
    });
    
    recipeModal.style.display = 'block';
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;
    
    let filteredRecipes = recipes;
    
    // Filter by search term
    if (searchTerm) {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
        );
    }
    
    // Filter by category
    if (category !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === category);
    }
    
    displayRecipes(filteredRecipes);
}

// Handle category filter
function handleFilter() {
    handleSearch();
}

// Save recipe to localStorage
function saveRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    
    // Check if recipe is already saved
    if (!savedRecipes.some(r => r.id === recipeId)) {
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        
        // Show success message
        alert(`${recipe.name} has been saved to your favorites!`);
    } else {
        alert(`${recipe.name} is already in your favorites!`);
    }
}

// Handle adding a new recipe
function handleAddRecipe(event) {
    event.preventDefault();
    
    const name = document.getElementById('recipe-name').value;
    const category = document.getElementById('recipe-category').value;
    const image = document.getElementById('recipe-image').value || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80';
    const prepTime = parseInt(document.getElementById('recipe-time').value);
    const ingredients = document.getElementById('recipe-ingredients').value.split('\n').filter(line => line.trim() !== '');
    const instructions = document.getElementById('recipe-instructions').value.split('\n').filter(line => line.trim() !== '');
    
    // Create new recipe object
    const newRecipe = {
        id: recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1,
        name,
        category,
        image,
        prepTime,
        ingredients,
        instructions
    };
    
    // Add to recipes array
    recipes.push(newRecipe);
    
    // Update display
    displayRecipes(recipes);
    
    // Reset form and close modal
    recipeForm.reset();
    addRecipeModal.style.display = 'none';
    
    // Show success message
    alert(`${name} has been added to your recipe book!`);
}

