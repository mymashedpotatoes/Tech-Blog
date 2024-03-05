const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  console.log(req.session);
  if (req.session.userId) {
    try {
      const newComment = await Comment.create({
        ...body,
        user_id: req.session.userId,
      });

      res.json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    console.log('userId is not set');
  }
});

module.exports = router;