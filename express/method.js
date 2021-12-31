// Http methods
const express = require("express");
const app = express();

app.use(express.json());

let user = [
    {name: "tirth", id: 1},
    {name: "krishna", id: 2}
];

// let user = {}

// Browser want user through server
app.get("/user", (req, res) => {
    //console.log(req.query); // It can be used for filtering purpose by '?'  localhost:3000/user?id=3&name=tirth
    res.send(user);
})

// Browser want to store user in server
app.post("/user", (req, res) => {
    user = req.body;
    res.json({
        msg: "data recieved successfully",
        user: req.body
    })
})

// Browser want to update user in server
app.patch("/user", (req, res) => {
    let dataToBeUpdated = req.body;
    for(let key in dataToBeUpdated){
        user[key] = dataToBeUpdated[key];
    }

    res.json({
        msg: "data updated successfully"
    })
})

// Browser want to delete user in server
app.delete("/user", (req, res) => {
    user = {};
    res.json({
        msg: "data deleted successfully"
    })
})

// : is used while routing and by taking that id, we can search in db and can display user 
// in social media we don't make route for all users, we do with params and by id we display its profile
app.get("/user/:id", (req, res) => {
    console.log(req.params);
    res.send("user id received");
})

app.listen(3000);