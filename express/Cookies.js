const express = require("express");
const app = express();
app.use(express.json());  // It used to parse json that is coming inside req.body

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const userRouter = express.Router();
app.use("/user", userRouter);

userRouter
.route("/getCookies")
.get(getCookies)

userRouter
.route("/setCookies")
.get(setCookies)

function setCookies(req, res){
    // res.setHeader("Set-Cookie", 'isInit=true');  Manually
     res.cookie("isPrimeMember", true); // you can access cookie via front-end (document.cookie)

    // key, value, {options} -> ExpiryTime: 1day, secure: If served only https,  httpOnly: you can't access cookie from front-end         ms->sec*min*hour*day -> 1day expiry time
    res.cookie('isLoggedIn', true, {maxAge: 1000*60*60*24, secure: false, httpOnly: true})   
    res.send("cookies has been sent");
}   

function getCookies(req, res){
    let cookies = req.cookies;
    console.log(cookies);
    res.send("cookies recieved");
}