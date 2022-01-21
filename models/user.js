const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: 'user',
            enum: ["user", "manager", "admin"]
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        section: {
            type: String
        },
    },
    { timestamps: true }
);

module.exports = model("User", UserSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');
 
// const UserSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     }
// });
 
// UserSchema.plugin(passportLocalMongoose);
 
// module.exports = mongoose.model('User', UserSchema);
 

