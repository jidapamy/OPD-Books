import axios from "./../Lib/axois"

export const insertPatient = async (data) => {
  let res = await axios.post('/patients/insert', data)
  return res.data
}

export const getPatient = async (citizenId) => {
  let res = await axios.get(`/patients/get/${citizenId}`)
  return res.data
}