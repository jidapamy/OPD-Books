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
    res.data.data.gender = res.data.data.gender === "M" ? "Male" : "Female"
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
  let res = await axios.post(`/patients/edit`, data)
  return res.data
}

export const requestOTP = async (data) => {
  console.log("requestOTP")
  let res = await axios.post(`/patients/requestOTPCtr`, data)
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
  console.log("requestOTPAgain")
  let res = await axios.post(`/patients/cancelRequestOTP`, { requestId: requestId })
  return res.data
}



const calculateAge = (dob) => {
  let year = ((+(moment().format('YYYY'))) - (+dob.substring(6)));
  let month = (+(moment().format('MM'))) - (+dob.substring(3, 5));
  let tmp = year + " ปี"
  if (year === 0) {
    month = month
    tmp = year + " ปี " + month + " เดือน"
  }
 return tmp
}