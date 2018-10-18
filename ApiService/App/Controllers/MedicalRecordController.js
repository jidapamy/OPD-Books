const { setMedicalRecordForNurse, setMedicalRecordForDoctor, getMedicalRecordForNurse,
    getMedicalRecordForDoctor, isMedicalRecord, alreadyMedicalRecord, haveMedicalRecordsOfPatient,
    getMedicalRecord, getHistoryMedicalRecord, lengthPatientHistory, haveMDRinPatientHistory,
    getMedicalRecordForPharmacy, getMedicalRecordForShowHistory } = require("../Repositories/MedicalRecordRepo")
const { isPatient, isEmail } = require("../Repositories/PatientRepo")
const { lockAccount } = require('../Services/Utils')

const msg = require("../Services/Message")

const setMRForNurseCtr = async (req, res) => {
    if (isPatient(req.body.patientCitizenId)) {
        console.log("ispatient")
        setMedicalRecordForNurse(req.body)
            .then(result => { res.send(result); })
            .catch(err => {
                console.log(err)
                res.send(msg.getMsgError(err.text))
                lockAccount()
            })
    } else {
        res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
    }
}

const setMRForDoctorCtr = async (req, res) => {
    const { patientCitizenId, medicalRecordId } = req.body
    if (isPatient(patientCitizenId)) {
        if (isMedicalRecord(medicalRecordId)) {
            if (!alreadyMedicalRecord(medicalRecordId)) {
                console.log("โย้")
                if (haveMedicalRecordsOfPatient(patientCitizenId, medicalRecordId)) {
                    console.log("เย้")
                    if (!haveMDRinPatientHistory(patientCitizenId, medicalRecordId)) {
                        const result = await setMedicalRecordForDoctor(req.body)
                        res.send(result)
                        return
                    }
                    res.send(msg.getMsgError(msg.msgVariable.alreadyMRDinPatientHistory))
                    return
                }
                res.send(msg.getMsgNotMatch(msg.msgVariable.citizenID, msg.msgVariable.medicalRecordId))
                return
            }
            res.send(msg.getMsgDuplicate(msg.msgVariable.medicalRecordId))
            return
        }
        res.send(msg.getMsgNotFound(msg.msgVariable.medicalRecordId))
        return
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const getMRForNurseCtr = async (req, res) => {
    if (isMedicalRecord(req.body.medicalRecordId)) {
        const result = await getMedicalRecordForNurse(req.body.medicalRecordId)
        res.send(result)
        return
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.medicalRecord));
}

const getMRForDoctorCtr = async (req, res) => {
    if (isMedicalRecord(req.body.medicalRecordId)) {
        if (alreadyMedicalRecord(req.body.medicalRecordId)) {
            const result = await getMedicalRecordForDoctor(req.body.medicalRecordId)
            res.send(result)
            return
        }
        res.send(msg.getMsgError(msg.msgVariable.doctorNotAssign))
        return
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.medicalRecord));
}

const getMRForPharmacyCtr = async (req, res) => {
    if (isMedicalRecord(req.body.medicalRecordId)) {
        if (alreadyMedicalRecord(req.body.medicalRecordId)) {
            const result = await getMedicalRecordForPharmacy(req.body.medicalRecordId)
            res.send(result)
            return
        }
        res.send(msg.getMsgError(msg.msgVariable.doctorNotAssign))
        return
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.medicalRecord));
}

const getMedicalRecordCtr = async (req, res) => {
    if (isMedicalRecord(req.body.medicalRecordId)) {
        if (alreadyMedicalRecord(req.body.medicalRecordId)) {
            const result = await getMedicalRecord(req.body.medicalRecordId)
            res.send(result)
            return
        }
        res.send(msg.getMsgError(msg.msgVariable.doctorNotAssign))
        return
    }
    res.send(msg.getMsgError(msg.msgVariable.medicalRecord))
}

const getHistoryMedicalRecordCtr = async (req, res) => {
    if (isPatient(req.body.patientCitizenId)) {
        let length = lengthPatientHistory(req.body.patientCitizenId)
        console.log("Length ",length)
        if (length > 0) {
            const result = await getHistoryMedicalRecord(req.body.patientCitizenId, length)
            res.send(result)
            return
        }
        res.send(msg.getMsgSuccess(msg.msgVariable.nothaveHistoryMDR))
        return
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

const getBasicDataHistoryMedicalRecordCtr = async (req, res) => {
    if (isPatient(req.body.patientCitizenId)) {
        let length = lengthPatientHistory(req.body.patientCitizenId)
        if (length > 0) {
            const result = await getMedicalRecordForShowHistory(req.body.patientCitizenId, length)
            res.send(result)
            return
        }
        res.send(msg.getMsgSuccess(msg.msgVariable.nothaveHistoryMDR))
        return
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
}

module.exports = {
    setMRForNurseCtr,
    setMRForDoctorCtr,
    getMRForNurseCtr,
    getMRForDoctorCtr,
    getMedicalRecordCtr,
    getHistoryMedicalRecordCtr,
    getMRForPharmacyCtr,
    getBasicDataHistoryMedicalRecordCtr
};