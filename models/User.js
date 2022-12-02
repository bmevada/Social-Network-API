// username - String, Unique, Required, Trimmed

const { model } = require("mongoose")

// email - String, Unique, Required, Must match a valid email address - Mongoose matching email
// thoughts - array of _id values referencing the Thought model
// firends - array of _id values referencing the User model

// Schema settings - create a virtual called friendCount that retireves the length of the user's friends array on friend query 

