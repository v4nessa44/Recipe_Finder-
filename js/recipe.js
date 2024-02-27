let inputForm = document.querySelector("form");
let input = document.querySelector("input");
let mealContainer = document.querySelector(".meal-container");


let API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


const makeList = (meal)=>{
//Make list of ingredients 
let listOfIngredients = [];
for(let i = 1; i<= 20; i++){
    let strI = "strIngredient" + i;
    let strM = "strMeasure" + i;
    
    let ingredient = meal[strI] + " " + meal[strM];
    if(ingredient.trim() !="") listOfIngredients.push(ingredient)
}

return listOfIngredients;
};

const makeUI = (meal, list) => {
     //Make the HTML for that list
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
             ${list.map((element)=> `<li>${element}</li>`).join("")}
         </ul>
     </div>

     <div class="instructions">
         <h3>Instructions</h3>
         <p>
             ${meal.strInstructions}
     </div>
     
 </div>
</div>
 `;

 return html;
}


const fetchRecipe = async(e)=>{
    e.preventDefault();


    //Show search GIF 
    let searchGIFHTML = `
            <img src="../images/search.gif"/>
            <h1>Search For Your Recipe</h1>
    `

    mealContainer.innerHTML=searchGIFHTML;
    //call API
    let response = await fetch(API_URL + input.value);
    let data = await response.json();

    //Check data 
    if(data.meals){
        let meal = data.meals[0];

     //call function
     let list = makeList(meal);
     
     let html = makeUI(meal, list);
   

    //Show the list
    mealContainer.innerHTML =html;}
};

inputForm.addEventListener("submit", fetchRecipe);