const router = require("express").Router();

const { insertCtr, getCtr, isCitizenIdCtr, isEmailCtr, getBasicDataCtr, editCtr, getPatientWithOTPCtr, requestOTPCtr,
    cancelRequestOTPCtr, forgotPasswordVerifyCtr, forgotPasswordConfirmCtr} = require("../Controllers/PatientController")

router.post("/insert", insertCtr);
router.post("/get", getCtr);
router.post("/getBasicData", getBasicDataCtr);
router.post("/isCitizenId", isCitizenIdCtr);
router.post("/isEmail", isEmailCtr);
router.post("/edit", editCtr);
// router.post("/requestOTP", requestOTPCtr);
// router.post("/validateOTP", validateOTPCtr);
router.post("/getPatientWithOTP", getPatientWithOTPCtr);
router.post("/requestOTPCtr", requestOTPCtr);
router.post("/cancelRequestOTP", cancelRequestOTPCtr);

router.post("/forgotPasswordVerify", forgotPasswordVerifyCtr);
router.post("/forgotPasswordConfirm", forgotPasswordConfirmCtr);

module.exports = router;
