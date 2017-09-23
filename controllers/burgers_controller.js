//require express and setup router
var express = require("express");

var router = express.Router();

//import the model burger.js
var db = require("../models/");

//create routes

//the get route, to get all burgers from database
console.log(Object.keys(db));
router.get("/", function(req, res){
    db.burgers.findAll()
        .then(function(dbBurger) {
            console.log(dbBurger);
            
            var hbsObject = {
                burger: dbBurger
            };
            
            return res.render("index", hbsObject);
    });
});

//the post route for create burger
router.post("/createburgers", function(req, res){
    db.Burger.create({
        burger_name: req.body.burger_name
    })
    .then(function(dbBurger){
        console.log(dbBurger);
        res.redirect("/");
    });
});

//the put route for devour burgers
router.put("/devouredburger", function(req, res){
    db.Burger.update({
        devoured: true
    }, 
        {
            where: {id: req.body.burger_id}
        }
    ).then(function(dbBurger){
        res.redirect("/");
    });
});

module.exports = router;

//export routes for server.js
module.exports = router;