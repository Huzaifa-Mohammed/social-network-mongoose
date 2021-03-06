const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true

    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }, ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }, ],
}, {
    toJSON: {
        getters: true,
        validators: true,
    },
    id: false,
});
UserSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;