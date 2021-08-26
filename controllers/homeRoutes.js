const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Post, User} = require('../models');


router.get('/', async (req, res) => {
  try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes:['user_name'],
          },
        ],
      });

      const posts = postData.map((post) => post.get({plain:true}));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/loginpage', async (req, res) => {
  try {
    res.render('loginpage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/signuppage', async (req, res) => {
  try {
    res.render('signuppage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboardpage', async (req, res) => {
  try {
    res.render('dashboardpage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;