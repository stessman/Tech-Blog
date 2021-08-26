const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/loginpage');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  