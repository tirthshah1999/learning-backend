const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log('request has been made from browser to server');
    res.setHeader("Content-type", "text/html");
    // res.write("<h1>Hellooo...</h1>");
    // res.end();
    let path = "./view";
    switch(req.url){
        case '/':
            path += "/index.html";
            res.statusCode = 200;
            break;
        case '/about':
            path += "/about.html";
            res.statusCode = 200;
            break;
        case '/about-me':
            res.setHeader("Location", '/about');  // redirect to /about
            res.statusCode = 301;    // permanently moved to another route and 300 for temporary move
            res.end();
            break;
        default:
            path += "/404.html";
            res.statusCode = 404;
    }

    fs.readFile(path, (err, fileData) => {
        if(err)
            console.log(err);
        else{
            console.log(path)
            res.write(fileData);
            res.end();
        }
    })
});

// port, hostname(optional), callback fn
server.listen(3000, "localhost", () => {
    console.log("server is listening on port 3000");
})

