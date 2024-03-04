const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// GET all posts made my logged in user
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.userId },
            include: [User],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;