let inputForm = document.querySelector("form");
let input = document.querySelector("input");
let mealContainer = document.querySelector(".meal-container");


let API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const fetchRecipe = async(e)=>{
    e.preventDefault();
    
    console.log(input.value);

    let response = await fetch(API_URL + input.value);
    let data = await response.json();

    
    if(data.meals){
        let meal = data.meals[0];
        console.log(meal);
    

    let html = `
        <img src="${meal.strMealThumb}"/>
        <h1>${meal.strMeal}</h1>
        <div class="row">
            <p> <span>Category: </span> ${meal.strCategory}</p>
            <p> <span>Area: </span> ${meal.strArea}</p>
        </div>

        <div class="ingredients">
            <h3>Ingredients</h3>
            <ul>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
                <li>Ingredient 4</li>
                <li>Ingredient 5</li>
                <li>Ingredient 6</li>
                <li>Ingredient 7</li>
            </ul>
        </div>

        <div class="instructions">
            <h3>Instructions</h3>
            <p>
                ${meal.strInstructions}
        </div>
        
    </div>
</div>
    `

    mealContainer.innerHTML =html;}
};

inputForm.addEventListener("submit", fetchRecipe);