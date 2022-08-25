const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email :{type : String, required : true},
    password : {type : String, required : true},
    phoneno : {type : Number}
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
