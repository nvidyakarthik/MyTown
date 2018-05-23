var db = require("../models");
module.exports = function (app) {
    app.get("/", function (req, res) {
        var activityObject={};
        db.Posts.findAll({
            where: {
              approved: 1
            }
        }).then(function (activityData) {
            activityObject.activities=activityData;
            
            db.Categories.findAll({

            }).then(function (categoryData) {
                activityObject.categoryList=categoryData;
        
                // res.json(activityObject);
                //console.log(categoryObject);
                res.render("index",activityObject);
            });
        }).catch(function(error){
            console.log(error);
        });
    });          
      
    app.get("/api/categories", function (req, res) {
        db.Categories.findAll({

        }).then(function (categoryData) {
            var categoryObject = {
                categoryList: categoryData
            };
            res.json(categoryObject);
            //console.log(categoryObject);
            //res.render("index",categoryObject);
        });

    });
        app.get("/api/allPosts", function (req, res) {
        db.Posts.findAll({
            where: {
              approved: 1
            }
        }).then(function (activityData) {
            var activityObject = {
                activities: activityData
            };
            res.json(activityData);
           //res.render("index", activityObject);
        });

    });

//This route is used for filtering the post.
    app.get("/api/posts/:id", function (req, res) {
        var activityObject={};
        console.log(req.params.id);
        db.Posts.findAll({
            where: {
                CategoryId: req.params.id,
                approved:1
            }
        }).then(function (activityData) {
            activityObject.activities=activityData
            db.Categories.findAll({

            }).then(function (categoryData) {
                activityObject.categoryList=categoryData;               
                //res.json(activityObject);
                //console.log(categoryObject);
               res.render("index",activityObject);
            });
        });
    });          
 
//This route is used to create new posts by the authorized user
    app.post("/api/posts", function (req, res) {
        db.Posts.create(req.body).then(function (postCreated) {
            req.flash('success_msg','Your place has been submitted and will be posted pending review.');        
            res.json('OK')
        });
    });

   /*  app.post("/api/users", function (req, res) {
        db.Users.create(req.body).then(function (userCreated) {
            res.json('OK');
        });
    }); */

    app.put("/api/posts", function (req, res) {
        db.Posts.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });
    //This route is used for search posts by city
    app.get("/api/posts/city/:city", function (req, res) {
        console.log(req.params.city);
        var activityObject={};
        db.Posts.findAll({
            where: {
                city: req.params.city,
                approved:1
            }
        }).then(function (activityData) {
            activityObject.activities=activityData
            db.Categories.findAll({

            }).then(function (categoryData) {
                activityObject.categoryList=categoryData;               
               res.render("index",activityObject);
            });
        });
    });          
    
     //This route is used by admin to approve posts
     app.get("/api/admin/approve/:id", function (req, res) {
        console.log(req.params.id);
        db.Posts.update({
            approved:1
            
          }, {
            where: {
                id: req.params.id
            }
         
        }).then(function (results) {
            
           res.json(results);
        });
    });

    //This route is used by admin to approve posts
    app.get("/api/admin/delete/:id", function (req, res) {
        console.log(req.params.id);
        db.Posts.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (results) {
            
           res.json(results);
        });
    });   
};