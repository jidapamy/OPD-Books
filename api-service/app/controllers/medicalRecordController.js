const { setMedicalRecordForNurse, setMedicalRecordForDoctor, getMedicalRecordForNurse,
    getMedicalRecordForDoctor, isMedicalRecord, alreadyMedicalRecord, haveMedicalRecordsOfPatient,
    getMedicalRecord, getHistoryMedicalRecord, lengthPatientHistory, haveMDRinPatientHistory } = require("./../repositories/medicalRecordRepo")
const { isPatient, isEmail } = require("./../repositories/patientRepo")

const msg = require("./../services/messageModel")

const setMRForNurseCtr = async (req, res) => {
    if (isPatient(req.body.patientCitizenId)) {
        setMedicalRecordForNurse(req.body)
            .then(result => { res.send(result); })
            .catch(err => { res.send(msg.getMsgError(err.text)) })
    } else {
        res.send(msg.getMsgNotFound(msg.msgVariable.citizenID));
    }
}

const setMRForDoctorCtr = async (req, res) => {
    const { patientCitizenId, medicalRecordId } = req.body
    if (isPatient(patientCitizenId)) {
        if (isMedicalRecord(medicalRecordId)) {
            if (!alreadyMedicalRecord(medicalRecordId)) {
                if (haveMedicalRecordsOfPatient(patientCitizenId, medicalRecordId)) {
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
    if (isMedicalRecord(req.params.medId)) {
        const result = await getMedicalRecordForNurse(req.params.medId)
        res.send(result)
        return
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.medicalRecord));
}

const getMRForDoctorCtr = async (req, res) => {
    if (isMedicalRecord(req.params.medId)) {
        if (alreadyMedicalRecord(req.params.medId)) {
            const result = await getMedicalRecordForDoctor(req.params.medId)
            res.send(result)
            return
        }
        res.send(msg.getMsgError(msg.msgVariable.doctorNotAssign))
        return
    }
    res.send(msg.getMsgNotFound(msg.msgVariable.medicalRecord));
}

const getMedicalRecordCtr = async (req, res) => {
    if (isMedicalRecord(req.params.medId)) {
        if (alreadyMedicalRecord(req.params.medId)) {
            const result = await getMedicalRecord(req.params.medId)
            res.send(result)
            return
        }
        res.send(msg.getMsgError(msg.msgVariable.doctorNotAssign))
        return
    }
    res.send(msg.getMsgError(msg.msgVariable.medicalRecord))
}

const getHistoryMedicalRecordCtr = async (req, res) => {
    if (isPatient(req.params.patientCitizenId)) {
        let length = lengthPatientHistory(req.params.patientCitizenId)
        if (length > 0) {
            const result = await getHistoryMedicalRecord(req.params.patientCitizenId, length)
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
    getHistoryMedicalRecordCtr
};