var express = require("express");
var app = express();

const router = express.Router();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    friends = ["tony", "Steve", "bucky", "bruce", "clark", "barry"];
    res.render("friends", { friends: friends });
});

app.post("/addfriend", function (req, res) {
    res.send("You have reached the POST Route!!!")
});

app.listen(3000, function (req, res) {
    console.log("Server Started!!");
})

module.exports = router;