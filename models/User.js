const { Schema, model } = require("mongoose")

// username - String, Unique, Required, Trimmed
// email - String, Unique, Required, Must match a valid email address - Mongoose matching email
// thoughts - array of _id values referencing the Thought model
// firends - array of _id values referencing the User model

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Must match a valid email address!"],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// Schema settings - create a virtual called friendCount that retireves the length of the user's friends array on friend query 

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
