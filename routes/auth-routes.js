var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/newaccount', authController.signup);

    app.get('/login', authController.signin);

    app.post('/newaccount', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/newaccount'
         }

    ));

    app.get('/posts', isLoggedIn, authController.posts);


    app.get('/logout', authController.logout);


    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/login'
        }
    ));
//This route is used for the admin to approve posts
app.get("/admin", isLoggedIn, authController.admin);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        console.log("You are not logged In");
        res.redirect('/login');
    }

}