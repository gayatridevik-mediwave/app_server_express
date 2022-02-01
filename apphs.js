// const fs = require('fs');

// fs.readFile("content.txt", "utf8", (error, data) => {
//     if (error) {
//         console.log("error");
//         console.log(error);
//     } else {
//         console.log(data);
//     }

// });

const http = require('http');
const port = 8080;

function logger(req) {
    console.log(`${new Date().toISOString()}- ${req.url} : ${req.method}`);
}
function getEmpty(req, res) {
    const json = {
        message: " Hey Guys!",
    };
    return json;
}
function getMovies(req, res) {
    const json = {
        movies: "matrix",
    };
    return json;
}

function getSports(req, res) {
    const json = {
        Sports: "Hockey",
    };
    return json;
}

const server = http.createServer(function (req, res) {
    logger(req);
    //const html = "<h1>hello world</h1>";
    // const json = {
    //     message: "hello world!",
    // }
    res.setHeader("content-type", "application/json");
    let result = {};
    if (req.url == "/sports") {
        result = getSports();
        console.log("sports");
    } else if (req.url == "/movies") {
        result = getMovies();
        console.log("movies");
    } else if (req.url == "/") {
        result = getEmpty();
        console.log("empty");
    }


    // res.setHeader("content-type", "text/html");
    res.write(JSON.stringify(result));
    res.end();
});

console.log(`server running on ${port}`);
server.listen(port);