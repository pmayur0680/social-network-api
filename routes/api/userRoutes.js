const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateSingleUser,
    deleteUser,
    createUserFriend,
    deleteUserFriend
} = require('../../conrollers/userController');

// Get and Post - api/users
router.route('/').get(getAllUsers).post(createUser);

// Get, Put and Delete - api/users/:id
router.route('/:id').get(getSingleUser).put(updateSingleUser).delete(deleteUser);

// Post and Delete - api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(createUserFriend).delete(deleteUserFriend);

module.exports = router;