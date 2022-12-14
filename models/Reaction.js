// Reaction (SCHEMA ONLY)
const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// reactionId - Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId
// reactionBody
// String
// Required - 280 character maximum

// username
// String;  
// Required - createdAt, Date - Set default value to the current timestamp
// Use a getter method to format the timestamp on query


const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

// Schema Settings
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

module.exports = reactionSchema;