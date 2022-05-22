const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getSingleThought,
    updateSingleThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../conrollers/thoughtController');

// Get and Post - api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Get, Put and Delete - api/thoughts/:id
router.route('/:id').get(getSingleThought).put(updateSingleThought).delete(deleteThought);

// Post - api/thoughts/:thoughtId/reactions
router.route('/:id/reactions').post(createReaction);

// Delete - api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;