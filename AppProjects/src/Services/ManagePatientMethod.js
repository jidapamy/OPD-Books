import axios from "../Lib/Axois"
import moment from 'moment';
import { calculateAge } from "./Utils" 
export const insertPatient = async (data) => {
  let res = await axios.post('/patients/insert', data)
  return res.data
}

export const getPatient = async (citizenId) => {
  let res = await axios.post(`/patients/get`, { citizenId: citizenId })
  if (res.data.status){
    res.data.data.age = calculateAge(res.data.data.dob)
  }
  return res.data
}

export const getInfoPatient = async (citizenId) => {
  let res = await axios.post(`/patients/getBasicData`, { citizenId: citizenId })
  return res.data
}

export const checkEmail = async (email) => {
  let res = await axios.post(`/patients/isEmail`, { email : email })
  return res.data
}

export const editProfile = async (data) => {
  let res = await axios.post(`/patients/edit`, data)
  return res.data
}

export const checkPassword = async (citizenId,password) => {
  let res = await axios.post(`/patients/checkPassword`, { citizenId: citizenId , password: password })
  return res.data
}

export const validateOTP = async (data) => {
  let res = await axios.post(`/patients/validateOTP`, data)
  return res.data
}

export const confirmChangePassword = async (patient) => {
    let res = await axios.post(`/patients/confirmChangePassword`, patient)
    return res.data
}

export const forgotPasswordVerify = async (citizenId, dob, genVerificationCode = null) => {
    let res = await axios.post(`/patients/forgotPasswordVerify`, { citizenId: citizenId, dob: dob, genVerificationCode: genVerificationCode })
    return res.data
}

// for clinic
export const checkIdcard = async (citizenId) => {
  let res = await axios.post(`/patients/isCitizenId`, { citizenId: citizenId })
  return res.data
}

export const requestOTP = async (data) => {
  let res = await axios.post(`/patients/requestOTP`, data)
  return res.data
}

export const getPatientWithOTP = async (data) => {
  // validateOTP
  let res = await axios.post(`/patients/getPatientWithOTP`, data)
  if (res.data.status) {
    res.data.data.age = calculateAge(res.data.data.dob)
  }
  return res.data
}

export const cancelRequestOTP = async (requestId) => {
  let res = await axios.post(`/patients/cancelRequestOTP`, { requestId: requestId })
  return res.data
}