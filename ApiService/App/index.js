const Router = require('express').Router
const router = Router()

const route = require("./routes");

router.use("/", route)
module.exports = router