import axios from 'axios'
import { ClinicProvider } from './ClinicProvider'

// let db = `https://db.opdbooks.tk/${ClinicProvider.getClinic()}`
let db = `http://localhost:3003/`

export const addPatientFromDB = async (data) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +'/addPatient', data)
  return res.data
};
export const checkPatientFromDB = async (citizenId) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +'/checkPatient', { citizenId: citizenId})
  console.log(res.data)
  return res.data
};
export const getPatientFromDB = async (citizenId) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +'/getPatientFromDB', { citizenId: citizenId })
  return res.data
};



export const getAllQueuesFromDB = async () => {
  let res = await axios.get(db + ClinicProvider.getClinic() +'/getAllQueues')
  return res.data
};
export const getQueuesWithRoleFromDB = async (empRole) => {
  let res = await axios.get(db + ClinicProvider.getClinic() +`/getQueuesWithRole/${empRole}`)
  console.log("getQueuesWithRoleFromDB",res.data)
  return res.data
};
export const getQueueFromDB = async (queueId) => {
  let res = await axios.get(db + ClinicProvider.getClinic() +`/getQueue/${queueId}`)
  return res.data
};
export const addQueueFromDB = async (data) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +'/addQueue', data)
  return res.data
};
export const deleteAllQueuesFromDB = async (queueId) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +'/deleteAllQueues', { queueId: queueId})
  return res.data
};
export const updateQueueFromDB = async (queueId, empPosition, mdrId=null) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +'/updateQueue', { queueId: queueId, status: empPosition + 1, mdrId: mdrId })
  return res.data
};


// MedicalRecord
export const getMedicalRecordFromDB = async (mdrId) => {
  let res = await axios.get(db + ClinicProvider.getClinic() +`/getMedicalRecord/${mdrId}`)
  return res.data
};
export const addMedicalRecordForNurseFromDB = async (data) => {
  // data : mdrId:int,medicalRecord:{}
  let res = await axios.post(db + ClinicProvider.getClinic() +`/addMedicalRecordForNurse`, data)
  return res.data
};
export const getMedicalRecordForNurseFromDB = async (mdrId) => {
  let res = await axios.get(db + ClinicProvider.getClinic() +`/getMedicalRecordForNurse/${mdrId}`)
  // console.log(res.data)
  return res.data
};
export const addMedicalRecordForDoctorFromDB = async (data) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +`/addMedicalRecordForDoctor`, data)
  return res.data
};

export const updateMedicalRecordFromDB = async (data) => {
  // data : mdrId:int,medicalRecord:{}
  let res = await axios.post(db + ClinicProvider.getClinic() +`/updateMedicalRecord`, data)
  return res.data
};


// router.get("/getAllMedicalRecords", async (req, res) => getAllMedicalRecords(req, res));
// router.get("/getMedicalRecord/:mdrId", async (req, res) => getMedicalRecord(req, res))
// router.post("/addMedicalRecordForNurse", async (req, res) => addMedicalRecordForNurse(req, res))
// router.get("/getMedicalRecordForNurse/:mdrId", async (req, res) => getMedicalRecordForNurse(req, res))
// router.post("/updateMedicalRecord", async (req, res) => updateMedicalRecord(req, res))


// router.get("/getAllMedicalRecords", async (req, res) => getAllMedicalRecords(req, res));
// router.post("/addMedicalRecord", async (req, res) => addMedicalRecord(req, res))
// router.post("/updateMedicalRecord", async (req, res) => updateMedicalRecord(req, res))