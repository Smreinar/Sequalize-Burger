var express = require('express');
var db = require('../models');
var router = express.Router();

var sequelizeConnect = db.sequelize;

sequelizeConnect.sync();

router.get("/", function(req, res) {
    res.redirect("/burger");
    
    
});

//Get
router.get("/burger", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
        var hbsObject = { burgers: data}

        console.log(data)
        res.render("index", hbsObject);
    })
});

//Create
router.post("/burger/create", function(req, res) {
    
db.Burger.create({
    burger_name: req.body.burger_name
    
}).then( function(result) {
        res.json(result);
    });
});

//update
router.post("/burger/eat/:id", function(req, res){
    db.Burger.update(
        { devoured: true },{ where: { id:req.params.id }})
        .then( function(){
        res.redirect("/burger")
    })
})

//delete 
router.delete("/burger/trash/:id", function(req, res){
    
})

module.exports = router;