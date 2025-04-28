const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose"); // they save username and passwrod with hashing and salting on its own

const userSchema = new Schema({
      email: {
        type:String,
        required : true
      },


});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);
