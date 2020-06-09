var express = require('express');
var db = require('../models');
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burger");
    
    
});

router.get("/burger", function(req, res) {
    db.Burger.findAll().then( function(data) {
        console.log(data)
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger/create", function(req, res) {
    console.log(req.body.burger)
db.Burger.create({
    burger_name: req.body.burger_name
    
}).then( function(result) {
        res.json(result);
    });
});

router.post("/burger/eat/:id", function(req, res){
    db.Burger.update(
        {where: 
            {id:req.params.id}
        },{
            devoured: true
        }).then( function(){
        res.redirect("/burger")
    })
})

module.exports = router;