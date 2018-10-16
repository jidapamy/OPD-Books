const router = require("express").Router();

const { insertCtr, getCtr, isCitizenIdCtr, isEmailCtr, getBasicDataCtr, editCtr} = require("../Controllers/PatientController")

router.post("/insert", insertCtr);
router.post("/get", getCtr);
router.post("/getBasicData", getBasicDataCtr);
router.post("/isCitizenId", isCitizenIdCtr);
router.post("/isEmail", isEmailCtr);
router.post("/edit", editCtr);


module.exports = router;
