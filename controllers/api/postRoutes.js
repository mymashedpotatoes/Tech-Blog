const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/posts
router.get('/posts', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll();
  
      const posts = postData.map((post) =>
        post.get({ plain: true })
      );
  
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;
