import axios from "../Lib/Axois"

export const setMedicalRecordForNurse = async (data) => {
    let res = await axios.post('/medicalRecords/setMedicalRecordForNurse', data)
    return res.data
} 

export const setMedicalRecordForDoctor = async (data) => {
    let res = await axios.post('/medicalRecords/setMedicalRecordForDoctor', data)
    return res.data
} 

export const getMedicalRecordForNurse = async (medicalRecordId) => {
    let res = await axios.post(`/medicalRecords/getMedicalRecordForNurse`, { medicalRecordId: medicalRecordId})
    return res.data
};

export const getMedicalRecordForDoctor = async (medicalRecordId) => {
    let res = await axios.post(`/medicalRecords/getMedicalRecordForDoctor`, { medicalRecordId: medicalRecordId })
    return res.data
};

export const getMedicalRecordForPharmacy = async (medicalRecordId) => {
    let res = await axios.post(`/medicalRecords/getMedicalRecordForPharmacy`, { medicalRecordId: medicalRecordId })
    return res.data
};


export const getMedicalRecord = async (medicalRecordId) => {
    let res = await axios.post(`/medicalRecords/getMedicalRecord`, { medicalRecordId: medicalRecordId })
    return res.data
};

export const getTreatmentHistoryOfPatient = async (citizentId, treatmentYear=null) => {
    let res = await axios.post(`/medicalRecords/getHistoryMedicalRecord`, { patientCitizenId: citizentId, treatmentYear: treatmentYear })
    return res.data
};
