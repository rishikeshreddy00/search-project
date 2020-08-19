const express = require("express")
const {getUser,postUser} = require("../controllers/adduser")

const router = express.Router()

router.route("/").get(getUser).post(postUser);


module.exports = router