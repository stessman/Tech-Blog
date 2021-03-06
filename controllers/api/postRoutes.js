const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Post } = require("../../models");

// Deletes a post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Updates a post
router.put("/update/:id", withAuth, async (req, res) => {
  console.log(req.body.post_title, req.body.post_contents, req.params.id);
  try {
    const postData = await Post.update(
      {
        post_title: req.body.post_title,
        post_contents: req.body.post_contents,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Create Post
router.post("/create", withAuth, async (req, res) => {
  try {
    const dbUserData = await Post.create({
      post_title: req.body.post_title,
      post_contents: req.body.post_contents,
      date_created: req.body.date_created,
      user_id: req.session.user_id,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.user_id;
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
