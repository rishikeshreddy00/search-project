const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true,"please add name"],
        unique : true,
    }, 
    location : {
      type : String,
      required : [true,"please enter the Location"]
    }
})

module.exports = mongoose.model("User",userSchema)