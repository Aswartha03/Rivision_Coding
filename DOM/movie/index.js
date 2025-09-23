let API_KEY = '';

let loadingEl = document.getElementById('loading');
let moviesEl = document.getElementById('movies');
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => fetchMovies('Avengers'), 5000);
});
searchBtn.addEventListener('click', () => {
    let query = searchInput.value.trim();
    if (query) {
        fetchMovies(query);
    }
});

async function fetchMovies(query) {
    loadingEl.style.display = 'flex';
    moviesEl.innerHTML = '';
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
        const data = await response.json();
        
        if (data.Search) {
            renderMovies(data.Search);
        } else {
            moviesEl.innerHTML = `<p>No movies found for "${query}".</p>`;
        }
    } catch (error) {
        moviesEl.innerHTML = `<p>Error fetching movies. Please try again later.</p>`;
        console.error(error);
    } finally {
        loadingEl.style.display = 'none';
    }
}

function renderMovies(movies) {
    moviesEl.innerHTML = ''; 
    movies.forEach(movie => {
        let card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src=${movie.Poster} alt="${movie.Title}">
            <div class="info">
                <h2>${movie.Title}</h2>
                <p><strong>Year:</strong> ${movie.Year}</p>
                <p><strong>Type:</strong> ${movie.Type}</p>
            </div>
        `;
        moviesEl.appendChild(card);
    });
}
