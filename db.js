const movies = [
    {
        id: 1643705704798,
        name: "The Grudge",
    },

    {
        id: 1643705704799,
        name: "The Dark Knight",
    },

    {
        id: 1643705704800,
        name: "Ironman",
    }
];

const addMovie = (payload) => {
    const movie = {
        id: new Date().getTime(),
        name: payload.name,
    };
    movies.push(movie);
    return movie;
};

const getMovie = () => movies;

const getOneMovie = (movieId) => {
    const movie = movies.find((m) => m.id == movieId);
    return movie;
};

const deleteMovie = (movieId) => {
    const index = movies.findIndex((m) => m.id == movieId);
    if (index != -1) {
        movies.splice(index, 1);
    }
    return;
};

const updateMovie = (movieId, payload) => {
    const index = movies.findIndex((m) => m.id == movieId);
    if (index != -1) {
        movies[index]["name"] = payload.name;
    }
    return movies[index];
}


module.exports = {
    movies,
    addMovie,
    getMovie,
    getOneMovie,
    deleteMovie,
    updateMovie,
};
