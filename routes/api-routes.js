var db = require("../models");
module.exports=function(app){
    app.get("/", function(req, res) {
        db.Categories.findAll({

        }).then(function(categoryData){
            var categoryObject={
                categoryList:categoryData
            };
            //console.log(categoryObject);
            res.render("index", categoryObject);
       });
        
    });
    app.get("/api/listAllActivities", function(req, res) {
        db.Posts.findAll({
            include: [{
            model:db.Categories,
            where: 
            { 
              id: db.Sequelize.col('Posts.fk_categoryid') 
             },
           attributes: ["categoryName"]  
           }]

        }).then(function(activityData){
            var activityObject={
                activities:activityData
            };
            console.log(activityObject);
            res.render("index", activityObject);
       });
        
    });
    app.get("/login", function(req, res) {
        res.render("login",{});
       
        
    });

    app.get("/register", function(req, res) {
        res.render("register",{});
       
        
    });
    app.get("/postevent", function(req, res) {
        res.render("postevent",{});
       
        
    });
}