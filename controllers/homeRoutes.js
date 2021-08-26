const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Post, User, Comment} = require('../models');


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

router.get('/dashboardpage', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
    where:{
      user_id:req.session.user_id,
    },
    });

    const posts = postData.map((post) => post.get({plain:true}));
    res.render('dashboardpage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req,res)=> {
  try{
    const postData = await Post.findByPk(req.params.id, {
      include:[
        {
          model: User,
          attributes:['user_name'],
        },
      ],
    });
    const commentData = await Comment.findAll({
      where:{
        post_id: req.params.id,
      },
      include:[
        {
          model: User,
          attributes:['user_name'],
        },
      ],
    });
    const post = postData.get({plain:true});
    const comments = commentData.map((comment) => comment.get({plain:true}));
    res.render('viewpostpage', {
      ...post,comments,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;