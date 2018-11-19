import axios from 'axios'
import { ClinicProvider } from './ClinicProvider'

let db = `https://db.opdbooks.tk/`
// let db = `http://localhost:3003/`

export const addPatientFromDB = async (data) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +'/addPatient', data)
  return res.data
};
export const checkPatientFromDB = async (citizenId) => {
  let res = await axios.post(db + ClinicProvider.getClinic() +'/checkPatient', { citizenId: citizenId})
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
