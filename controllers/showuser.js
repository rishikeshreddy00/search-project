const User = require("../models/User")

exports.findUser = async (req,res,next)=>{
    try {
        const searchUser = req.body.searchUser
        User.findOne({ name : searchUser }, function (err, user) {
            if (err) {
                    return res.send( err );
            }else {
                if(user !== null){
                    res.status(200).render("showuser",{user : user})
                }else{
                    User.findOne({ location : searchUser }, function (err, user) {
                        if (err) {
                                return res.send( err );
                        }else {
                            if (user === null){
                                res.status(500).render("notfound",{
                                    msg : "User doesn't exist"
                                })
                            }
                            else{
                                res.status(200).render("showuser",{user: user})
                            }  
                        }
                    })
                }
            }
        });
    }
    catch (e){
        res.status(500).json({
            error : e
        })
    }
} 