const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// CREATE post
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const newPost = await Post.create({ ...body, user_id: req.session.userId });
        console.log("New post: ", newPost);
        res.json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//UPDATE route
router.put('/:id', withAuth, async (req, res) => {
    await Post.update({
        title: req.body.title,
        content: req.body.content
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE route
router.delete('/:id', withAuth, async (req, res) => {
    await Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;