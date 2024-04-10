var express = require("express");

var router = express.Router();

router.get("/", function(req,res) {
    console.log("Hello i am on the start page");
    res.render("index");
});

router.get("/home", function(req,res) {
    console.log("Hello i am on the home page");
    res.render("home");
});

module.exports = router;