// Sample API data (trimmed for brevity)
const movies = [
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "year": 1994,
        "genre": [
            "Drama"
        ],
        "rating": 9.3,
        "director": "Frank Darabont",
        "actors": [
            "Tim Robbins",
            "Morgan Freeman"
        ],
        "plot": "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
        "poster": "https://fakeimg.pl/220x310/ff0000",
        "trailer": "https://example.com/shawshank_redemption_trailer.mp4",
        "runtime": 142,
        "awards": "Nominated for 7 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$28.3 million",
        "production": "Columbia Pictures",
        "website": "http://www.warnerbros.com/movies/shawshank-redemption"
    },
    {
        "id": 2,
        "title": "The Godfather",
        "year": 1972,
        "genre": [
            "Crime",
            "Drama"
        ],
        "rating": 9.2,
        "director": "Francis Ford Coppola",
        "actors": [
            "Marlon Brando",
            "Al Pacino",
            "James Caan"
        ],
        "plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "poster": "https://fakeimg.pl/220x310/ffff00",
        "trailer": "https://example.com/the_godfather_trailer.mp4",
        "runtime": 175,
        "awards": "Won 3 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$245.1 million",
        "production": "Paramount Pictures",
        "website": "https://www.paramountmovies.com/movies/the-godfather"
    },
    {
        "id": 3,
        "title": "The Dark Knight",
        "year": 2008,
        "genre": [
            "Action",
            "Crime",
            "Drama"
        ],
        "rating": 9,
        "director": "Christopher Nolan",
        "actors": [
            "Christian Bale",
            "Heath Ledger",
            "Gary Oldman"
        ],
        "plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "poster": "https://fakeimg.pl/220x310/ff00ff",
        "trailer": "https://example.com/the_dark_knight_trailer.mp4",
        "runtime": 152,
        "awards": "Won 2 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$1.005 billion",
        "production": "Warner Bros. Pictures",
        "website": "https://www.warnerbros.com/movies/dark-knight"
    },
    {
        "id": 4,
        "title": "Pulp Fiction",
        "year": 1994,
        "genre": [
            "Crime",
            "Drama"
        ],
        "rating": 8.9,
        "director": "Quentin Tarantino",
        "actors": [
            "John Travolta",
            "Uma Thurman",
            "Samuel L. Jackson"
        ],
        "plot": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "poster": "https://fakeimg.pl/220x310/0000ff",
        "trailer": "https://example.com/pulp_fiction_trailer.mp4",
        "runtime": 154,
        "awards": "Won 1 Oscar",
        "country": "USA",
        "language": "English",
        "boxOffice": "$213.9 million",
        "production": "Miramax Films",
        "website": "https://www.miramax.com/movie/pulp-fiction"
    },
    {
        "id": 5,
        "title": "Forrest Gump",
        "year": 1994,
        "genre": [
            "Drama",
            "Romance"
        ],
        "rating": 8.8,
        "director": "Robert Zemeckis",
        "actors": [
            "Tom Hanks",
            "Robin Wright",
            "Gary Sinise"
        ],
        "plot": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        "poster": "https://fakeimg.pl/220x310/ff00ff",
        "trailer": "https://example.com/forrest_gump_trailer.mp4",
        "runtime": 142,
        "awards": "Won 6 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$677.9 million",
        "production": "Paramount Pictures",
        "website": "https://www.paramountmovies.com/movies/forrest-gump"
    },
    {
        "id": 6,
        "title": "Inception",
        "year": 2010,
        "genre": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "rating": 8.8,
        "director": "Christopher Nolan",
        "actors": [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt",
            "Ellen Page"
        ],
        "plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "poster": "https://fakeimg.pl/220x310/f8f8f8",
        "trailer": "https://example.com/inception_trailer.mp4",
        "runtime": 148,
        "awards": "Won 4 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$829.9 million",
        "production": "Warner Bros. Pictures",
        "website": "https://www.warnerbros.com/movies/inception"
    },
    {
        "id": 7,
        "title": "The Matrix",
        "year": 1999,
        "genre": [
            "Action",
            "Sci-Fi"
        ],
        "rating": 8.7,
        "director": "Lana Wachowski, Lilly Wachowski",
        "actors": [
            "Keanu Reeves",
            "Laurence Fishburne",
            "Carrie-Anne Moss"
        ],
        "plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "poster": "https://fakeimg.pl/220x310/f6f6f6",
        "trailer": "https://example.com/the_matrix_trailer.mp4",
        "runtime": 136,
        "awards": "Won 4 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$463.5 million",
        "production": "Warner Bros. Pictures",
        "website": "https://www.warnerbros.com/movies/matrix"
    },
    {
        "id": 8,
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "genre": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "rating": 8.9,
        "director": "Peter Jackson",
        "actors": [
            "Elijah Wood",
            "Viggo Mortensen",
            "Ian McKellen"
        ],
        "plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "poster": "https://fakeimg.pl/220x310/ff00ff",
        "trailer": "https://example.com/lotr_return_of_the_king_trailer.mp4",
        "runtime": 201,
        "awards": "Won 11 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$1.142 billion",
        "production": "New Line Cinema",
        "website": "https://www.lordoftherings.net/film/the-return-of-the-king"
    },
    {
        "id": 9,
        "title": "The Dark Knight Rises",
        "year": 2012,
        "genre": [
            "Action",
            "Thriller"
        ],
        "rating": 8.4,
        "director": "Christopher Nolan",
        "actors": [
            "Christian Bale",
            "Tom Hardy"
        ],
        "plot": "Eight years after the Joker's reign of anarchy, Batman is forced out of retirement to save Gotham City from the brutal guerrilla terrorist Bane.",
        "poster": "https://fakeimg.pl/220x310/f6f6f6",
        "trailer": "https://example.com/the_dark_knight_rises_trailer.mp4",
        "runtime": 165,
        "awards": "Nominated for 2 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$1.081 billion",
        "production": "Warner Bros. Pictures",
        "website": "http://www.warnerbros.com/movies/the-dark-knight-rises"
    },
    {
        "id": 10,
        "title": "Interstellar",
        "year": 2014,
        "genre": [
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        "rating": 8.6,
        "director": "Christopher Nolan",
        "actors": [
            "Matthew McConaughey",
            "Anne Hathaway"
        ],
        "plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "poster": "https://fakeimg.pl/220x310/0000ff",
        "trailer": "https://example.com/interstellar_trailer.mp4",
        "runtime": 169,
        "awards": "Won 1 Oscar",
        "country": "USA",
        "language": "English",
        "boxOffice": "$677.5 million",
        "production": "Paramount Pictures",
        "website": "http://www.paramount.com/movies/interstellar"
    },
    {
        "id": 11,
        "title": "Fight Club",
        "year": 1999,
        "genre": [
            "Drama"
        ],
        "rating": 8.8,
        "director": "David Fincher",
        "actors": [
            "Brad Pitt",
            "Edward Norton",
            "Helena Bonham Carter"
        ],
        "plot": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        "poster": "https://fakeimg.pl/220x310/ff00ff",
        "trailer": "https://example.com/fight_club_trailer.mp4",
        "runtime": 139,
        "awards": "Nominated for 1 Oscar",
        "country": "USA",
        "language": "English",
        "boxOffice": "$100.9 million",
        "production": "20th Century Fox",
        "website": "https://www.foxmovies.com/movies/fight-club"
    },
    {
        "id": 12,
        "title": "Gladiator",
        "year": 2000,
        "genre": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "rating": 8.5,
        "director": "Ridley Scott",
        "actors": [
            "Russell Crowe",
            "Joaquin Phoenix",
            "Connie Nielsen"
        ],
        "plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "poster": "https://fakeimg.pl/220x310/f8f8f8",
        "trailer": "https://example.com/gladiator_trailer.mp4",
        "runtime": 155,
        "awards": "Won 5 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$460.5 million",
        "production": "DreamWorks Pictures",
        "website": "https://www.dreamworks.com/movies/gladiator"
    },
    {
        "id": 13,
        "title": "The Lord of the Rings: The Two Towers",
        "year": 2002,
        "genre": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "rating": 8.7,
        "director": "Peter Jackson",
        "actors": [
            "Elijah Wood",
            "Ian McKellen",
            "Viggo Mortensen"
        ],
        "plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "poster": "https://fakeimg.pl/220x310/f6f6f6",
        "trailer": "https://example.com/lotr_two_towers_trailer.mp4",
        "runtime": 179,
        "awards": "Won 2 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$951.2 million",
        "production": "New Line Cinema",
        "website": "https://www.lordoftherings.net/film/the-two-towers"
    },
    {
        "id": 14,
        "title": "The Silence of the Lambs",
        "year": 1991,
        "genre": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "rating": 8.6,
        "director": "Jonathan Demme",
        "actors": [
            "Jodie Foster",
            "Anthony Hopkins",
            "Lawrence A. Bonney"
        ],
        "plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "poster": "https://fakeimg.pl/220x310/0000ff",
        "trailer": "https://example.com/silence_of_the_lambs_trailer.mp4",
        "runtime": 118,
        "awards": "Won 5 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$272.7 million",
        "production": "Orion Pictures",
        "website": "https://www.mgm.com/movies/the-silence-of-the-lambs"
    },
    {
        "id": 15,
        "title": "The Departed",
        "year": 2006,
        "genre": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "rating": 8.5,
        "director": "Martin Scorsese",
        "actors": [
            "Leonardo DiCaprio",
            "Matt Damon",
            "Jack Nicholson"
        ],
        "plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "poster": "https://fakeimg.pl/220x310/00ff00",
        "trailer": "https://example.com/the_departed_trailer.mp4",
        "runtime": 151,
        "awards": "Won 4 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$289.8 million",
        "production": "Warner Bros. Pictures",
        "website": "https://www.warnerbros.com/movies/departed"
    },
    {
        "id": 16,
        "title": "Saving Private Ryan",
        "year": 1998,
        "genre": [
            "Drama",
            "War"
        ],
        "rating": 8.6,
        "director": "Steven Spielberg",
        "actors": [
            "Tom Hanks",
            "Matt Damon",
            "Tom Sizemore"
        ],
        "plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "poster": "https://fakeimg.pl/220x310/ff0000",
        "trailer": "https://example.com/saving_private_ryan_trailer.mp4",
        "runtime": 169,
        "awards": "Won 5 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$482.3 million",
        "production": "DreamWorks Pictures",
        "website": "https://www.dreamworks.com/movies/saving-private-ryan"
    },
    {
        "id": 17,
        "title": "The Prestige",
        "year": 2006,
        "genre": [
            "Drama",
            "Mystery",
            "Sci-Fi"
        ],
        "rating": 8.5,
        "director": "Christopher Nolan",
        "actors": [
            "Christian Bale",
            "Hugh Jackman",
            "Scarlett Johansson"
        ],
        "plot": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        "poster": "https://fakeimg.pl/220x310/0000ff",
        "trailer": "https://example.com/the_prestige_trailer.mp4",
        "runtime": 130,
        "awards": "Nominated for 2 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$109.7 million",
        "production": "Warner Bros. Pictures",
        "website": "https://www.warnerbros.com/movies/prestige"
    },
    {
        "id": 18,
        "title": "Glory",
        "year": 1989,
        "genre": [
            "Drama",
            "History",
            "War"
        ],
        "rating": 7.8,
        "director": "Edward Zwick",
        "actors": [
            "Matthew Broderick",
            "Denzel Washington",
            "Cary Elwes"
        ],
        "plot": "Robert Gould Shaw leads the U.S. Civil War's first all-black volunteer company, fighting prejudices from both his own Union Army and the Confederates.",
        "poster": "https://fakeimg.pl/220x310/00ff00",
        "trailer": "https://example.com/glory_trailer.mp4",
        "runtime": 122,
        "awards": "Won 3 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$26.8 million",
        "production": "TriStar Pictures",
        "website": "https://www.sonypictures.com/movies/glory"
    },
    {
        "id": 19,
        "title": "The Avengers",
        "year": 2012,
        "genre": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "rating": 8,
        "director": "Joss Whedon",
        "actors": [
            "Robert Downey Jr.",
            "Chris Evans",
            "Mark Ruffalo"
        ],
        "plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        "poster": "https://fakeimg.pl/220x310/ff0000",
        "trailer": "https://example.com/the_avengers_trailer.mp4",
        "runtime": 143,
        "awards": "Nominated for 1 Oscar",
        "country": "USA",
        "language": "English",
        "boxOffice": "$1.518 billion",
        "production": "Marvel Studios",
        "website": "https://www.marvel.com/movies/the-avengers"
    },
    {
        "id": 20,
        "title": "The Lion King",
        "year": 1994,
        "genre": [
            "Animation",
            "Adventure",
            "Drama"
        ],
        "rating": 8.5,
        "director": "Roger Allers, Rob Minkoff",
        "actors": [
            "Matthew Broderick",
            "Jeremy Irons",
            "James Earl Jones"
        ],
        "plot": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "poster": "https://fakeimg.pl/220x310/0000ff",
        "trailer": "https://example.com/the_lion_king_trailer.mp4",
        "runtime": 88,
        "awards": "Won 2 Oscars",
        "country": "USA",
        "language": "English",
        "boxOffice": "$968.5 million",
        "production": "Walt Disney Pictures",
        "website": "https://movies.disney.com/the-lion-king"
    }
]

