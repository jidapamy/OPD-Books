const router = require("express").Router();

const { insertCtr, getCtr, isCitizenIdCtr, isEmailCtr, getBasicDataCtr } = require("../Controllers/PatientController")

router.post("/insert", insertCtr);
router.get("/get/:citizenId", getCtr);
router.get("/getBasicData/:citizenId", getBasicDataCtr);
router.get("/isCitizenId/:citizenId", isCitizenIdCtr);
router.get("/isEmail/:email", isEmailCtr);

module.exports = router;
