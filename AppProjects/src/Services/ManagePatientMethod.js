import axios from "../Lib/Axois"
import moment from 'moment';

export const insertPatient = async (data) => {
  let res = await axios.post('/patients/insert', data)
  return res.data
}

export const getPatient = async (citizenId) => {
  let res = await axios.post(`/patients/get`, { citizenId: citizenId })
  // console.log(res)
  if (res.data.status){
    res.data.data.age = calculateAge(res.data.data.dob)
  }
  console.log(res.data)
  return res.data
}

export const getInfoPatient = async (citizenId) => {
  let res = await axios.post(`/patients/getBasicData`, { citizenId: citizenId })
  if (res.data.status) {
    res.data.data.gender = res.data.data.gender === "M" ? "Male" : "Female"
  }
  return res.data
}

export const checkIdcard = async (citizenId) => {
  let res = await axios.post(`/patients/isCitizenId`, { citizenId: citizenId })
  return res.data
}

export const checkEmail = async (email) => {
  let res = await axios.post(`/patients/isEmail`, { email : email })
  return res.data
}

export const editProfile = async (data) => {
  console.log("editProfile Method")
  let res = await axios.post(`/patients/edit`, data)
  return res.data
}

export const checkPassword = async (citizenId,password) => {
  let res = await axios.post(`/patients/checkPassword`, { citizenId: citizenId , password: password })
  console.log("checkPassword",res.data)
  return res.data
}


export const requestOTP = async (data) => {
  console.log("requestOTP")
  let res = await axios.post(`/patients/requestOTP`, data)
  return res.data
}

export const getPatientWithOTP = async (data) => {
  // validateOTP
  let res = await axios.post(`/patients/getPatientWithOTP`, data)
  if (res.data.status) {
    res.data.data.gender = res.data.data.gender === "M" ? "Male" : "Female"
    res.data.data.age = calculateAge(res.data.data.dob)
  }
  return res.data
}

export const cancelRequestOTP = async (requestId) => {
  let res = await axios.post(`/patients/cancelRequestOTP`, { requestId: requestId })
  return res.data
}

export const validateOTP = async (data) => {
  let res = await axios.post(`/patients/validateOTP`, data)
  return res.data
}

export const confirmChangePassword = async (patient) => {
  let res = await axios.post(`/patients/confirmChangePassword`, patient)
  console.log("checkPassword", res.data)
  return res.data
}

export const forgotPasswordVerify = async (citizenId,dob) => {
  console.log("forgotPasswordVerify")
  let res = await axios.post(`/patients/forgotPasswordVerify`, { citizenId: citizenId, dob: dob })
  return res.data
}

const calculateAge = (dob) => {
  let year = ((+(moment().format('YYYY'))) - (+dob.substring(6)));
  let month = (+(moment().format('MM'))) - (+dob.substring(3, 5));
  let tmp = year + " years"
  if (year === 0) {
    month = month
    tmp = year + " years " + month + " month"
  }
 return tmp
}