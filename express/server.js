const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

// Send File
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '../view/about.html'));
})

// Redirect Route
app.get("/about-me", (req, res) => {
    res.redirect('/about');
})

// 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../view/404.html'));
})

app.listen(3000);