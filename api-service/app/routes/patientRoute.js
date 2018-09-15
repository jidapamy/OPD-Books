const router = require("express").Router();

const { insertCtr, getCtr, isCitizenIdCtr, isEmailCtr } = require("./../controllers/patientController")

router.post("/insert", insertCtr);
router.get("/get/:citizenId", getCtr);
router.get("/isCitizenId/:citizenId", isCitizenIdCtr);
router.get("/isEmail/:email", isEmailCtr);

module.exports = router;
