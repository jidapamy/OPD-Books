const router = require("express").Router();

const { loginCtr } = require("../Controllers/AuthController")

router.post("/login", loginCtr);

module.exports = router;