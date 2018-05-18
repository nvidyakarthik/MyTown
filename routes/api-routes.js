var db = require("../models");
module.exports = function (app) {
    app.get("/", function (req, res) {
       
            res.render("index");     

    });

    app.get("/user", function (req, res) {
        res.render("login");


    });
    app.get("/api/categories", function (req, res) {
        db.Categories.findAll({

        }).then(function (categoryData) {
            var categoryObject = {
                categoryList: categoryData
            };
            //console.log(categoryObject);
            res.render("index", categoryObject);
        });

    });
    
    app.get("/api/allPosts", function (req, res) {
        db.Posts.findAll({}).then(function (activityData) {
            var activityObject = {
                activities: activityData
            };
            console.log(activityObject);
            res.render("index", activityObject);
        });

    });

    app.get("/api/posts/:id", function (req, res) {
        db.Posts.findAll({
            where: {
                CategoryId: req.params.id
            }
        }).then(function (activityData) {
            var activityObject = {
                activities: activityData
            };
            console.log(activityObject);
            res.render("index", activityObject);
        });

    });
 
    app.get("/register", function (req, res) {
        res.render("register");
    });

    app.get("/posts", function (req, res) {
        res.render("postevent");
    });

    app.post("/api/posts", function (req, res) {
        db.Posts.create(req.body).then(function (postCreated) {
            res.json('OK');
        });
    });

    app.post("/api/users", function (req, res) {
        db.Users.create(req.body).then(function (userCreated) {
            res.json('OK');
        });
    });

    app.get("/api/posts", function (req, res) {
        db.Posts.findAll({
            where: {
                approved: 0
            }
        }).then(function (approvalListData) {
            var approveListObject = {
                approvalList: approvalListData
            };
            console.log(approveListObject);
            res.render("postApprove", approveListObject);
        });
    });

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
};