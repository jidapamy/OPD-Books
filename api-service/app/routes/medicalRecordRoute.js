const router = require("express").Router();

const { setMRForNurseCtr, setMRForDoctorCtr, getMRForNurseCtr, getMRForDoctorCtr, 
    getMedicalRecordCtr, getHistoryMedicalRecordCtr} = require("./../controllers/medicalRecordController")

router.post("/setMedicalRecordForNurse", setMRForNurseCtr);
router.post("/setMedicalRecordForDoctor", setMRForDoctorCtr);
router.get("/getMedicalRecordForNurse/:medId", getMRForNurseCtr);
router.get("/getMedicalRecordForDoctor/:medId", getMRForDoctorCtr);
router.get("/getMedicalRecord/:medId", getMedicalRecordCtr);
router.get("/getHistoryMedicalRecord/:patientCitizenId", getHistoryMedicalRecordCtr);

module.exports = router;
