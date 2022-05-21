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

// Post and Delete - api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;