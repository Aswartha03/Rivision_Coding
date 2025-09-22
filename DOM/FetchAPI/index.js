let searchedMeal = document.getElementById ('mealInput');
let searchBtn = document.getElementById ('searchBtn');

let sortBy = document.getElementById ('sortBy');
let mealsContainer = document.getElementById ('mealsContainer');

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  handleFetch();
  searchedMeal.value = ""
});

sortBy.addEventListener("click",handleSort)
let allMeals = [];
async function fetchMeals(query) {
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = await response.json();
    if (!data.meals) {
      mealsContainer.innerHTML = `<p>No meals found for "${query}"</p>`;
      allMeals = [];
      return;
    }
    allMeals = data.meals;
    displayMeals();
  } catch (error) {
    console.log(`Error while fetching Meals: ${error.message}`);
    mealsContainer.innerHTML = `<p style="color:red;">Error fetching meals. Please try again.</p>`;
  }
}


function handleFetch () {
  let query = searchedMeal.value.trim ();
  if(query){
    fetchMeals(query)
    searchedMeal.innerText = ""
  }
  
}
function displayMeals () {
  mealsContainer.innerHTML = '';
//   console.log(allMeals)
  allMeals.map ((todo, idx) => {
    let div = document.createElement ('div');
    div.id = "dish"
    div.innerHTML = `
        <p>Name : ${todo.strMeal}</p>
        <p>Category : ${todo.strCategory}</p>
         <img id="image" style="width:100px" src=${todo.strMealThumb} alt=${todo.strMeal}>
         <p> Area : ${todo.strArea}</p>
        `;
    mealsContainer.append (div);
  });
}

function handleSort(){
    let sortByValue = sortBy.value
    if(sortByValue=="asending"){
        allMeals.sort((a,b)=>a.strMeal.localeCompare(b.strMeal))
        displayMeals()
    }else if(sortByValue=="desending"){
          allMeals.sort((a,b)=>b.strMeal.localeCompare(a.strMeal))
          displayMeals()
    }
}

