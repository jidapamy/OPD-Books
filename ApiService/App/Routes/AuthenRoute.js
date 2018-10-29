const router = require("express").Router();

const { loginCtr, sendEmailCtr, verifyEmailCtr } = require("../Controllers/AuthController")

router.post("/login", loginCtr);
router.post("/sendEmail", sendEmailCtr)
router.post("/verifyEmail", verifyEmailCtr )


module.exports = router;