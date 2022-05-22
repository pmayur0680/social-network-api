const { User, Thought } = require('../models');

module.exports = {
    // `GET` to get all thoughts
    getAllThoughts(req, res) {
        res.send('`GET` to get all thoughts');
    },
    // `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated 
    // user's `thoughts` array field)
    createThought(req, res) {
        Thought.create( { thoughtText: req.body.thoughtText, username: req.body.username } )
        .then (( {_id} ) => {
            // also update user to push new thought in array
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: _id }}, 
                { new: true, runValidators: true }
            );
        })
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    // `GET` to get a single thought by its `_id`
    getSingleThought(req, res) {
        res.send('`GET` to get a single thought by its `_id`');
    },
    // `PUT` to update a thought by its `_id`
    updateSingleThought(req, res) {
        res.send('`PUT` to update a thought by its `_id`');
    },
    // `DELETE` to remove a thought by its `_id`
    deleteThought(req, res) {
        res.send('`DELETE` to remove a thought by its `_id`');

    },
     // `POST` to create a reaction stored in a single thought's `reactions` array field
     createReaction(req, res) {
        res.send("`POST` to create a reaction stored in a single thought's `reactions` array field");
    },
    // `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
    deleteReaction(req, res) {
        res.send("`DELETE` to pull and remove a reaction by the reaction's `reactionId` value");

    }
}