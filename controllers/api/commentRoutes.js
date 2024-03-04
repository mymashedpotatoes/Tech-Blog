const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  console.log(req.session);
  if (req.session.userId) {
      console.log('userId is set:', req.session.userId);
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
      res.status(401).json({ message: 'Unauthorized' });
  }
});

module.exports = router;