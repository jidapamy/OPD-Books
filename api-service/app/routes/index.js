const Router = require('express').Router

const router = Router()

const auth = require("./authenRoute");
const patient = require("./patientRoute");
const mdr = require("./medicalRecordRoute");

router.use("/auth", auth)
router.use("/patients", patient)
router.use("/medicalRecords", mdr)

module.exports = router