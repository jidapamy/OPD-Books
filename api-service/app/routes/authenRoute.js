const router = require("express").Router();

const { loginCtr } = require("./../controllers/authController")

router.post("/login", loginCtr);

module.exports = router;