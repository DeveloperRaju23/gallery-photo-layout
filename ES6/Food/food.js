// Part - 03 SEARCH MOBILE PHONE

document.getElementById("search-btn").addEventListener("click", function () {
  const inputValueField = document.getElementById("input-search-field");
  const searchText = inputValueField.value;

  loadFood(searchText);
});

// Part - 01
const loadFood = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`;
  const foodContainer = document.getElementById("food-container");
  foodContainer.textContent = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if(data.meals ===null){
        const h1 = document.createElement("h1");
        h1.innerText = `Not found
        `;
        foodContainer.appendChild(h1)
      }
      else{
        showFoodData(data.meals);
      }
    });

};

// Part - 02
const showFoodData = (foods) => {
  const foodContainer = document.getElementById("food-container");
  foodContainer.textContent = "";
  for (const food of foods) {
    console.log(food);
    const foodDiv = document.createElement("div");
    foodDiv.classList.add("col");
    foodDiv.innerHTML = `   
     
    <div class="col">
    <div class="card h-100 p-4">
      <img src="${food.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${food.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    `

    foodContainer.appendChild(foodDiv)
  }
};

//   // loadFood()

// POPUP LOGIN SECTION
document.getElementById('menu-login').addEventListener('click', function(){
    document.getElementById('popap-on').style.display = 'flex'
})
document.getElementById('close').addEventListener('click', function(){
  document.getElementById('popap-on').style.display = 'none'
})

// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

// https://openapi.programming-hero.com/api/phones?search=

// https://www.themealdb.com/api/json/v1/1/filter.php?i=rice

// document.getElementById('search-btn').addEventListener('click', function(){
//     const inputField = document.getElementById('input-search-field')
//     const inputFieldValue = inputField.value;
//     console.log(inputFieldValue)
// })

// document.getElementById('input-search-field').addEventListener('keypress', function(e){
//     if(e.key === 'Enter'){

//     }
// })