let currentPage = 1;
const recordsPerPage = 5;

// Initialize genre, director, and country filters and display initial movies
window.onload = function () {
    populateDropdowns();
    displayMovies(movies, currentPage);
};

// Display movies with pagination
function displayMovies(movieList, page) {
    const movieCards = document.getElementById("movieCards");
    movieCards.innerHTML = "";

    const start = (page - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    const paginatedMovies = movieList.slice(start, end);

    paginatedMovies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
            <div class="card h-100">
                <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.plot.substring(0, 100)}...</p>
                    <button class="btn btn-primary" onclick="openModal(${movie.id})">More Info</button>
                </div>
            </div>
        `;
        movieCards.appendChild(card);
    });

    // Update pagination
    document.getElementById('prevPage').style.display = currentPage === 1 ? 'none' : 'inline-block';
    document.getElementById('nextPage').style.display = movieList.length <= end ? 'none' : 'inline-block';
}

// Function to populate dropdown filters
function populateDropdowns() {
    const genreFilter = document.getElementById("genreFilter");
    const directorFilter = document.getElementById("directorFilter");
    const countryFilter = document.getElementById("countryFilter");

    let genres = new Set();
    let directors = new Set();
    let countries = new Set();

    movies.forEach(movie => {
        movie.genre.forEach(genre => genres.add(genre));
        directors.add(movie.director);
        countries.add(movie.country);
    });

    genres.forEach(genre => addOptionToSelect(genreFilter, genre));
    directors.forEach(director => addOptionToSelect(directorFilter, director));
    countries.forEach(country => addOptionToSelect(countryFilter, country));
}

// Helper function to add options to dropdowns
function addOptionToSelect(selectElement, value) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
}

// Filter movies based on search, genre, director, country, and sort options
document.getElementById("searchInput").addEventListener("input", filterMovies);
document.getElementById("genreFilter").addEventListener("change", filterMovies);
document.getElementById("directorFilter").addEventListener("change", filterMovies);
document.getElementById("countryFilter").addEventListener("change", filterMovies);
document.getElementById("sortOption").addEventListener("change", filterMovies);

function filterMovies() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const genreFilter = document.getElementById("genreFilter").value;
    const directorFilter = document.getElementById("directorFilter").value;
    const countryFilter = document.getElementById("countryFilter").value;
    const sortOption = document.getElementById("sortOption").value;

    let filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchInput) ||
                              movie.actors.some(actor => actor.toLowerCase().includes(searchInput));
        const matchesGenre = genreFilter === "" || movie.genre.includes(genreFilter);
        const matchesDirector = directorFilter === "" || movie.director === directorFilter;
        const matchesCountry = countryFilter === "" || movie.country === countryFilter;
        return matchesSearch && matchesGenre && matchesDirector && matchesCountry;
    });

    if (sortOption === "rating") {
        filteredMovies.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "year") {
        filteredMovies.sort((a, b) => b.year - a.year);
    }

    currentPage = 1;
    displayMovies(filteredMovies, currentPage);
}

// Pagination event listeners
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        filterMovies();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    filterMovies();
});

// Open modal to show detailed movie info
function openModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h5>${movie.title}</h5>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Actors:</strong> ${movie.actors.join(', ')}</p>
        <p><strong>Country:</strong> ${movie.country}</p>
        <p><strong>Runtime:</strong> ${movie.runtime} mins</p>
        <p><strong>Box Office:</strong> ${movie.boxOffice}</p>
        <p><strong>Awards:</strong> ${movie.awards}</p>
        <p><strong>Plot:</strong> ${movie.plot}</p>
        <a href="${movie.website}" target="_blank">Visit Official Website</a>
    `;
    $('#movieModal').modal('show');
}
