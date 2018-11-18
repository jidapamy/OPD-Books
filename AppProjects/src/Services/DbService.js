import axios from 'axios'
let db = 'https://db.opdbooks.tk'

export const addPatientFromDB = async (data) => {
  let res = await axios.post(db+'/addPatient', data)
  return res.data
};
export const checkPatientFromDB = async (citizenId) => {
  let res = await axios.post(db + '/checkPatient', { citizenId: citizenId})
  return res.data
};
export const getPatientFromDB = async (citizenId) => {
  let res = await axios.post(db + '/getPatientFromDB', { citizenId: citizenId })
  return res.data
};



export const getAllQueuesFromDB = async () => {
  let res = await axios.get(db +'/getAllQueues')
  return res.data
};
export const getQueuesWithRoleFromDB = async (empRole) => {
  let res = await axios.get(db +`/getQueuesWithRole/${empRole}`)
  return res.data
};
export const getQueueFromDB = async (queueId) => {
  let res = await axios.get(db +`/getQueue/${queueId}`)
  return res.data
};
export const addQueueFromDB = async (data) => {
  let res = await axios.post(db +'/addQueue', data)
  return res.data
};
export const deleteAllQueuesFromDB = async (queueId) => {
  let res = await axios.post(db +'/deleteAllQueues', { queueId: queueId})
  return res.data
};
export const updateQueueFromDB = async (queueId, empPosition, mdrId=null) => {
  let res = await axios.post(db + '/updateQueue', { queueId: queueId, status: empPosition + 1, mdrId: mdrId })
  return res.data
};


// MedicalRecord
export const getMedicalRecordFromDB = async (mdrId) => {
  let res = await axios.get(db + `/getMedicalRecord/${mdrId}`)
  return res.data
};
export const addMedicalRecordForNurseFromDB = async (data) => {
  // data : mdrId:int,medicalRecord:{}
  let res = await axios.post(db + `/addMedicalRecordForNurse`, data)
  return res.data
};
export const getMedicalRecordForNurseFromDB = async (mdrId) => {
  let res = await axios.get(db + `/getMedicalRecordForNurse/${mdrId}`)
  return res.data
};
export const addMedicalRecordForDoctorFromDB = async (data) => {
  let res = await axios.post(db + `/addMedicalRecordForDoctor`, data)
  return res.data
};

export const updateMedicalRecordFromDB = async (data) => {
  // data : mdrId:int,medicalRecord:{}
  let res = await axios.post(db + `/updateMedicalRecord`, data)
  return res.data
};
