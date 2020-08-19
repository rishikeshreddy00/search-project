const express = require("express")
const router = express.Router()

const {findUser} = require("../controllers/showuser")

router.route("/").post(findUser);


module.exports = router