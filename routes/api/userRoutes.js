const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateSingleUser,
    deleteUser
} = require('../../conrollers/userController');

// get and post - api/users
router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getSingleUser).put(updateSingleUser).delete(deleteUser);
module.exports = router;