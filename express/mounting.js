// Instead of writing redundant code we can use mounting
const express = require("express");
const app = express();

app.use(express.json());

let user = [
    {name: "tirth", id: 1},
    {name: "krishna", id: 2}
];

const userRouter = express.Router();
app.use("/user", userRouter);

// If '/user/' which http method requested run that function
userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

// /user/:id
userRouter
.route("/:id")
.get(getUserById)

function getUser(req, res){
    res.send(user);
}

function getUserById(req, res){
    console.log(req.params);
    res.send("user id received");
}

function postUser(req, res){
    user = req.body;
    res.json({
        msg: "data recieved successfully",
        user: req.body
    })
}

function updateUser(req, res){
    let dataToBeUpdated = req.body;
    for(let key in dataToBeUpdated){
        user[key] = dataToBeUpdated[key];
    }

    res.json({
        msg: "data updated successfully"
    })
}

function deleteUser(req, res){
    user = {};
    res.json({
        msg: "data deleted successfully"
    })
}

app.listen(3000);