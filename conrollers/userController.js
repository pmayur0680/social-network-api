const { User } = require('../models');
module.exports = {
    // `GET` all users
    getAllUsers(req, res) {
        res.send('`GET` all users');
    },    
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // `GET` a single user by its `_id` and populated thought and friend data
    getSingleUser(req, res) {
        res.send('`GET` a single user by its `_id` and populated thought and friend data');
    },
    //  `PUT` to update a user by its `_id`
    updateSingleUser(req, res) {
        res.send('`PUT` to update a user by its `_id`');
    },
    // `DELETE` to remove user by its `_id`
    deleteUser(req, res) {
        res.send('`DELETE` to remove user by its `_id`');

    },
     // `POST` to add a new friend to a user's friend list
     createUserFriend(req, res) {
        res.send("`POST` to add a new friend to a user's friend list");
    },
    // `DELETE` to remove a friend from a user's friend list
    deleteUserFriend(req, res) {
        res.send("`DELETE` to remove a friend from a user's friend list");

    }
}