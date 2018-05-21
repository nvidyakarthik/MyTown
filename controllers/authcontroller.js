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
exports.newacc = function(req, res) {
    console.log(req.body);
 
    res.render('index');
 
}
exports.admin=function (req, res) {
    db.Posts.findAll({
        where: {
            approved: 0
        }
    }).then(function (approvalListData) {
        console.log("length approval list data"+approvalListData.length);
        
        var approveListObject = {
            approvalList: approvalListData
        };
        console.log(approveListObject);
        res.render("admin", approveListObject);
    });
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
        console.log("you are logged out");
        res.redirect('/');
 
    });
 
}