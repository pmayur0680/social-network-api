const { ObjectId } = require('mongoose').Types;
const { createSecureServer } = require('http2');
const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getAllUsers(req, res) {
        res.send('`GET` all users');
    },
    // create a new user
    createUser(req, res) {
        res.send('`POST` a new user');
    },
    // get a single user
    getSingleUser(req, res) {
        res.send('`GET` a single user by its `_id` and populated thought and friend data');
    },
    // update a user by its `_id`
    updateSingleUser(req, res) {
        res.send('`PUT` to update a user by its `_id`');
    },
    // delete a user
    deleteUser(req, res) {
        res.send('`DELETE` to remove user by its `_id`');

    }
}