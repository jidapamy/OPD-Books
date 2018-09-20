import axios from "./../Lib/axois"

export const setMedicalRecordForNurse = async (data) => {
    let res = await axios.post('/medicalRecords/setMedicalRecordForNurse', data)
    return res.data
} 

export const setMedicalRecordForDoctor = async (data) => {
    let res = await axios.post('/medicalRecords/setMedicalRecordForDoctor', data)
    return res.data
} 

export const getMedicalRecordForNurse = async (medicalRecordId) => {
    let res = await axios.get(`/medicalRecords/getMedicalRecordForNurse/${medicalRecordId}`)
    return res.data
};

export const getMedicalRecordForDoctor = async (medicalRecordId) => {
    let res = await axios.get(`/medicalRecords/getMedicalRecordForDoctor/${medicalRecordId}`)
    return res.data
};

export const getMedicalRecord = async (medicalRecordId) => {
    let res = await axios.get(`/medicalRecords/getMedicalRecord/${medicalRecordId}`)
    return res.data
};

export const getTreatmentHistoryOfPatient = async (citizentId) => {
    let res = await axios.get(`/medicalRecords/getHistoryMedicalRecord/${citizentId}`)
    return res.data
};

