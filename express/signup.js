const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

const authRouter = express.Router();
app.use("/auth", authRouter);

authRouter
.route("/signup")
.get(getSignUp)
.post(postSignUp)

function getSignUp(req, res){
    res.sendFile("./public/index.html", {root: __dirname})
    // res.sendFile(path.join(__dirname, './public/index.html')) both are working
}

function postSignUp(req, res){
    let obj = req.body;
    res.json({
        msg: "user signed up",
        data: obj
    })
}

app.listen(3000);