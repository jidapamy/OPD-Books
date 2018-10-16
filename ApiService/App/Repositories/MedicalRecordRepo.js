const { web3, contract, defaultAccount } = require('../Lib/Web3')
const { convertString, convertToAscii, bindData, unlockAccount, lockAccount } = require('../Services/Utils')
const moment = require("moment");
const { medicalRecordScheme } = require("../Models/MedicalRecordModel")

const notRequiredField = (value) => {
    if (value) {
        return value;
    }
    return "-"
}

const setMedicalRecordForNurse = async (medicalRecord) => {
    // let medicalRecordId = (+contract.getLengthMedicalRecords() + 1) + "";
    let key = convertString(medicalRecord.patientCitizenId + "" + medicalRecord.date+""+medicalRecord.time)
    if (unlockAccount()) {
        contract.setMedicalRecordForNursePart1(
            convertString(medicalRecord.patientCitizenId),
            key,
            convertString(medicalRecord.clinic),
            convertString(medicalRecord.height),
            convertString(medicalRecord.bodyWeight),
            convertString(medicalRecord.bmi),
            convertString(medicalRecord.temperature),
            convertString(medicalRecord.date),
            convertString(medicalRecord.time),
            defaultAccount
        );
        let medicalRecordId = await contract.getMedicalRecordId(key).toString()
        // console.log("medicalRecordId",medicalRecordId)
        contract.setMedicalRecordForNursePart2(
            medicalRecordId,
            convertString(medicalRecord.pulseRate),
            convertString(medicalRecord.respiratoryRate),
            convertString(notRequiredField(medicalRecord.BP1)),
            convertString(notRequiredField(medicalRecord.BP2)),
            convertString(notRequiredField(medicalRecord.BP3)),
            convertString(notRequiredField(medicalRecord.chiefComplaint)),
            convertString(notRequiredField(medicalRecord.nurseName)),
            defaultAccount
        );
        // console.log("Success")
        lockAccount()
        let check = false
        while (check === false) {
            check = isMedicalRecord(medicalRecordId);
            if (check) {
                return { status: true, message: "SUCCESS", data: { medicalRecordId: medicalRecordId } };
            }
        }
    } else {
        return { status: false, message: "ERROR" };
    }
}

const setMedicalRecordForDoctor = async medicalRecord => {
    // console.log("setMedicalRecordForDoctor")
    if (unlockAccount()) {
        contract.setMedicalRecordForDoctor(
            medicalRecord.medicalRecordId,
            convertString(medicalRecord.presentIllness),
            convertString(medicalRecord.physicalExem),
            convertString(medicalRecord.diagnosis),
            convertString(medicalRecord.treatment),
            convertString(medicalRecord.recommendation),
            convertString(notRequiredField(medicalRecord.appointment)),
            convertString(medicalRecord.doctorName),
            defaultAccount
        );

        contract.addHistoryMedicalRecord(
            convertString(medicalRecord.patientCitizenId),
            medicalRecord.medicalRecordId,
            defaultAccount
        );
        // console.log("Success")
        lockAccount()
        let checkTxDoctor = false;
        let checkTxAddHistory = false;
        while (!checkTxDoctor || !checkTxAddHistory) {
            checkTxDoctor = alreadyMedicalRecord(medicalRecord.medicalRecordId)
            checkTxAddHistory = haveMDRinPatientHistory(
                medicalRecord.patientCitizenId,
                medicalRecord.medicalRecordId
            )
            if (checkTxDoctor && checkTxAddHistory) {
                return { status: true, message: "SUCCESS" };
            }
        }
    } else {
        return { status: false, message: "ERROR" };
    }
};

const getMedicalRecordForNurse = async (medicalRecordId) => {
    // const byteMedicalRecordId = convertString(medicalRecordId)
    const nurse1 = await contract.getMedicalRecordForNursePart1(medicalRecordId);
    const nurse2 = await contract.getMedicalRecordForNursePart2(medicalRecordId);
    const patientCitizenId = await contract.getPatientIdFormMDR(medicalRecordId);
    const combindedNurseData = bindData(medicalRecordScheme, [nurse1, nurse2], 'nurse')
    let medicalRecord = combindedNurseData
    medicalRecord.medicalRecordId = medicalRecordId;
    medicalRecord.patientCitizenId = convertToAscii(patientCitizenId);

    return { status: true, message: "SUCCESS", data: medicalRecord };
};

