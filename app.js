var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

friends = ["tony", "Steve", "bucky", "bruce", "clark", "barry"];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    res.render("friends", { friends: friends });
});

app.post("/addfriend", function (req, res) {
    // console.log(req.body.newfriend);
    var friend = req.body.newfriend;
    friends.push(friend);
    res.redirect("/friends");
    // res.send("You have reached the POST Route!!!")
});

app.listen(3000, function (req, res) {
    console.log("Server Started!!");
})