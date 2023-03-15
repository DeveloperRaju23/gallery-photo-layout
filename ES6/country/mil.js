const loadMeals = (searchText) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch (URL)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}


const displayMeals = meals =>{
 
    // STEP - 01 
    const mealsContainer =  document.getElementById('meals-container')
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal)
         // STEP - 02
        const mealDiv = document.createElement('div');
         // STEP - 03
        mealDiv.classList.add('col');
           // STEP - 04
           mealDiv.innerHTML =`
           <div class="card h-100 w-75 p-3 text-center">
           <img src="${meal.strMealThumb}" class="card-img-top mx-auto img-fluid w-75 h-50" alt="...">
           <div class="card-body">
             <h5 class="card-title">Name :${meal.strMeal}</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             <button onclick="mealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsData">
              Details
            </button>
           </div>
         </div>
           `;
           mealsContainer.appendChild(mealDiv)
    });
}

const mealDetails = idMeal => {
  const url =  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch (url)
  .then(res => res.json())
  .then(data => mealDetailsModal(data.meals[0]))

}

const mealDetailsModal = meal => {
  document.getElementById('mealsDataLabel').innerText = meal.strMeal;
  const mealDetailsBody = document.getElementById('mealDetailsBody')
  mealDetailsBody.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top mx-auto d-flex  img-fluid w-75 h-50" alt="...">
  <p class = 'fs-5 my-4 text-center'>StrCategory:  ${meal.strCategory}</P>
  `;

}

const searchMeals = () => {
   const searchText = document.getElementById('search-field').value;
   console.log(searchText)
   loadMeals(searchText)
}

loadMeals('rice')