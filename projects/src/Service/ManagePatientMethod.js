import axios from "./../Lib/axois"

export const insertPatient = async (data) => {
  console.log(data)
  let res = await axios.post('/patients/insert', data)
  return res.data
}

export const getPatient = async (citizenId) => {
  let res = await axios.get(`/patients/get/${citizenId}`)
  res.data.data.gender = res.data.data.gender === "M" ? "Male" : "Female"
  return res.data
}

export const checkIdcard = async (citizenId) => {
  let res = await axios.get(`/patients/isCitizenId/${citizenId}`)
  return res.data
}

export const checkEmail = async (email) => {
  let res = await axios.get(`/patients/isEmail/${email}`)
  return res.data
}