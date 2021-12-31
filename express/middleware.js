// Middleware are functions that can perform work in between req-res lifecycle
// In express every function is middleware
// Types of middleware:
// 1. Global middleware:- Irrespective of route or http method this will always run. e.g: app.use()
// 2. Specific route middleware:- Run on specific route. e.g: app.get(), post, patch, delete

const express = require("express");
const app = express();

const router = express.Router();
app.use("/", router);

router
.route("/")
.get(middleware1, middleware2, done);

function middleware1(req, res, next){  // next will call another function i.e. m2
    console.log("m1");
    next();
}

function middleware2(req, res, next){  // next will call another function i.e. done
    console.log("m2");
    next();
}

function done(req, res){
    res.send("Done..");
}

app.listen(3000);