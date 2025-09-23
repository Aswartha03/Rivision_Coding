let searchedMeal = document.getElementById ('mealInput');
let searchBtn = document.getElementById ('searchBtn');

let sortBy = document.getElementById ('sortBy');
let mealsContainer = document.getElementById ('mealsContainer');
let prevBtn = document.getElementById("prevBtn")
let nextBtn = document.getElementById("nextBtn")

searchBtn.addEventListener ('click', event => {
  event.preventDefault ();
  handleFetch ();
});



sortBy.addEventListener ('click', handleSort);
let allMeals = [];

async function fetchMeals (query) {
  try {
    let response = await fetch (
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    let data = await response.json ();
    if (!data.meals) {
      mealsContainer.innerHTML = `<p>No meals found for "${query}"</p>`;
      allMeals = [];
      return;
    }
    allMeals = data.meals;
    displayMeals ();
  } catch (error) {
    console.log (`Error while fetching Meals: ${error.message}`);
    mealsContainer.innerHTML = `<p style="color:red">Error fetching meals. Please try again.</p>`;
  }
}

function handleFetch () {
  let query = searchedMeal.value.trim ();
  if (query) {
    fetchMeals (query);
  }
}
let currentPage = 1 
let mealsPerPage = 5 
let totalPages = Math.ceil(allMeals?.length / mealsPerPage)

function displayMeals () {
  mealsContainer.innerHTML = '';
  //   console.log(allMeals)
  let startIndex = (currentPage - 1) * mealsPerPage; 
  let endIndex = startIndex + mealsPerPage;
  let mealsToDisplay = allMeals.slice(startIndex, endIndex);
  mealsToDisplay.map ((todo, idx) => {
    let div = document.createElement ('div');
    div.id = 'dish';
    // div.addEventListener("click",handleClick)
    div.innerHTML = `
        <p>Name : ${todo.strMeal}</p>
        <p>Category : ${todo.strCategory}</p>
         <img id="image" style="width:100px" src=${todo.strMealThumb} alt=${todo.strMeal}>
         <p> Area : ${todo.strArea}</p>
        `;
    mealsContainer.append (div);
  });
}

function handleSort () {
  let sortByValue = sortBy.value;
  if (sortByValue == 'asending') {
    allMeals.sort ((a, b) => a.strMeal.localeCompare (b.strMeal));
    displayMeals ();
  } else if (sortByValue == 'desending') {
    allMeals.sort ((a, b) => b.strMeal.localeCompare (a.strMeal));
    displayMeals ();
  }
}
function handleClick () {
  setTimeout (() => {
    alert ('Order is being Prepared');
    console.log("Order is being Prepared");
  });
  setTimeout (() => {
    alert ('Order is Dispatched');
    console.log("Order is Dispatched");
  }, 3000);
  setTimeout (() => {
    alert ('Food Delivered , enjoy your meal...');
    console.log("Food Delivered , enjoy your meal...");
  },5000);
}


prevBtn.addEventListener("click",()=>{
  if(currentPage>1){
    currentPage--
    displayMeals()
  }
})

nextBtn.addEventListener("click",()=>{
  if(currentPage<totalPages){
    currentPage++ 
    displayMeals()
  }
})