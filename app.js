const express = require("express");
const cors = require("cors");


const app = express();

const port = 8080;
const db = require("./db");

app.use(express.json());
app.use(cors());

//get all movies
app.get("/movies", (req, res) => {
    const movies = db.getMovie();
    return res.send(movies);
});

//get one movie
app.get("/movies/:id", (req, res) => {
    const movieId = req.params.id;
    const movie = db.getOneMovie(movieId);
    if (!movie) {
        return res.status(404).send({
            message: `movie ${movieId} not found`,
        });
    }
    return res.send(movie);

    // console.log("params : ", req.params);
    // return res.send(db.movies);
});


app.get("/", (req, res) => {
    console.log();
    return res.send("hi Gayu");

});

//adding a movie
app.post("/movies", (req, res) => {
    const movie = db.addMovie(req.body);
    return res.send(movie);
});

//deleting a movie
app.delete("/movies/:id", (req, res) => {
    db.deleteMovie(req.params.id);
    return res.send({
        message: "Movie deleted",
    });
});

//updating a movie
app.put("/movies/:id", (req, res) => {
    const movie = db.updateMovie(req.params.id, req.body);
    return res.send(movie);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        console.log(`cannot running on ${port}`);
        process.exit(1);
    }

    console.log(`server running on ${port}`);
});