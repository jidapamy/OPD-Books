const express = require("express");
const AuthenticationMethod = require("../Service/AuthenticationMethod");
const ManagePatientMethod = require("../Service/ManagePatientMethod");
const MedicalRecordMethod  = require("../Service/MedicalRecordMethod");
const VARIABLE = require("./StaticVariable");
var router = express.Router();

// AuthenMethod
const login = AuthenticationMethod.login;
router.post("/login", (req, res) => {
  console.log(req.body);
    login(req.body.username, req.body.password)
    .then(result => { res.send(result) })
    .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

// ManagePatientMethod
const insertPatient = ManagePatientMethod.insertPatient;
const getPatient = ManagePatientMethod.getPatient;
router.post("/insertPatient", (req, res) => {
  insertPatient(req.body)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

router.get("/getPatient/:citizenId", (req, res) => {
  getPatient(req.params.citizenId)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});


//MedicalRecordMethod
const setMedicalRecordForNurse = MedicalRecordMethod.setMedicalRecordForNurse;
const setMedicalRecordForDocter = MedicalRecordMethod.setMedicalRecordForDocter;
const getMedicalRecordForNurse = MedicalRecordMethod.getMedicalRecordForNurse;
const getMedicalRecordForDocter = MedicalRecordMethod.getMedicalRecordForDocter;
const getMedicalRecord = MedicalRecordMethod.getMedicalRecord;
const addHistoryMedicalRecord = MedicalRecordMethod.addHistoryMedicalRecord;
const getHistoryMedicalRecord = MedicalRecordMethod.getHistoryMedicalRecord;

router.post("/setMedicalRecordForNurse", (req, res) => {
  setMedicalRecordForNurse(req.body)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

router.post("/setMedicalRecordForDocter", (req, res) => {
  setMedicalRecordForDocter(req.body)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

router.get("/getMedicalRecordForNurse/:medId", (req, res) => {
  getMedicalRecordForNurse(req.params.medId)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

router.get("/getMedicalRecordForDocter/:medId", (req, res) => {
  getMedicalRecordForDocter(req.params.medId)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

router.get("/getMedicalRecord/:medId", (req, res) => {
  getMedicalRecord(req.params.medId)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

router.post("/addHistoryMedicalRecord", (req, res) => {
  addHistoryMedicalRecord(req.body.patientCitizenId,req.body.medicalRecordId)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

router.get("/getHistoryMedicalRecord/:patientCitizenId", (req, res) => {
  console.log(req.params.patientCitizenId);
  getHistoryMedicalRecord(req.params.patientCitizenId)
  .then(result => { res.send(result) })
  .catch(err => { res.send({ status: false, message: "ERROR : "+err.message }) });
});

module.exports = router;
