const { User, Thought } = require("../models");

// Get all users
const userController = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .select("-__v")
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Get single user by Id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
            .populate("friends")
            .populate("thoughts")
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },


    // Create a user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {
                $set: req.body,
            },
            {
                runValidators: true,
                new: true,
            }
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }

    // Delete a user and delete asscoiated thoughts
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }

                return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
            })
            .then(() => {
                res.json({ message: "User and associated thoughts deleted!" });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Add friend to the friends list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Remove rfriend to the friends list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};


module.exports = userController