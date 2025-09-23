const serachInput = document.getElementById ('searchInput');
const searchBtn = document.getElementById ('searchBtn');
const clearBtn = document.getElementById ('clearBtn');
const results = document.getElementById ('results');
const sortBy = document.getElementById ('sortBy');
const prevBtn = document.getElementById ('prevBtn');
const nextBtn = document.getElementById ('nextBtn');
const pageInfo = document.getElementById ('pageInfo');

searchBtn.addEventListener ('click', handleSearch);
clearBtn.addEventListener ('click', handleClear);
serachInput.addEventListener ('input', handleInputSearch);
sortBy.addEventListener ('change', handleSorting);



let allMeals = [];
let currentPage = 1;
const mealsPerPage = 5;

async function fetchMeals (query) {
  try {
    const response = await fetch (
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json ();
    console.log (data);
    if (data.meals) {
      allMeals = data.meals;
      currentPage = 1;
      handleSorting ();
    }
  } catch (error) {
    console.log ('Error', error.message);
  }
}

async function handleSearch () {
  const query = serachInput.value.trim ();
  currentPage = 1;
  if (query) {
    await fetchMeals (query);
  }
}

async function handleInputSearch () {
  const query = serachInput.value.trim ();
  currentPage = 1;
  if (query.length > 2) {
    await fetchMeals (query);
  } else {
    results.innerHTML = '<p>Type at least 3 characters....</p>';
  }
}

function handleClear () {
  serachInput.value = '';
  allMeals = [];
}

function renderMeals (meals) {
  results.innerHTML = '';
  const totalPage = Math.ceil (meals.length / mealsPerPage);
  if (totalPage === 0) {
    results.innerHTML = '<p>No meals to show</p>';
    pageInfo.textContent = '';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPage) currentPage = totalPage;

  const startIndex = (currentPage - 1) * mealsPerPage;
  const endIndex = startIndex + mealsPerPage;

  const mealsToshow = meals.slice (startIndex, endIndex);

  mealsToshow.forEach (meal => {
    const div = document.createElement ('div');
    div.className = 'meal';
    div.style.cursor = 'pointer';

    div.innerHTML = `
    <h3>${meal.strMeal}</h3>
    <img src=${meal.strMealThumb} alt=${meal.strMeal}  width="200"/>
    <p><strong>Catgeory: </strong> ${meal.strCategory}</p>
    <p><strong>Area: </strong>${meal.strArea}</p>
    <p id="status"></p>
   `;
    div.addEventListener ('click', () => {
      let paraStatus = document.getElementById ('status');
      if (paraStatus) {
        paraStatus.innerText = 'Status : Order is being prepared.';
        setTimeout (() => {
          paraStatus.innerText = 'Status : Order is Dispatced.';
        }, 2000);
        setTimeout (() => {
          paraStatus.innerText = 'Status : Food Delivered , Enjoy your meal...';
        }, 5000);
      }
    });

    results.appendChild (div);
  });
  pageInfo.textContent = `page ${currentPage} of ${totalPage}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPage;
}

function handleSorting () {
  if (allMeals === 0) {
    results.innerHTML = '<p>No meals to show</p>';
    pageInfo.textContent = '';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const sortValue = sortBy.value;
  const sortedMeals = [...allMeals];

  sortedMeals.sort ((a, b) => {
    if (sortValue === 'name-asc') {
      return a.strMeal.localeCompare (b.strMeal);
    } else {
      return b.strMeal.localeCompare (a.strMeal);
    }
  });
  renderMeals (sortedMeals);
}

prevBtn.addEventListener ('click', () => {
  if (currentPage > 1) {
    currentPage--;
    handleSorting ();
  }
});

nextBtn.addEventListener ('click', () => {
  const totalPage = Math.ceil (allMeals.length / mealsPerPage);
  if (currentPage < totalPage) {
    currentPage++;
    handleSorting ();
  }
});