const getMedicalRecordForDoctor = async (medicalRecordId) => {
    // const byteMedicalRecordId = convertString(medicalRecordId)
    const doctor = await contract.getMedicalRecordForDoctor(medicalRecordId);
    const patientCitizenId = await contract.getPatientIdFormMDR(medicalRecordId);

    const combindedDortorData = bindData(medicalRecordScheme, [doctor], 'doctor')
    let medicalRecord = combindedDortorData
    medicalRecord.medicalRecordId = medicalRecordId;
    medicalRecord.patientCitizenId = convertToAscii(patientCitizenId);

    return { status: true, message: "SUCCESS", data: medicalRecord };
};

const getMedicalRecordForPharmacy = async (medicalRecordId) => {
    // console.log(medicalRecordId)
    // const byteMedicalRecordId = convertString(medicalRecordId)
    const pharmacy = await contract.getMedicalRecordForPharmacy(medicalRecordId);
    const combindedPharmacyData = bindData(medicalRecordScheme, [pharmacy], 'pharmacy')
    let medicalRecord = combindedPharmacyData

    return { status: true, message: "SUCCESS", data: medicalRecord };
};

const getMedicalRecord = async medicalRecordId => {
    let nurse = await getMedicalRecordForNurse(medicalRecordId);
    let doctor = await getMedicalRecordForDoctor(medicalRecordId);
    return { status: true, message: "SUCCESS", data: { ...nurse.data, ...doctor.data } };
}

const getMedicalRecordForShowHistory = async (citizenId, length) => {
    const byteCitizenId = convertString(citizenId)
    let medicalRecord = []
    for (let i = 0; i < length; i++) {
        let medicalRecordId = await contract.getHistoryMedicalRecordPatient(byteCitizenId, i);
        // let stringMedicalRecordId = convertToAscii(byteMedicalRecordId)
        const data = await contract.getMedicalRecordForShowHistory(medicalRecordId.toString())
        const combindedHistoryData = bindData(medicalRecordScheme, [data], 'history')
        combindedHistoryData.medicalRecordId = stringMedicalRecordId;
        medicalRecord.push(combindedHistoryData)
    }
    return { status: true, message: "SUCCESS", data: medicalRecord };

}

const getHistoryMedicalRecord = async (citizenId, length) => {
    const byteCitizenId = convertString(citizenId)
    let medicalRecord = []
    for (let i = 0; i < length; i++) {
        let medicalRecordId = await contract.getHistoryMedicalRecordPatient(byteCitizenId, i);
        // console.log("byteMedicalRecordId", byteMedicalRecordId.toString())
        // let stringMedicalRecordId = byteMedicalRecordId.toString()
        // console.log("stringMedicalRecordId", stringMedicalRecordId)
        const { data } = await getMedicalRecord(medicalRecordId.toString())
        medicalRecord.push(data)
    }
    return { status: true, message: "SUCCESS", data: medicalRecord };

}
const isMedicalRecord = medicalRecordId => {
    // const byteMedicalRecordId = convertString(medicalRecordId)
    return contract.haveMedicalRecords(medicalRecordId)
}

const alreadyMedicalRecord = medicalRecordId => {
    // const byteMedicalRecordId = convertString(medicalRecordId)
    return contract.alreadyDataInMedicalRecordsId(medicalRecordId)
}

const haveMedicalRecordsOfPatient = (patientCitizenId, medicalRecordId) => {
    // const byteMedicalRecordId = convertString(medicalRecordId)
    const bytePatientCitizenId = convertString(patientCitizenId)
    // console.log("bytePatientCitizenId", bytePatientCitizenId)
    return contract.haveMedicalRecordsOfPatient(bytePatientCitizenId, medicalRecordId)
}

const haveMDRinPatientHistory = (patientCitizenId, medicalRecordId) => {
    // const byteMedicalRecordId = convertString(medicalRecordId)
    const bytePatientCitizenId = convertString(patientCitizenId)
    return contract.haveHistoryOfPatient(bytePatientCitizenId, medicalRecordId);
}

const lengthPatientHistory = (patientCitizenId) => {
    const bytePatientCitizenId = convertString(patientCitizenId)
    return +contract.countHistoryMedicalRecordForPatient(bytePatientCitizenId).toString();
}

module.exports = {
    setMedicalRecordForNurse,
    setMedicalRecordForDoctor,
    getMedicalRecordForNurse,
    getMedicalRecordForDoctor,
    isMedicalRecord,
    alreadyMedicalRecord,
    haveMedicalRecordsOfPatient,
    haveMDRinPatientHistory,
    getMedicalRecord,
    getHistoryMedicalRecord,
    lengthPatientHistory,
    getMedicalRecordForPharmacy,
    getMedicalRecordForShowHistory
};