var db = require("../models");
module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Categories.findAll({

        }).then(function (categoryData) {
            var categoryObject = {
                categoryList: categoryData
            };
            //console.log(categoryObject);
            res.render("index", categoryObject);
        });

    });
    app.get("/api/listAllActivities", function (req, res) {
        db.Posts.findAll({}).then(function (activityData) {
            var activityObject = {
                activities: activityData
            };
            console.log(activityObject);
            res.render("index", activityObject);
        });

    });
    app.get("/api/filterActivity/:categoryId", function (req, res) {
        db.Posts.findAll({
            where: {
                CategoryId: req.params.categoryId
            }
        }).then(function (activityData) {
            var activityObject = {
                activities: activityData
            };
            console.log(activityObject);
            res.render("index", activityObject);
        });

    });
    app.get("/login", function (req, res) {
        res.render("login", {});


    });

    app.get("/register", function (req, res) {
        res.render("register", {});


    });
    app.get("/postevent", function (req, res) {
        res.render("postevent");

    });
    app.post("/api/postevent", function (req, res) {

        db.Posts.create(req.body).then(function (postCreated) {

            res.json('OK');
        });
    });
    app.post("/api/registerUser", function (req, res) {

        db.Users.create(req.body).then(function (userCreated) {

            res.json('OK');
        });
    });
    app.get("/api/approveList", function (req, res) {

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

    app.put("/api/approved", function (req, res) {
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