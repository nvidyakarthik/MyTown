var db = require("../models");
var exports = module.exports = {}; 
exports.signup = function(req, res) { 

    res.render('newaccount'); 
}
exports.signin = function(req, res) {
 
    res.render('login');
 
}

exports.dashboard = function(req, res) {
 
    res.render('index');
 
}

exports.posts = function(req, res) {
    db.Categories.findAll({

    }).then(function (categoryData) {
        var categoryObject = {
            categoryList: categoryData
        };
        //console.log(categoryObject);
        res.render("createpost", categoryObject);
    });
   
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}