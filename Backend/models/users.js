var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
   
    name:String,
    email: String,
    mobile: String,
    password:String,
    passwordConf:String,


}),

User = mongoose.model('User', userSchema);



module.exports = User;