var db = require("../models");
module.exports=function(app){
    app.get("/", function(req, res) {
        db.Categories.findAll({

        }).then(function(categoryData){
            var categoryObject={
                categoryList:categoryData
            };
            console.log(categoryObject);
            res.render("index", categoryObject);
       });
        
    });
}