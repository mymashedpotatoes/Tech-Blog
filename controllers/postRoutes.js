const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// /api/posts GET all posts for homepage
router.get('/', async (req, res) => {
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

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true });
    res.render('single-post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
