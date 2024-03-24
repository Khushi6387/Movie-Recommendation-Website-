document.addEventListener('DOMContentLoaded', function () {
    const moviesContainer = document.getElementById('movies-container');

    // Sample movie data
    const movies = [
        { title: 'Gadar 2', description: 'A action and romantic movie the lover get back her wife from pakistan to India.', rating: 4.5, image: 'gadar.jpeg' },
        { title: 'Ra One', description: 'A Virtual Game Fight between Right and Wrong when comes in Real World.', rating: 4.8, image: 'ra one.jpeg' },
        { title: 'Titanic', description: 'A very Romantic Movie in the Titanic.', rating: 4.1, image: 'titanic.png' },
                // Add more movie data as needed
    ];

    // Display movies
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const image = document.createElement('img');
        image.classList.add('movie-image');
        image.src = movie.image;
        image.alt = movie.title;

        const title = document.createElement('div');
        title.classList.add('movie-title');
        title.textContent = movie.title;

        const description = document.createElement('div');
        description.classList.add('movie-description');
        description.textContent = movie.description;

        const rating = document.createElement('div');
        rating.classList.add('movie-rating');
        rating.innerHTML = `Rating: ${movie.rating} <i class="fas fa-star"></i>`;

        movieCard.appendChild(image);
        movieCard.appendChild(title);
        movieCard.appendChild(description);
        movieCard.appendChild(rating);
        moviesContainer.appendChild(movieCard);
    });
});

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const moviesContainer = document.getElementById('movies-container');
    const movieCards = moviesContainer.getElementsByClassName('movie-card');

    for (const card of movieCards) {
        const title = card.getElementsByClassName('movie-title')[0].textContent.toLowerCase();
        const description = card.getElementsByClassName('movie-description')[0].textContent.toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
