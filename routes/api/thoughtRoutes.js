const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  postThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(postThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought)

router.route('/:thoughtId').put(updateThought)

router.route('/:thoughtId').delete(deleteThought);

// /api/applications/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/applications/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;