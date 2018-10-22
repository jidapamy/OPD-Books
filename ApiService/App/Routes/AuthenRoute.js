const router = require("express").Router();

const { loginCtr, sendEmailCtr } = require("../Controllers/AuthController")

router.post("/login", loginCtr);
router.post("/sendEmail", sendEmailCtr)

module.exports = router;