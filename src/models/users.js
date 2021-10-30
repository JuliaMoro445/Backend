var mongoose = require ("mongoose")
var fields = {
    name: {type: String}, 
    lastName: {type: String},
    email: {type: String},
    phone: {type: String},
    mobile: {type: String}
}

var userSchema = new mongoose.Schema(fields)

module.exports = mongoose.model("users",userSchema)

