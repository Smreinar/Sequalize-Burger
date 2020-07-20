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
router.put("/burger/eat/:id", function(req, res){
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