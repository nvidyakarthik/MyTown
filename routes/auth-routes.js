var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport) {
 
    app.get('/newaccount', authController.signup);

    app.get('/login', authController.signin);

    app.post('/newaccount', passport.authenticate('local-signup', {
        successRedirect: '/',
 
        failureRedirect: '/newaccount'
    }
 
    ));

    app.get('/posts',isLoggedIn, authController.posts);


app.get('/logout',authController.logout);


app.post('/posts', passport.authenticate('local-signin',  { successRedirect: '/posts',
                                                    failureRedirect: '/login'}
                                                    ));


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
}


    
 
}