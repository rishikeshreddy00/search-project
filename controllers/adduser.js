const User = require("../models/User")

exports.getUser = async (req,res,next)=>{
    try {
        return res.status(200).render("adduser");
    }
    catch (e){
        console.log(e)
        res.status(500).json({
            error : "server error"
        })
    }
}

exports.postUser = async (req,res,next)=>{
    try {
        const name = req.body.name
        const location =  req.body.location
        await User({
            name : name,
            location : location
        }).save()
        return res.status(200).redirect("/");
    }
    catch (e){
        if(e.code == 11000) {
            return res.render("notfound",{ msg: 'A user with that username already exists. '});
        }
        else {
            return res.send( err );
        }
    }
}