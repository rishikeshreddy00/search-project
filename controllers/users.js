const User = require("../models/User")

exports.getAllUsers = async (req,res,next)=>{
    try {
       User.find({},function(err,users){
            return res.status(200).render("users.ejs",{users : users});
        })
    }
    catch (e){
        console.log(e)
        res.status(500).json({
            error : "server error"
        })
    }
}

