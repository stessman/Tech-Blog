const router = require('express').Router();
const { Comment } = require('../../models');

//Create Comment
router.post('/create', async (req, res) => {
    console.log(req.session.user_id);
    try {
      const dbUserData = await Comment.create({
        comment_contents: req.body.comment_contents,
        date_created: req.body.date_created,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      });
  
      req.session.save(() => {
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;