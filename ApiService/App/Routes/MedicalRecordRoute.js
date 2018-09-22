const router = require("express").Router();

const { setMRForNurseCtr, setMRForDoctorCtr, getMRForNurseCtr, getMRForDoctorCtr, 
    getMedicalRecordCtr, getHistoryMedicalRecordCtr, getMRForPharmacyCtr, 
    getBasicDataHistoryMedicalRecordCtr} = require("../Controllers/MedicalRecordController")

router.post("/setMedicalRecordForNurse", setMRForNurseCtr);
router.post("/setMedicalRecordForDoctor", setMRForDoctorCtr);
router.get("/getMedicalRecordForNurse/:medId", getMRForNurseCtr);
router.get("/getMedicalRecordForDoctor/:medId", getMRForDoctorCtr);
router.get("/getMedicalRecordForPharmacy/:medId", getMRForPharmacyCtr);
router.get("/getMedicalRecord/:medId", getMedicalRecordCtr);
router.get("/getHistoryMedicalRecord/:patientCitizenId", getHistoryMedicalRecordCtr);
router.get("/getBasicDataHistoryMedicalRecord/:patientCitizenId",getBasicDataHistoryMedicalRecordCtr);


module.exports = router;
